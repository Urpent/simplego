package common

import (
	"github.com/metphosis/simplego/server/auth"
	"github.com/metphosis/simplego/server/db"
)

//StartUp func is to initialization of certain effect, Eg. Generate key.
func StartUp() {
	auth.InitKeys() // from auth.go
	initConfig()    //retrieve config file information
	db.InitDatabase()
	//TODO: init database here
	//TODO: init giro renewal system
}
