package auth

import (
	"fmt"
	"net/http"
)

//Certain URL only can be used by certain Role.
//However, restriction using role is not as flexible.
//Instead, we should provide restriction using priviledge/rights of any role.

//Explanation: stringer make our enum convertable to string using String()
//Example: we can get the string by using p.String() where p can be PermsMemberCreate.
//This line BELOW is a command
//go:generate stringer -type=Permissions

//Permissions is our Enum type.
type Permissions int

//Enum value
const (
	PermsMemberCreate Permissions = iota //Start from 0
	PermsMemberRead
	PermsMemberUpdate
	PermsMemberDelete
)

//UserPermit needed to check if user had required permissions
type UserPermit interface {
	Permitted(userID string, p ...Permissions) (ok bool)
}

type permitted func(userID string, p ...Permissions) error

// PermitRequired is middleware stop middleware chain when
// users don't have specific permissions.
//
// Middleware(s) before PermitRequired must provide necessary user info using Context.
//
// Example usage: See auth.jwt.go to provide info using Context
// Example usage: See routers.memberManager.go to set permissions.
func PermitRequired( /*pmit permitted,*/ p ...Permissions) func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			fmt.Println("Inside Permit:")
			user := r.Context().Value("UserInfo")

			if user == nil {
				fmt.Println("Fail to get userInfo (func Permit)")
				return
			}

			//Type asserting
			u, ok := user.(UserInfo)
			if !ok {
				fmt.Println("Invalid userID (func Permit)")
				return
			}

			if err := isPermitted(u.UserID); err != nil {
				fmt.Println("Not permitted (func Permit)")
				//need return http response
				return
			}

			//t := new(models.Member)
			//t.Name = "okok121"
			//ctx := context.WithValue(r.Context(), "UserObj", t)
			//next.ServeHTTP(w, r.WithContext(ctx))
			next.ServeHTTP(w, r)
		})
	}
}

func isPermitted(userID uint64) error {
	//if p[0] == PermsMemberCreate {
	//			g := int(PermsMemberRead)
	//			fmt.Println(g)
	//		}
	return nil
}
