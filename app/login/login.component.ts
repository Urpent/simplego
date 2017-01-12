import { Component, OnInit } from '@angular/core';
import { Router }      from '@angular/router';
import { REACTIVE_FORM_DIRECTIVES,
    Validators, FormControl, FormGroup } from '@angular/forms'; //New form

import { AuthService } from './auth.service'
import { LoginInfo } from './loginInfo'

@Component({
    selector: 'my-login',
    template: `<div class="container">
                    <form [formGroup]="myForm" (ngSubmit)=onLogin()>
                        <div formGroupName="username" class="form-group">
                            <label for="username">Username</label>
                            <input type="text"  class="form-control"  placeholder="Enter true" required
                                   formControlName="input" #spy>
                           <strong>spyclassName:</strong> {{spy.className}}
                           <br>
                           <strong>dirty:</strong> {{usernameInput.dirty}}
                        </div>

                        <div formGroupName="password" class="form-group">
                            <label for="password">Password</label>
                            <input type="text"  class="form-control"
                                formControlName="input">
                        </div>
                        <button type="submit" class="btn btn-primary" [disabled]="!usernameInput.valid">Login</button>
                        {{myForm.value.username}}
                       
                    </form>
                    {{myForm.value | json}}
                </div>
    `,
    directives: [REACTIVE_FORM_DIRECTIVES] //need this. https://github.com/angular/angular/issues/9363
    //, providers: [AuthService] //No need here because declared at boot level
})

export class LoginComponent implements OnInit {
    loginInfo: LoginInfo;

    myForm: FormGroup;
    usernameInput = new FormControl('', [Validators.required, Validators.minLength(1)])
    passwordInput = new FormControl('')

    constructor(private router: Router, private authService: AuthService) {
        this.myForm = new FormGroup({
            username: new FormGroup({
                input: this.usernameInput
            }),
            password: new FormGroup({
                input: this.passwordInput
            })
        });
    }
    ngOnInit() {  //called after the constructor and called  after the first ngOnChanges() 
        console.log("(LoginCom) Login status: " + this.authService.IsLoggedIn())
        if (this.authService.IsLoggedIn()) {
            this.router.navigate(['member']); //TODO: need redirect according to user role
        }
        //TODO: Check if is login
    }
    onLogin() {
        //this.convertToObj();
        this.loginInfo = new LoginInfo(this.myForm);

        console.log(JSON.stringify(this.loginInfo));

        this.authService.Login(this.loginInfo).subscribe(jsonObj => {
            if (jsonObj.success) {
                //this.router.navigate([jsonObj.role]); //jsonObj.role contain the RoutePath. Eg. 'Member'
                console.log("(LoginCom) JSON: " + this.authService.IsLoggedIn())
                this.router.navigate(['member']);
                switch (jsonObj.role) {
                    //case "MemberManager": this.router.navigate(['MemberManagement']); 
                }
            } else {
                console.log("Login component: Login failed!")
            }
        }, err => console.log(err));
    }

}


