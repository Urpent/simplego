package routers

import (
	"net/http"

	"github.com/gorilla/mux"
)

//SetRoutesAngular setup route to handle angular request
func SetRoutesAngular(r *mux.Router) {
	r.PathPrefix("/node_modules/").Handler(http.StripPrefix("/node_modules/", http.FileServer(http.Dir("./node_modules/"))))

	////Host all files
	r.PathPrefix("/app/").Handler(http.StripPrefix("/app/", http.FileServer(http.Dir("./app/"))))

	//Host file with specific extension, js OR map.
	//r.Handle(`/app/{name:.*\.(js|map)}`, http.StripPrefix("/app/", http.FileServer(http.Dir("./app/"))))
	//r.Handle(`/app/member/{name:.*\.(js|map)`, http.StripPrefix("/app/member/", http.FileServer(http.Dir("./app/member/"))))
	//r.Handle(`/app/routing/{name:.*\.(js|map)}`, http.StripPrefix("/app/routing/", http.FileServer(http.Dir("./app/routing/"))))
	//r.Handle(`/app/login/{name:.*\.(js|map)}`, http.StripPrefix("/app/login/", http.FileServer(http.Dir("./app/login/"))))

	r.PathPrefix("/assets/").Handler(http.StripPrefix("/assets/", http.FileServer(http.Dir("./assets/"))))
}
