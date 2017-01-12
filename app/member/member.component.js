System.register(['@angular/core', '@angular/router', './member.service', '../login/auth.service'], function(exports_1, context_1) {
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
    var core_1, router_1, member_service_1, router_2, auth_service_1;
    var MemberComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (member_service_1_1) {
                member_service_1 = member_service_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            MemberComponent = (function () {
                function MemberComponent(router, _memberService, authService) {
                    this.router = router;
                    this._memberService = _memberService;
                    this.authService = authService;
                }
                MemberComponent.prototype.logout = function () {
                    this.authService.Logout();
                    this.router.navigate(['login']);
                };
                MemberComponent = __decorate([
                    core_1.Component({
                        selector: 'my-login',
                        template: "\n                <nav>\n                    <a [routerLink]=\"['/member/search']\">Search</a>\n                    <a [routerLink]=\"['/member/create']\">Create</a>\n                    <a [routerLink]=\"['/member/edit']\">Edit</a>\n                    <a [routerLink]=\"['/member/database']\">Database</a>\n\n\n                    <button type=\"button\" class=\"btn btn-default\" (click)=\"logout()\" style=\"margin-left: 2cm;\">\n                        <span class=\"glyphicon glyphicon-log-out\"></span> Log out\n                    </button>\n                </nav>\n\n                <router-outlet></router-outlet>         \n    ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [member_service_1.MemberService]
                    }), 
                    __metadata('design:paramtypes', [router_2.Router, member_service_1.MemberService, auth_service_1.AuthService])
                ], MemberComponent);
                return MemberComponent;
            }());
            exports_1("MemberComponent", MemberComponent);
        }
    }
});
//# sourceMappingURL=member.component.js.map