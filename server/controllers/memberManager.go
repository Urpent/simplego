package controllers

import (
	"encoding/json"
	"net/http"

	"github.com/metphosis/simplego/server/auth"
	"github.com/metphosis/simplego/server/common"
	"github.com/metphosis/simplego/server/models"
	"github.com/metphosis/simplego/server/services"
)

/* GuideLine http://programmers.stackexchange.com/questions/127624/what-is-mvc-really
1. Controller should not communicate with database directly
2. Controller should not contain business logic, but it can manipulate model that is exposed.
4. Permission
3. http://programmers.stackexchange.com/questions/220574/where-should-user-permission-checks-take-place-in-and-mvc-and-by-who
*/

// CreateMember func add new member to database and reply status
func CreateMember(w http.ResponseWriter, req *http.Request) {
	// UserInfo is extra info retrieve from token
	// and insert into context by jwt.go
	info := req.Context().Value("UserInfo")
	if info == nil {
		return
	}
	managerID := info.(auth.UserInfo).UserID
	svc := &services.MemberManager{ID: managerID}

	memberForm := new(models.Member)
	if err := json.NewDecoder(req.Body).Decode(&memberForm); err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		response := common.Response{Text: "Server: Sorry, error while decoding JSON."}
		common.WriteResponseJSON(w, response)
		return
	}

	if err := svc.CreateMember(memberForm); err != nil {
		response := common.Response{Text: "Server: Create Error"}
		common.WriteResponseJSON(w, response)
		return
	}

	response := common.Response{Text: "Server:  Member Created"}
	w.WriteHeader(http.StatusOK)

	common.WriteResponseJSON(w, response)
}

//ReadMemberByNRIC reply with member data
func ReadMemberByNRIC(w http.ResponseWriter, req *http.Request) {
	info := req.Context().Value("UserInfo")
	if info == nil {
		return
	}
	managerID := info.(auth.UserInfo).UserID

	svc := &services.MemberManager{ID: managerID}

	nric := req.URL.Query().Get("nric")
	member, err := svc.ReadMemberByNRIC(nric)
	if err != nil {
		response := common.Response{Text: "Server reply: " + nric + " not found!"}
		w.WriteHeader(http.StatusNotFound)
		common.WriteResponseJSON(w, response)
		return
	}

	w.WriteHeader(http.StatusOK)
	common.WriteResponseJSON(w, member)
}

//ReadMembers reply with member data
func ReadMembers(w http.ResponseWriter, req *http.Request) {
	info := req.Context().Value("UserInfo")
	if info == nil {
		return
	}
	managerID := info.(auth.UserInfo).UserID
	svc := &services.MemberManager{ID: managerID}
	members, err := svc.ReadAllMember()
	if err != nil {
		response := common.Response{Text: "Server reply: not found!"}
		w.WriteHeader(http.StatusNotFound)
		common.WriteResponseJSON(w, response)
		return
	}

	w.WriteHeader(http.StatusOK)
	common.WriteResponseJSON(w, members)
}

//UpdateMember func edit member data in database and reply status
func UpdateMember(w http.ResponseWriter, req *http.Request) {
	info := req.Context().Value("UserInfo")
	if info == nil {
		return
	}
	managerID := info.(auth.UserInfo).UserID
	svc := &services.MemberManager{ID: managerID}

	member := new(models.Member)
	//Take info from req.Body and decode into member object
	if err := json.NewDecoder(req.Body).Decode(&member); err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		response := common.Response{Text: "Server: Sorry, error while decoding JSON."}
		common.WriteResponseJSON(w, response)
		return
	}

	if err := svc.UpdateMember(member); err != nil { //return error response
		response := common.Response{Text: "Server: Update Error"}
		common.WriteResponseJSON(w, response)
		return
	}

	response := common.Response{Text: "Server:  Member edited"}
	w.WriteHeader(http.StatusOK)

	common.WriteResponseJSON(w, response)
}

/*
type nest1 struct {
	Text  string
	Nest2 nest2
}

type nest2 struct {
	User2 string
}


var s = new(nest1)
	s.Text = "Server:  New Member Added!!!"
	s.Nest2.User2 = "345"
	common.WriteResponseJSON(w, s)

//Angular2 addMember() usage and return value
this._memberService.addMember().subscribe(jsonObj => {
                console.log(jsonObj.Nest2.User2) //output 345
                console.log(jsonObj) 			//output [object Object]

//addMember function
 addMember(): Observable<MemberInfo> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = this.loginService.auth_token;
    headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.post(this._url2, "", {headers: headers } )
      .map(res => res.json());

*/
