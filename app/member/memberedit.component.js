System.register(['@angular/core', '@angular/router', './member.service', './forms/particulars.component', './forms/particulars2.component', './forms/mailinglist.component', './models/memberinfo'], function(exports_1, context_1) {
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
    var core_1, router_1, member_service_1, particulars_component_1, particulars2_component_1, mailinglist_component_1, memberinfo_1;
    var MemberEditComponent;
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
            },
            function (particulars_component_1_1) {
                particulars_component_1 = particulars_component_1_1;
            },
            function (particulars2_component_1_1) {
                particulars2_component_1 = particulars2_component_1_1;
            },
            function (mailinglist_component_1_1) {
                mailinglist_component_1 = mailinglist_component_1_1;
            },
            function (memberinfo_1_1) {
                memberinfo_1 = memberinfo_1_1;
            }],
        execute: function() {
            MemberEditComponent = (function () {
                function MemberEditComponent(_memberService) {
                    this._memberService = _memberService;
                }
                MemberEditComponent.prototype.ngOnInit = function () {
                };
                MemberEditComponent.prototype.editMember = function () {
                    if (!this.particularsForm.valid || !this.particulars2Form.valid || !this.mailingListForm.valid) {
                        console.log('MemberComponent: Forms is not valid');
                        return;
                    }
                    this.memberInfo = new memberinfo_1.MemberInfo(this.particularsForm, this.particulars2Form, this.mailingListForm);
                    this._memberService.editMember(this.memberInfo).subscribe(function (jsonObj) {
                        console.log(jsonObj);
                        console.log('success');
                    }, function (err) { return console.log(err); });
                };
                MemberEditComponent = __decorate([
                    core_1.Component({
                        template: "\n    <h1>Edit Member</h1>\n\n    <particulars            (childevent)=\"particularsForm = $event\"  ></particulars>\n\n    <particulars2           (childevent)=\"particulars2Form = $event\" ></particulars2>\n\n    <mailing-list-component (childevent)=\"mailingListForm = $event\"  ></mailing-list-component>\n\n    <input class=\"btn btn-primary\" type=\"button\"  (click)=\"editMember()\" value=\"Edit\"/>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES, particulars_component_1.ParticularsComponent, mailinglist_component_1.MailingListComponent, particulars2_component_1.Particulars2Component]
                    }), 
                    __metadata('design:paramtypes', [member_service_1.MemberService])
                ], MemberEditComponent);
                return MemberEditComponent;
            }());
            exports_1("MemberEditComponent", MemberEditComponent);
        }
    }
});
//# sourceMappingURL=memberedit.component.js.map