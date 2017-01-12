package routers

import "github.com/gorilla/mux"

//InitRoutes setup Routes to specfic handler
//Called in main.go
func InitRoutes() *mux.Router {
	r := mux.NewRouter()

	//Setup Routes to specfic handler
	SetRoutesAngular(r)

	//For API, use /api Subrouter
	sr := r.PathPrefix("/api").Subrouter()
	SetRoutesMemberManager(sr)
	//other api route here

	SetRoutesUser(r) //**MUST be LAST because it contain default route handler.
	return r
}
