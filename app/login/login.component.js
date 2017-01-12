System.register(['@angular/core', '@angular/router', '@angular/forms', './auth.service', './loginInfo'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, forms_1, auth_service_1, loginInfo_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (loginInfo_1_1) {
                loginInfo_1 = loginInfo_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(router, authService) {
                    this.router = router;
                    this.authService = authService;
                    this.usernameInput = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(1)]);
                    this.passwordInput = new forms_1.FormControl('');
                    this.myForm = new forms_1.FormGroup({
                        username: new forms_1.FormGroup({
                            input: this.usernameInput
                        }),
                        password: new forms_1.FormGroup({
                            input: this.passwordInput
                        })
                    });
                }
                LoginComponent.prototype.ngOnInit = function () {
                    console.log("(LoginCom) Login status: " + this.authService.IsLoggedIn());
                    if (this.authService.IsLoggedIn()) {
                        this.router.navigate(['member']);
                    }
                };
                LoginComponent.prototype.onLogin = function () {
                    var _this = this;
                    this.loginInfo = new loginInfo_1.LoginInfo(this.myForm);
                    console.log(JSON.stringify(this.loginInfo));
                    this.authService.Login(this.loginInfo).subscribe(function (jsonObj) {
                        if (jsonObj.success) {
                            console.log("(LoginCom) JSON: " + _this.authService.IsLoggedIn());
                            _this.router.navigate(['member']);
                            switch (jsonObj.role) {
                            }
                        }
                        else {
                            console.log("Login component: Login failed!");
                        }
                    }, function (err) { return console.log(err); });
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'my-login',
                        template: "<div class=\"container\">\n                    <form [formGroup]=\"myForm\" (ngSubmit)=onLogin()>\n                        <div formGroupName=\"username\" class=\"form-group\">\n                            <label for=\"username\">Username</label>\n                            <input type=\"text\"  class=\"form-control\"  placeholder=\"Enter true\" required\n                                   formControlName=\"input\" #spy>\n                           <strong>spyclassName:</strong> {{spy.className}}\n                           <br>\n                           <strong>dirty:</strong> {{usernameInput.dirty}}\n                        </div>\n\n                        <div formGroupName=\"password\" class=\"form-group\">\n                            <label for=\"password\">Password</label>\n                            <input type=\"text\"  class=\"form-control\"\n                                formControlName=\"input\">\n                        </div>\n                        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!usernameInput.valid\">Login</button>\n                        {{myForm.value.username}}\n                       \n                    </form>\n                    {{myForm.value | json}}\n                </div>\n    ",
                        directives: [forms_1.REACTIVE_FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map