package common

import (
	"encoding/json"
	"log"
	"os"
)

//Config contains all information such as port number, database username, password etc
type config struct {
	Port string `json:"port"`
}

//Config contain initialization info in JSON format
var Config config

func initConfig() {
	f, err := os.Open("config-server")
	if err != nil {
		log.Fatalf("Error: Unable to open or find config file.")
	}
	defer f.Close()

	dec := json.NewDecoder(f)
	if err := dec.Decode(&Config); err != nil {
		log.Fatalf("Error: Unable to decode config file to JSON.")
	}
}
