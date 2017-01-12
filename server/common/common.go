package common

import (
	"encoding/json"
	"net/http"
)

//WriteResponseJSON convert response data into json format and use given writer to reply
func WriteResponseJSON(w http.ResponseWriter, response interface{}) {
	json, err := json.Marshal(response)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	//w.WriteHeader(http.StatusOK)
	w.Header().Set("Content-Type", "application/json")
	w.Write(json)

}

//Response is basic data structure for JSON
type Response struct {
	Text string `json:"text"`
}
