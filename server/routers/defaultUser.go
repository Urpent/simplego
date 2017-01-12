package routers

import (
	"github.com/gorilla/mux"
	"github.com/metphosis/simplego/server/controllers"
)

//SetRoutesUser setup the route for normal user.
func SetRoutesUser(r *mux.Router) {

	//Login Handler in controllers/defaultUser.go
	r.PathPrefix("/login").HandlerFunc(controllers.Login).Methods("POST")

	//**MUST be LAST to route default
	r.PathPrefix("/").HandlerFunc(controllers.ShowHome)
}
