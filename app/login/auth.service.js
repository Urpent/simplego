System.register(['@angular/core', '@angular/http', "angular2-localstorage/WebStorage"], function(exports_1, context_1) {
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
    var core_1, http_1, WebStorage_1;
    var AuthService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (WebStorage_1_1) {
                WebStorage_1 = WebStorage_1_1;
            }],
        execute: function() {
            AuthService = (function () {
                function AuthService(_http) {
                    this._http = _http;
                    this.auth_token = '';
                    this.isLoggedIn = false;
                    this._url = "/login";
                }
                AuthService.prototype.Login = function (info) {
                    var _this = this;
                    console.log("Login service:" + info);
                    return this._http
                        .post(this._url, JSON.stringify(info))
                        .map(function (res) { return res.json(); })
                        .map(function (res) {
                        _this.isLoggedIn = res.success;
                        _this.auth_token = res.success ? res.token : "";
                        console.log("loginService status: " + res.role + " " + res.success);
                        console.log("loginService status: " + _this.auth_token);
                        return { success: res.success, role: res.role };
                    });
                };
                AuthService.prototype.IsLoggedIn = function () {
                    return this.isLoggedIn;
                };
                AuthService.prototype.hasRole = function (roles) {
                    return true;
                };
                AuthService.prototype.Logout = function () {
                    this.auth_token = '';
                    this.isLoggedIn = false;
                };
                __decorate([
                    WebStorage_1.LocalStorage(), 
                    __metadata('design:type', Object)
                ], AuthService.prototype, "auth_token", void 0);
                __decorate([
                    WebStorage_1.LocalStorage(), 
                    __metadata('design:type', Boolean)
                ], AuthService.prototype, "isLoggedIn", void 0);
                AuthService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AuthService);
                return AuthService;
            }());
            exports_1("AuthService", AuthService);
        }
    }
});
//# sourceMappingURL=auth.service.js.map