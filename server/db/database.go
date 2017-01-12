package db

import (
	"errors"

	"github.com/jinzhu/gorm"

	//Underscore is because we are not using any func from this package
	//except the init func which activate when package is imported.
	_ "github.com/lib/pq" //Import for side effect (connect to postgre server)

	//db should avoid importing all other package except models to prevent cyclic import
	"github.com/metphosis/simplego/server/models"
)

var db *gorm.DB

var (
	errorUniqueViolation  = errors.New("Unique constraint is violated! Eg. Creating a record with NRIC that already existed. (errorUniqueViolation)")
	errorRecordNotExisted = errors.New("Update Failed! Record does not exist. (errorRecordNotExisted)")
	//error                 = errors.New("Update Failed! Record does not exist. (errorRecordNotExisted)")
)

//InitDatabase setup the connection to database
func InitDatabase() {
	var err error
	db, err = gorm.Open("postgres", "user=postgres password=gorm dbname=postgres sslmode=disable") // Don't use := because we need to store db in global var
	if err != nil {
		panic(err.Error())
	}
	//defer db.Close() //TODO: cannot close db yet. Need pool of db connection for multi-thread?

	//dbase := db.DB()
	//defer dbase.Close()

	//Verify DB connection established.
	//if err := dbase.Ping(); err != nil {
	//	panic(err.Error())
	//}

	//Init Database structure:	Migrate changes OR Create new if table doesnt exist
	CreateTableMember(db) //Using AutoMigrate()
	CreateTableEmployee(db)
}

//GetConnection return database handler to databse communication
//It is used by services package ONLY
func GetConnection() *gorm.DB {
	return db
}

//CreateTableMember create table and migrate field accordingly.
func CreateTableMember(db *gorm.DB) {
	db.AutoMigrate(&models.Member{})
	db.AutoMigrate(&models.MailingList{})

	//member_id is MailingList's field name in DB
	//db.Debug().Model(&MailingList{}).
	//	AddForeignKey("member_id", "members(id)", "CASCADE", "CASCADE")

	//db.Debug().Model(&MailingList{}).
	//	AddForeignKey("member_nric", "members(nric)", "CASCADE", "CASCADE")
}

//CreateTableEmployee create table and migrate field accordingly.
func CreateTableEmployee(db *gorm.DB) {
	db.AutoMigrate(&models.Employee{})
}
