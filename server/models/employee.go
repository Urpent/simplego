package models

import "github.com/jinzhu/gorm"

//Employee is the user's credential of the App
type Employee struct {
	gorm.Model
	Username string `sql:"unique;unique_index;not null;size:30"` //Very important so that username can never be repeated
	Password string `sql:"not null"`                             //default string size 256
	Role     string `sql:"not null;size:30"`
}
