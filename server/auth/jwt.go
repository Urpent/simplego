package auth

import (
	"context"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/dgrijalva/jwt-go/request"
)

//************JWT************
// using asymmetric crypto/RSA keys
// location of the files used for signing and verification
// private key used to sign, pub key used to verify
const ( //Structure path nicer, eg. put all jwt related in one folder
	privKeyPath = "keys/app.rsa"     // openssl genrsa -out app.rsa 1024
	pubKeyPath  = "keys/app.rsa.pub" // openssl rsa -in app.rsa -pubout > app.rsa.pub
)

var (
	verifyKey []byte

	signKey []byte
)

// UserInfo store the user name and role for permission implementation
type UserInfo struct {
	UserID uint64
}

//***************************

// InitKeys retrieve key from file and store in memory for generation and validation of JWT
func InitKeys() { // init() is special. It is automatically executed when a package is loaded.
	var err error
	signKey, err = ioutil.ReadFile(privKeyPath)
	if err != nil {
		log.Fatal("Error reading private key")
		return
	}

	verifyKey, err = ioutil.ReadFile(pubKeyPath)
	if err != nil {
		log.Fatal("Error reading private key")
		return
	}
}

// GenerateJWT generate security token for user.
func GenerateJWT(userID uint64) (token string, err error) {
	t := jwt.New(jwt.SigningMethodRS256)
	//Claims
	claims := t.Claims.(jwt.MapClaims)

	claims["iss"] = "admin" //optional
	claims["UserInfo"] = &UserInfo{userID}
	claims["exp"] = time.Now().Add(time.Hour * 10).Unix() // set the expire time Default:time.Hour * 11

	key, _ := jwt.ParseRSAPrivateKeyFromPEM(signKey)

	token, err = t.SignedString(key) //Signed Token is sent to user, and user will use it to verify themselves
	return
}

// VerifyToken is http middleware for validating JSON Web Token.
//
// If validation SUCCESS, it will extract custom info from Token and
// pass to next middleware.
//
// If validation FAIL, it will provide error response.
func VerifyToken(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		token, err := request.ParseFromRequest(r,
			request.AuthorizationHeaderExtractor, //r contain token sent by client
			func(token *jwt.Token) (interface{}, error) {
				// Validate token's sign method algorithm.
				//This "if" is optional, we can also simply return our verification key without checking.
				if _, ok := token.Method.(*jwt.SigningMethodRSA); !ok {
					return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
				}
				//return verifyKey, nil //Latest version no longer accept verifykey in []byte.
				return jwt.ParseRSAPublicKeyFromPEM(verifyKey)
			})

		if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
			//fmt.Println(claims["iss"]) // Issue By
			fmt.Printf("%v (jwt.go func - VerifyToken)\n", claims["UserInfo"])
			//http://stackoverflow.com/questions/28806951/accessing-nested-map-of-type-mapstringinterface-in-golang

			c := claims["UserInfo"].(map[string]interface{})
			t := UserInfo{c["UserID"].(uint64)}
			ctx := context.WithValue(r.Context(), "UserInfo", t)

			//Futher middleware down the chain can access Context
			next.ServeHTTP(w, r.WithContext(ctx))

			//next.ServeHTTP(w, r)
		} else {
			fmt.Println(err.Error() + " (jwt.go func VerifyToken)")
			writeErrorResponse(w, err)
		}
	})
}

func writeErrorResponse(w http.ResponseWriter, err error) {
	switch e := err.(type) {
	case *jwt.ValidationError: // something was wrong during the validation
		switch e.Errors {
		case jwt.ValidationErrorExpired:
			w.Header().Set("Content-Type", "application/json")

			//TODO: response in json
			http.Error(w, "Token Expired! Login again.", http.StatusUnauthorized)

			//w.WriteHeader(http.StatusUnauthorized)
			//WriteResponseJSON(w, response)
			//fmt.Fprintln(w, "Server reply: Token Expired, get a new one.")
			return

		default:
			//w.WriteHeader(http.StatusInternalServerError)
			//fmt.Fprintln(w, "Server reply: Error while Parsing Token!")
			//response := Response{Text: "Server reply: Error while Parsing Token"}
			//WriteResponseJSON(w, response)
			http.Error(w, "Bad Token.", http.StatusUnauthorized)
			log.Printf("ValidationError error: %+v\n", e.Errors)
			return
		}

	default: // something else went wrong
		//w.WriteHeader(http.StatusInternalServerError)
		//response := Response{Text: "Server reply: Default Error while Parsing Token!"}
		//WriteResponseJSON(w, response)
		http.Error(w, "JWT Verification Error", http.StatusUnauthorized)
		log.Printf("Token parse error: %v\n", e)
		return
	}
}
