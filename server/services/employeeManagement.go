package services

import (
	"github.com/metphosis/simplego/server/db"
	"github.com/metphosis/simplego/server/models"
)

func getRole(userID uint) string {
	db := db.GetConnection()

	e := new(models.Employee)
	db.Debug().Model(&models.Employee{}).
		Where("id = ?", userID).
		First(&e)

	return e.Role
}
