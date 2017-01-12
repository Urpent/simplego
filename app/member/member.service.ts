import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable'
//import localStorage from 'localStorage';

//import { LoginService } from '../login/login.service';
import {AuthService}from '../login/auth.service'
import {MemberInfo} from './models/memberInfo'

@Injectable()
export class MemberService {
  constructor(private http: Http, private authService: AuthService) { }

  //private _url = "http://simplego-gofast.rhcloud.com/member/get"
  private _urlGetMember = "/api/member?nric="
  
  private _url2 = "/api/member/new"

   private _url4 = "/api/members"

  private _url3 = "/api/member/update"
  getMember(nric: string) {
    console.log("MemberService: "+ this._urlGetMember + nric)//this.loginService.auth_token
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = this.authService.auth_token;
    headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.
      get("/api/member?nric=" + nric, { headers: headers }).
      map(resp => resp.json()).
      map(resp => {
        console.log("Successful received reply from server (MemberService)");
        console.log(resp);
        console.log(resp.text);
        return resp.text;
      });
  }

  getMemberAll() {
    console.log("MemberService: "+ this._url4)//this.loginService.auth_token
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = this.authService.auth_token;
    headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.
      get("/api/members", { headers: headers }).
      map(resp => resp.json()).
      map(resp => {
        console.log("Successful received reply from server (MemberService)");
        console.log(resp);
        console.log(resp.text);
        return resp;
      });
  }

  addMember(info){ // default return: Observable<MemberInfo>  but i think no need
    console.log("MemberService: Requesting to add new Member")//this.loginService.auth_token
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = this.authService.auth_token;
    headers.append('Authorization', `Bearer ${authToken}`);
    
    return this.http.
      post(this._url2,  JSON.stringify(info) , { headers: headers } ).
      map(resp => resp.json()).
      map(resp => {
          //console.log(res.Nest2.User);
          //return resp.text;
          return resp
        }
      );
  }

    editMember(info){
    console.log("MemberService: EditMember func")//this.loginService.auth_token
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log("abc");
    let authToken = this.authService.auth_token;
    headers.append('Authorization', `Bearer ${authToken}`);
     console.log("abc");
    return this.http.patch(this._url3, JSON.stringify(info) /*changed here*/, {headers: headers } )
      .map(res => res.json())
      .map(res => {
        
        console.log("MemberService: inside json edit");
        return res;
      });
  }
}

