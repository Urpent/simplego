package routers

import (
	"net/http"

	"github.com/gorilla/mux"
	"github.com/justinas/alice"
	"github.com/metphosis/simplego/server/auth"
	"github.com/metphosis/simplego/server/controllers"
)

//SetRoutesMemberManager setup the route for normal user.
//Called in router.go
func SetRoutesMemberManager(r *mux.Router) {
	// Can add more middlewares.
	// Eg. alice.New(loggin, common.Authentication, ...)
	commonHandlers := alice.New(auth.VerifyToken)

	//Create Member. Wrap CreateMember() using HandlerFunc
	create := http.HandlerFunc(controllers.CreateMember)

	//Certain URL only can be used by certain Role.
	//However, restriction using role is not as flexible.
	//Instead, we should provide restriction using priviledge/rights of any role.
	r.Handle("/member/new", commonHandlers.
		Append(auth.PermitRequired(auth.PermsMemberCreate)). //Specify permission here
		ThenFunc(create)).
		Methods("POST")

	//Read Member
	read := http.HandlerFunc(controllers.ReadMemberByNRIC)
	r.Handle("/member", commonHandlers.ThenFunc(read)).
		Queries("nric", "{nric:[A-z][0-9]{7}[A-z]}").
		Methods("GET")

	//Other example
	//r.PathPrefix("/member/get").Handler(alice.New(common.Authentication).ThenFunc(getMemberHandler)).Methods("GET")
	//r.PathPrefix("/member/get").HandlerFunc(authHandler).Methods("GET") //Without Authentication

	readAll := http.HandlerFunc(controllers.ReadMembers)
	r.Handle("/members", commonHandlers.ThenFunc(readAll)).
		Methods("GET")

	//Update Member
	updateMemberHandler := http.HandlerFunc(controllers.UpdateMember)
	r.Handle("/member/update", commonHandlers.ThenFunc(updateMemberHandler)).
		Methods("PATCH")
}
