package app

import (
	"context"
	"log"
	"net/http"

	"github.com/NguyenHoaiPhuong/warehouse/server/jsonfunc"
	"github.com/NguyenHoaiPhuong/warehouse/server/models"
	"github.com/NguyenHoaiPhuong/warehouse/server/utils"
)

func (a *App) authenticate(w http.ResponseWriter, r *http.Request) {
	log.Println("Start authenticating user")

	// CORS
	w.Header().Set("Access-Control-Allow-Origin", "*")

	var user models.User
	err := jsonfunc.ConvertFromJSON(r.Body, &user)
	defer r.Body.Close()
	if err != nil {
		utils.RespondError(w, http.StatusInternalServerError, err.Error())
		log.Printf("JSON conversion error: %v\n", err.Error())
		return
	}

	colName := "Users"
	fieldName := "UserName"
	mod, err := a.mdb.GetDocumentByKey(context.Background(), colName, fieldName, user.UserName)
	if err != nil {
		utils.RespondError(w, http.StatusInternalServerError, err.Error())
		log.Printf("Getting user %s in database error: %v\n", user.UserName, err.Error())
		return
	}
	userInDB := mod.(*models.User)
	if userInDB.Password == user.Password {
		log.Println(userInDB)
	}
}

func getAllUsers(w http.ResponseWriter, r *http.Request) {
	log.Println("Start getting all users from database")

	// Set up header
	w.Header().Set("Access-Control-Allow-Origin", "*")

	// docs, err := a.Database.GetAllDocuments(*a.Config.MongoDBConfig.DBName, string(model.BookCol))
	// if err != nil {
	// 	utils.RespondError(w, http.StatusInternalServerError, error.ErrorDB)
	// 	var errNew error.Imp
	// 	errNew.SetErrorMessage(err.Error())
	// 	errNew.InsertErrorMessage(error.ErrorAppGetAllBooks)
	// 	log.Printf("%v\n", errNew.Error())
	// 	return
	// }

	// books := make([]*model.Book, len(docs))
	// for i, doc := range docs {
	// 	book := new(model.Book)
	// 	bsonBytes, _ := bson.Marshal(doc)
	// 	bson.Unmarshal(bsonBytes, book)
	// 	books[i] = book
	// }

	// err = utils.RespondJSON(w, http.StatusOK, books)
	// if err != nil {
	// 	utils.RespondError(w, http.StatusInternalServerError, error.ErrorJSON)
	// 	var errNew error.Imp
	// 	errNew.SetErrorMessage(err.Error())
	// 	errNew.InsertErrorMessage(error.ErrorAppGetAllBooks)
	// 	log.Printf("%v\n", errNew.Error())
	// 	return
	// }

	log.Println("Finish getting all users from database")
}
