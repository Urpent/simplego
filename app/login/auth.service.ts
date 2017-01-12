import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http} from '@angular/http';
//import 'rxjs/add/operator/map';
import {LocalStorage, SessionStorage} from "angular2-localstorage/WebStorage";

@Injectable()
export class AuthService {
    //here happens the magic. `username` is always restored from the localstorage when you reload the site
 @LocalStorage() public auth_token: any = ''; //TODO: default is empty
    //private isLoggedIn: boolean = false;

 @LocalStorage() private isLoggedIn: boolean = false;//Default value is false.
   // @LocalStorage() private role: string = '';

    //private _url = "http://simplego-gofast.rhcloud.com/login" //working
    private _url = "/login"
    //private _url2 = "http://jsonplaceholder.typicode.com/posts"

    constructor(private _http: Http) { }
 
    Login(info) { //Return value is observable
        console.log("Login service:" + info)
        return this._http
            .post(this._url, JSON.stringify(info) )

            .map(res => res.json())
            .map(res => {

              this.isLoggedIn = res.success;
                this.auth_token = res.success ? res.token : "";
               //this.role = res.success ? res.role : "";

                console.log("loginService status: " + res.role + " " + res.success)
                console.log("loginService status: "+this.auth_token);

                return { success: res.success, role: res.role }; //return a json object. Call by login.component
            });
    }

    
    IsLoggedIn(): boolean {
        return this.isLoggedIn;
    }
    hasRole(roles: string[]): boolean {
        //Return false if  we cannot find role within roles.
      return true
        //return roles.indexOf(this.role) !== -1;
    }
    Logout() {
        this.auth_token = '';
        this.isLoggedIn = false;
    }
}