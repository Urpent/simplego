package services

import (
	"fmt"

	"github.com/metphosis/simplego/server/db"
	"github.com/metphosis/simplego/server/models"
)

//MemberManager ...
type MemberManager struct {
	ID uint64
}

//ReadMembersAll ...
func (mgr *MemberManager) ReadMembersAll() ([]models.Member, error) {
	db := db.GetConnection()
	var members []models.Member
	db.Model(&models.Member{}).Preload("MailingList").Find(&members)

	return members, nil
}

//ReadMemberByNRIC reply with member data
func (mgr *MemberManager) ReadMemberByNRIC(NRIC string) (*models.Member, error) {
	db := db.GetConnection()

	member := new(models.Member)
	err := db.Debug().Where("nric = ?", NRIC).First(&member).Error
	if err != nil {
		fmt.Println("Cannot find " + NRIC)
		return nil, err
	}

	return member, nil
}

//ReadAllMember ...
func (mgr *MemberManager) ReadAllMember() ([]models.Member, error) {
	db := db.GetConnection()
	var members []models.Member
	//Need preload mailing list
	db.Model(&models.Member{}).Preload("MailingList").Find(&members)
	//fmt.Println("checking")
	//fmt.Println(members[1].Name)
	return members, nil
}

// CreateMember new member data to database
// **Example
// m := new(Member)
// m.NRIC = "S1234567A"
// ml := new(MailingList)
// ml.Name = "Mary"
// m.MailingList = ml
// m.Create()
// **End of Example
func (mgr *MemberManager) CreateMember(m *models.Member) error {
	db := db.GetConnection()

	if err := db.Debug().Create(&m).Error; err != nil { //TODO: need check exist or not
		fmt.Printf(err.Error())
		return err
		//Set("gorm:insert_option", "ON CONFLICT (nric) DO UPDATE SET members = EXCLUDED.members")
		// pqErr := err.(*pq.Error).Code

		// switch pqErr {
		// case "23505":
		// 	fmt.Printf("Code: Duplicated Unique Key")
		// }

		// switch pqErr.Name() {
		// case "unique_violation":
		// 	fmt.Printf("Name: Duplicated Unique Key")
		// }
	}
	return nil
}

//UpdateMember the member information in the database. Only update NON-BLANK field in struct.
//**Example
//m := new(Member)
//m.NRIC = "S1234567A" //Assume NRIC exist in database
//m.Name = "ChangedNamed"
//m.Update()
//**End of Example
func (mgr *MemberManager) UpdateMember(m *models.Member) error {
	//db, err := gorm.Open("postgres", "user=postgres password=gorm dbname=postgres sslmode=disable") // Don't use := because we need to store db in global var
	//if err != nil {
	//	panic(err.Error())
	//}
	db := db.GetConnection()
	fmt.Println("Updating")
	if m.MailingList == nil {
		fmt.Println("MailingList is Missing")
		return nil // need error
	}
	db.Debug().
		Set("gorm:save_associations", false).
		Model(&models.Member{}).
		Where("nric = ?", m.NRIC).
		Updates(m)
		//TODO: Check if mailing list is nil

	db.Debug().
		Set("gorm:save_associations", false).
		Model(&models.MailingList{}).
		Where("member_nric = ?", m.NRIC).
		Updates(m.MailingList)

	//r := db.Model(&MailingList{}).
	//	Where("member_id = ?", 27).  //member_id is id from members table
	//	Updates(ml)

	/*
		switch {
		case r.Error != nil:
			//TODO: Log PQ error
			//pqErr := r.Error.(*pq.Error).Code
			//fmt.Printf("%s", pqErr)
			//fmt.Printf(pqErr.Name())

			return errorRecordNotExisted
			//return r.Error //Need to convert to my error

		case r.RowsAffected == 0: //When no error in update result but no row is updated
			return errorRecordNotExisted
		default:
			return nil //Return nil means update successful
		}
	*/
	return nil
}

//Read ...
func Read() {
	//db := GetDBConnection
}

//func (m *Member) Delete(){
//	db := GetDBConnection
//db.Where("nric = ?", "S1234567A").Delete(&Member{})
//}

//Search ...
func Search() {

	// db := GetDBConnection
	// m := new(Member)
	// fmt.Printf("%s", m.CreatedAt)
	// c := new(MailingList)
	// db.Model(&Member{}).Joins("inner join mailing_lists on mailing_lists.member_id = members.id").Where("mailing_lists.name = ?", "TH").First(&m)
	// db.Joins("inner join mailing_lists on mailing_lists.member_id = members.id").Where("mailing_lists.name = ?", "BLA").First(&m)
	// fmt.Printf("RESULT: ")
	// fmt.Printf(m.Name)
}

//http://use-the-index-luke.com/sql/partial-results/fetch-next-page
//http://use-the-index-luke.com/no-offset
//http://leopard.in.ua/2014/10/11/postgresql-paginattion
