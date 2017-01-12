package models

import "github.com/jinzhu/gorm"

//Member is the data structure for storing member information from application form.
type Member struct {
	gorm.Model            `json:"-"`
	Title                 string       `json:"title"`
	Name                  string       `json:"name"`
	NRIC                  string       `json:"nric" sql:"unique;unique_index;not null"`
	Partner               string       `json:"partner"`
	MartialStatus         string       `json:"martial_status"`
	Affiliation           string       `json:"affiliation"`
	DOB                   string       `json:"date_of_birth"`
	Gender                string       `json:"gender"`
	Race                  string       `json:"race"`
	MemberNum             string       `json:"member_number"`
	DateJoined            string       `json:"date_joined"`
	Type                  string       `json:"type"`
	HomeAddress1          string       `json:"home_address_1"`
	HomeAddress2          string       `json:"home_address_2"`
	HomeAddress3          string       `json:"home_address_3"`
	Country               string       `json:"country"`
	PostalCode            string       `json:"postal_code"`
	Residential           string       `json:"residential"`
	Mobile                string       `json:"mobile"`
	EAmplified            string       `json:"e_amplified"`
	HighestQualifications string       `json:"highest_qualifications"`
	OtherQualifications   string       `json:"other_qualifications"`
	NameOfCompany         string       `json:"name_of_company"`
	Designation           string       `json:"designation"`
	Office1               string       `json:"office_1"`
	Office2               string       `json:"office_2"`
	Office3               string       `json:"office_3"`
	Office4               string       `json:"office_4"`
	PostalCodeOffice      string       `json:"postal_code_office"`
	ContactNumOffice      string       `json:"contact_number_office"`
	FaxNum                string       `json:"fax_number"`
	Details               string       `json:"details"`
	EmailAddress          string       `json:"email_address"`
	MailingList           *MailingList `json:"mailing_list" gorm:"ForeignKey:MemberNRIC"` //gorm:"ForeignKey:MemberID" Need to add foreign key constraint
	Subscription          string       `json:"subscription"`
	ReturnedMailAddress   string       `json:"returned_mail_address"`
	DateOfUpdate          string       `json:"date_of_update"`
}

//MailingList is part of Member application form to specific member mailing address
type MailingList struct {
	gorm.Model `json:"-"`
	Title      string `json:"title"`
	Name       string `json:"name"`
	Remarks    string `json:"remarks"`
	MemberNum  string `json:"member_number"`
	Home1      string `json:"home_1"`
	Home2      string `json:"Home_2"`
	Home3      string `json:"home_3"`
	Country    string `json:"country"`
	PostalCode string `json:"postal_code"`

	//MemberID uint `json:"-" sql:"unique;unique_index;not null"` //sql:"unique;not null"
	MemberNRIC string `json:"-" sql:"unique;unique_index;not null"` //sql:"unique;not null"
}
