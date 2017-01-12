System.register(['@angular/core', '@angular/router', './member.service'], function(exports_1, context_1) {
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
    var core_1, router_1, member_service_1;
    var MemberSearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (member_service_1_1) {
                member_service_1 = member_service_1_1;
            }],
        execute: function() {
            MemberSearchComponent = (function () {
                function MemberSearchComponent(_memberService) {
                    this._memberService = _memberService;
                    this.nricInput = "";
                }
                MemberSearchComponent.prototype.ngOnInit = function () { };
                MemberSearchComponent.prototype.getMember = function () {
                    this._memberService.getMember(this.nricInput).subscribe(function (text) {
                        console.log("(MemberSearchComponent) " + text);
                    }, function (hhh) {
                        if (hhh.status == 500) {
                            console.log("500 recieved");
                        }
                        console.log("Error response (MemberSearchComponent )");
                        console.log("JSON Received: " + JSON.stringify(hhh));
                    });
                };
                MemberSearchComponent = __decorate([
                    core_1.Component({
                        template: "\n    <h3>Search Member</h3>\n    <input type=\"button\"  (click)=\"getMember()\" value=\"Search\"/>\n    <input type=\"text\" (input)=\"nricInput = $event.target.value\" placeholder=\"Enter NRIC\"/>\n    <br>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [member_service_1.MemberService])
                ], MemberSearchComponent);
                return MemberSearchComponent;
            }());
            exports_1("MemberSearchComponent", MemberSearchComponent);
        }
    }
});
//# sourceMappingURL=membersearch.component.js.map