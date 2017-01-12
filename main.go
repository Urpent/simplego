package main

import (
	"fmt"
	"net/http"

	"github.com/metphosis/simplego/server/common"
	"github.com/metphosis/simplego/server/routers"
)

func main() {
	common.StartUp() //boot.go

	router := routers.InitRoutes()
	http.Handle("/", router)
	fmt.Println("Server Running...")
	if err := http.ListenAndServe(common.Config.Port, nil); err != nil {
		fmt.Printf(err.Error())
	}

	/*
		//Openshift
		bind := fmt.Sprintf("%s:%s", os.Getenv("OPENSHIFT_GO_IP"), os.Getenv("OPENSHIFT_GO_PORT"))
		fmt.Printf("listening on %s...", bind)
		err := http.ListenAndServe(bind, nil)
		if err != nil {
			panic(err)
		}
	*/
}
