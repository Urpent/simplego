package models

type (
	//LoginModel is the data structure for login information
	LoginModel struct {
		Username string `json:"username"`
		Password string `json:"password"`
	}
)
