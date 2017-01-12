System.register(['@angular/core', '@angular/http', '../login/auth.service'], function(exports_1, context_1) {
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
    var core_1, http_1, auth_service_1;
    var MemberService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            MemberService = (function () {
                function MemberService(http, authService) {
                    this.http = http;
                    this.authService = authService;
                    this._urlGetMember = "/api/member?nric=";
                    this._url2 = "/api/member/new";
                    this._url4 = "/api/members";
                    this._url3 = "/api/member/update";
                }
                MemberService.prototype.getMember = function (nric) {
                    console.log("MemberService: " + this._urlGetMember + nric);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var authToken = this.authService.auth_token;
                    headers.append('Authorization', "Bearer " + authToken);
                    return this.http.
                        get("/api/member?nric=" + nric, { headers: headers }).
                        map(function (resp) { return resp.json(); }).
                        map(function (resp) {
                        console.log("Successful received reply from server (MemberService)");
                        console.log(resp);
                        console.log(resp.text);
                        return resp.text;
                    });
                };
                MemberService.prototype.getMemberAll = function () {
                    console.log("MemberService: " + this._url4);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var authToken = this.authService.auth_token;
                    headers.append('Authorization', "Bearer " + authToken);
                    return this.http.
                        get("/api/members", { headers: headers }).
                        map(function (resp) { return resp.json(); }).
                        map(function (resp) {
                        console.log("Successful received reply from server (MemberService)");
                        console.log(resp);
                        console.log(resp.text);
                        return resp;
                    });
                };
                MemberService.prototype.addMember = function (info) {
                    console.log("MemberService: Requesting to add new Member");
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var authToken = this.authService.auth_token;
                    headers.append('Authorization', "Bearer " + authToken);
                    return this.http.
                        post(this._url2, JSON.stringify(info), { headers: headers }).
                        map(function (resp) { return resp.json(); }).
                        map(function (resp) {
                        return resp;
                    });
                };
                MemberService.prototype.editMember = function (info) {
                    console.log("MemberService: EditMember func");
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    console.log("abc");
                    var authToken = this.authService.auth_token;
                    headers.append('Authorization', "Bearer " + authToken);
                    console.log("abc");
                    return this.http.patch(this._url3, JSON.stringify(info), { headers: headers })
                        .map(function (res) { return res.json(); })
                        .map(function (res) {
                        console.log("MemberService: inside json edit");
                        return res;
                    });
                };
                MemberService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, auth_service_1.AuthService])
                ], MemberService);
                return MemberService;
            }());
            exports_1("MemberService", MemberService);
        }
    }
});
//# sourceMappingURL=member.service.js.map