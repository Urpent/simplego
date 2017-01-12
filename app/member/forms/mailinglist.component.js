System.register(['@angular/core', '@angular/forms'], function(exports_1, context_1) {
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
    var core_1, forms_1;
    var MailingListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }],
        execute: function() {
            MailingListComponent = (function () {
                function MailingListComponent() {
                    this.childevent = new core_1.EventEmitter();
                    this.myTitleInput = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myNameInput = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myRemarksInput = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myMemberNumInput = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myHome1Input = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myHome2Input = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myHome3Input = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myCountryInput = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myPostalCodeInput = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myForm = new forms_1.FormGroup({
                        myTitle: new forms_1.FormGroup({
                            input: this.myTitleInput
                        }),
                        myName: new forms_1.FormGroup({
                            input: this.myNameInput
                        }),
                        myRemarks: new forms_1.FormGroup({
                            input: this.myRemarksInput
                        }),
                        myMemberNum: new forms_1.FormGroup({
                            input: this.myMemberNumInput
                        }),
                        myHome1: new forms_1.FormGroup({
                            input: this.myHome1Input
                        }),
                        myHome2: new forms_1.FormGroup({
                            input: this.myHome2Input
                        }),
                        myHome3: new forms_1.FormGroup({
                            input: this.myHome3Input
                        }),
                        myCountry: new forms_1.FormGroup({
                            input: this.myCountryInput
                        }),
                        myPostalCode: new forms_1.FormGroup({
                            input: this.myPostalCodeInput
                        }),
                    });
                }
                MailingListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.myForm.valueChanges.subscribe(function (obj) {
                        if (_this.myForm.valid) {
                            _this.childevent.emit(_this.myForm);
                        }
                        else {
                            _this.childevent.emit(null);
                        }
                    }, function (err) { return console.log(err); });
                };
                MailingListComponent = __decorate([
                    core_1.Component({
                        selector: 'mailing-list-component',
                        template: "\n    <h2> mailing list </h2>\n\n    <div class=\"container\">\n        <form [formGroup]=\"myForm\">\n            <div>\n            <div formGroupName=\"myTitle\" class=\"form-group\">\n                <label for=\"myTitle\">Title</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"myTitle\" id=\"myTitle\" formControlName=\"input\" #spy>\n                <span class=\"validation-error\" *ngIf=\"!myTitleInput.valid\"> Not Valid </span>\n                <br>\n                <br>\n            </div>\n\n            <div formGroupName=\"myName\" class=\"form-group\">\n                <label for=\"myName\">Name</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"myName\" id=\"myName\" formControlName=\"input\" #spy>\n                <span class=\"validation-error\" *ngIf=\"!myNameInput.valid\"> Not Valid </span>\n                <br>\n                <br>\n            </div>\n\n\n            <div formGroupName=\"myRemarks\" class=\"form-group\">\n                <label for=\"myRemarks\">Remarks</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"myRemarks\" id=\"myRemarks\" formControlName=\"input\" #spy>\n                <span class=\"validation-error\" *ngIf=\"!myRemarksInput.valid\"> Not Valid </span>\n                <br>\n                <br>\n            </div>\n\n         \n            <div formGroupName=\"myMemberNum\" class=\"form-group\">\n                <label for=\"myMemberNum\">Member Number</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"myMemberNum\" id=\"myMemberNum\" formControlName=\"input\" #spy>\n                <span class=\"validation-error\" *ngIf=\"!myMemberNumInput.valid\"> Not Valid </span>\n                <br>\n                <br>\n            </div>\n\n            <div formGroupName=\"myHome1\" class=\"form-group\">\n                <label for=\"myHome1\">Home 1</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"myHome1\" id=\"myHome1\" formControlName=\"input\" #spy>\n                <span class=\"validation-error\" *ngIf=\"!myHome1Input.valid\"> Not Valid </span>\n                <br>\n                <br>\n            </div>\n\n            <div formGroupName=\"myHome2\" class=\"form-group\">\n                <label for=\"myHome2\">Home 2</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"myHome2\" id=\"myHome2\" formControlName=\"input\" #spy>\n                <span class=\"validation-error\" *ngIf=\"!myHome2Input.valid\"> Not Valid </span>\n                <br>\n                <br>\n            </div>\n\n            <div formGroupName=\"myHome3\" class=\"form-group\">\n                <label for=\"myHome3\">Home 3</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"myHome3\" id=\"myHome3\" formControlName=\"input\" #spy>\n                <span class=\"validation-error\" *ngIf=\"!myHome3Input.valid\"> Not Valid </span>\n                <br>\n                <br>\n            </div>\n\n            <div formGroupName=\"myCountry\" class=\"form-group\">\n                <label for=\"myCountry\">Country</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"myCountry\" id=\"myCountry\" formControlName=\"input\" #spy>\n                <span class=\"validation-error\" *ngIf=\"!myCountryInput.valid\"> Not Valid </span>\n                <br>\n                <br>\n            </div>\n\n\n            <div formGroupName=\"myPostalCode\" class=\"form-group\">\n                <label for=\"myPostalCode\">Postal Code</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"myPostalCode\" id=\"myPostalCode\" formControlName=\"input\" #spy>\n                <span class=\"validation-error\" *ngIf=\"!myPostalCodeInput.valid\"> Not Valid </span>\n                <br>\n                <br>\n            </div>\n         \n            </div>\n        </form>\n    </div>\n    ", directives: [forms_1.REACTIVE_FORM_DIRECTIVES],
                        outputs: ['childevent']
                    }), 
                    __metadata('design:paramtypes', [])
                ], MailingListComponent);
                return MailingListComponent;
            }());
            exports_1("MailingListComponent", MailingListComponent);
        }
    }
});
//# sourceMappingURL=mailinglist.component.js.map