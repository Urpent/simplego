package controllers

import (
	"encoding/json"
	"html/template"
	"net/http"
	"strconv"

	"github.com/metphosis/simplego/server/auth"
	"github.com/metphosis/simplego/server/common"
)

//ShowHome route to home
func ShowHome(w http.ResponseWriter, req *http.Request) {
	w.Header().Add("Content-Type", "text/html")

	tmpl, err := template.ParseFiles("index.html")
	if err == nil {
		tmpl.Execute(w, nil)
	}
}

//Login handle user login
func Login(w http.ResponseWriter, req *http.Request) {
	var info loginInfo

	err := json.NewDecoder(req.Body).Decode(&info)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		response := common.Response{Text: "Server reply: Sorry, error while decoding JSON."}
		common.WriteResponseJSON(w, response)
		return
	}
	//Get userID
	tokenString, err := auth.GenerateJWT(98188729) //Signed Token is sent to user, and user will use it to verify themselves
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		response := common.Response{Text: "Server reply: Sorry, error while Signing Token!!!"}
		common.WriteResponseJSON(w, response)
		return
	}

	a, _ := strconv.ParseBool(info.MyUsername) //username type "true"" to enter
	response := authStatus{Success: a, Token: tokenString, Role: "MemberManager"}
	common.WriteResponseJSON(w, response)
}

type loginInfo struct {
	MyUsername string `json:"username"`
	MyPassword string `json:"password"`
}

type authStatus struct {
	Success bool   `json:"success"`
	Token   string `json:"token"`
	Role    string `json:"role"`
}
