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
    var Particulars2Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }],
        execute: function() {
            Particulars2Component = (function () {
                function Particulars2Component() {
                    this.childevent = new core_1.EventEmitter();
                    this.gender = ['Male', 'Female'];
                    this.myMbrNoInput = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myDateJoinedInput = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myTypeInput = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myHome1Input = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myHome2Input = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myHome3Input = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myCountryInput = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myPostalCodeInput = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myResidentialInput = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myMobileInput = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myEAmplifiedInput = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myHighestQualificationsInput = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myOtherQualificationsInput = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myNameofCompanyBusinessInput = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myDesignationInput = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myOffice1Input = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myOffice2Input = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myOffice3Input = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myOffice4Input = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myOfficePostalCodeInput = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myOfficeContactNumberInput = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myOfficeFaxNumberInput = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myDetailsInput = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myEmailAddressInput = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myReturnedInvalidAddRefusedMailInput = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myDateOfUpdateInput = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myForm = new forms_1.FormGroup({
                        myMbrNo: new forms_1.FormGroup({
                            input: this.myMbrNoInput
                        }),
                        myDateJoined: new forms_1.FormGroup({
                            input: this.myDateJoinedInput
                        }),
                        myType: new forms_1.FormGroup({
                            input: this.myTypeInput
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
                        myResidential: new forms_1.FormGroup({
                            input: this.myResidentialInput
                        }),
                        myMobile: new forms_1.FormGroup({
                            input: this.myMobileInput
                        }),
                        myEAmplified: new forms_1.FormGroup({
                            input: this.myEAmplifiedInput
                        }),
                        myHighestQualifications: new forms_1.FormGroup({
                            input: this.myHighestQualificationsInput
                        }),
                        myOtherQualifications: new forms_1.FormGroup({
                            input: this.myOtherQualificationsInput
                        }),
                        myNameofCompanyBusiness: new forms_1.FormGroup({
                            input: this.myNameofCompanyBusinessInput
                        }),
                        myDesignation: new forms_1.FormGroup({
                            input: this.myDesignationInput
                        }),
                        myOffice1: new forms_1.FormGroup({
                            input: this.myOffice1Input
                        }),
                        myOffice2: new forms_1.FormGroup({
                            input: this.myOffice2Input
                        }),
                        myOffice3: new forms_1.FormGroup({
                            input: this.myOffice3Input
                        }),
                        myOffice4: new forms_1.FormGroup({
                            input: this.myOffice4Input
                        }),
                        myOfficePostalCode: new forms_1.FormGroup({
                            input: this.myOfficePostalCodeInput
                        }),
                        myOfficeContactNumber: new forms_1.FormGroup({
                            input: this.myOfficeContactNumberInput
                        }),
                        myOfficeFaxNumber: new forms_1.FormGroup({
                            input: this.myOfficeFaxNumberInput
                        }),
                        myDetails: new forms_1.FormGroup({
                            input: this.myDetailsInput
                        }),
                        myEmailAddress: new forms_1.FormGroup({
                            input: this.myEmailAddressInput
                        }),
                        myReturnedInvalidAddRefusedMail: new forms_1.FormGroup({
                            input: this.myReturnedInvalidAddRefusedMailInput
                        }),
                        myDateOfUpdate: new forms_1.FormGroup({
                            input: this.myDateOfUpdateInput
                        }),
                    });
                }
                Particulars2Component.prototype.ngOnInit = function () {
                    this.childevent.emit(this.myForm);
                };
                Particulars2Component = __decorate([
                    core_1.Component({
                        selector: 'particulars2',
                        template: "\n    <h2> particulars 2</h2>\n    <div class=\"container\">\n        <form [formGroup]=\"myForm\">\n            <div formGroupName=\"myMbrNo\" class=\"form-group\">\n                <label for=\"myMbrNo\">MbrNo</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"myMbrNo\" id=\"myMbrNo\" formControlName=\"input\" #spy>\n                <span class=\"validation-error\" *ngIf=\"!myMbrNoInput.valid\"> Not Valid </span>\n                <br>\n                <br>\n            </div>\n\n            <div formGroupName=\"myDateJoined\" class=\"form-group\">\n                <label for=\"myDateJoined\">DateJoined</label>\n                 <input type=\"text\" class=\"form-control\" placeholder=\"myDateJoined\" id=\"myDateJoined\" formControlName=\"input\">\n                <span class=\"validation-error\" *ngIf=\"!myDateJoinedInput.valid\"> Not Valid </span>\n                <br>\n                <br>\n            </div>\n\n            <div formGroupName=\"myType\" class=\"form-group\">\n                <label for=\"myType\">Partner</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"myType\" id=\"myType\" formControlName=\"input\">\n                <span class=\"validation-error\" *ngIf=\"!myTypeInput.valid\"> Not Valid </span>\n\n                <br>\n                <br>\n            </div>\n\n            <div formGroupName=\"myHome1\" class=\"form-group\">\n                <label for=\"myHome1\">Home 1</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"myHome1\" id=\"myHome1\" formControlName=\"input\">\n                <span class=\"validation-error\" *ngIf=\"!myHome1Input.valid\"> Not Valid </span>\n                <br>\n                <br>\n            </div>\n\n            <div formGroupName=\"myHome2\" class=\"form-group\">\n                <label for=\"myHome2\">Home 2</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"myHome2\" id=\"myHome2\" formControlName=\"input\">\n                    <span class=\"validation-error\" *ngIf=\"!myHome2Input.valid\"> Not Valid </span>\n                    <br>\n                    <br>\n            </div>\n\n            <div formGroupName=\"myHome3\" class=\"form-group\">\n                <label for=\"myHome3\">Home 3</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"myHome3\" id=\"myHome3\" formControlName=\"input\">\n                <span class=\"validation-error\" *ngIf=\"!myHome3Input.valid\"> Not Valid </span>\n                <br>\n                <br>\n            </div>\n\n            <div formGroupName=\"myCountry\" class=\"form-group\">\n                <label for=\"myCountry\">Country</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"myCountry\" id=\"myCountry\" formControlName=\"input\">\n                <span class=\"validation-error\" *ngIf=\"!myCountryInput.valid\"> Not Valid </span>\n                <br>\n                <br>\n            </div>\n            \n           <div formGroupName=\"myPostalCode\" class=\"form-group\">\n                <label for=\"myPostalCode\">Postal Code</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"myPostalCode\" id=\"myPostalCode\" formControlName=\"input\">\n                <span class=\"validation-error\" *ngIf=\"!myPostalCodeInput.valid\"> Not Valid </span>\n                <br>\n                <br>\n            </div>\n\n            <div formGroupName=\"myResidential\" class=\"form-group\">\n                <label for=\"myResidential\">Residential</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"myResidential\" id=\"myResidential\" formControlName=\"input\">\n                <span class=\"validation-error\" *ngIf=\"!myResidentialInput.valid\"> Not Valid </span>\n                <br>\n                <br>\n            </div>\n\n            <div formGroupName=\"myMobile\" class=\"form-group\">\n                <label for=\"myMobile\">Mobile</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"myMobile\" id=\"myMobile\" formControlName=\"input\">\n                <span class=\"validation-error\" *ngIf=\"!myMobileInput.valid\"> Not Valid </span>\n                <br>\n                <br>\n            </div>\n\n            <div formGroupName=\"myEAmplified\" class=\"form-group\">\n                <label for=\"myEAmplified\">Race</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"myEAmplified\" id=\"myEAmplified\" formControlName=\"input\">\n                <span class=\"validation-error\" *ngIf=\"!myEAmplifiedInput.valid\"> Not Valid </span>\n                <br>\n                <br>\n            </div>\n\n             <div formGroupName=\"myHighestQualifications\" class=\"form-group\">\n                <label for=\"myHighestQualifications\">Highest Qualifications</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"myHighestQualifications\" id=\"myHighestQualifications\" formControlName=\"input\">\n                <span class=\"validation-error\" *ngIf=\"!myHighestQualificationsInput.valid\"> Not Valid </span>\n                <br>\n                <br>\n            </div>\n\n            <div formGroupName=\"myOtherQualifications\" class=\"form-group\">\n                <label for=\"myOtherQualifications\">Other Qualifications</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"myOtherQualifications\" id=\"myOtherQualifications\" formControlName=\"input\">\n                <span class=\"validation-error\" *ngIf=\"!myOtherQualificationsInput.valid\"> Not Valid </span>\n                <br>\n                <br>\n            </div>\n\n            <div formGroupName=\"myNameofCompanyBusiness\" class=\"form-group\">\n                <label for=\"myNameofCompanyBusiness\">Name of Company/Business</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"myNameofCompanyBusiness\" id=\"myNameofCompanyBusiness\" formControlName=\"input\">\n                <span class=\"validation-error\" *ngIf=\"!myNameofCompanyBusinessInput.valid\"> Not Valid </span>\n                <br>\n                <br>\n            </div>\n\n            <div formGroupName=\"myDesignation\" class=\"form-group\">\n                <label for=\"myDesignation\">Designation</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"myDesignation\" id=\"myDesignation\" formControlName=\"input\">\n                <span class=\"validation-error\" *ngIf=\"!myDesignationInput.valid\"> Not Valid </span>\n                <br>\n                <br>\n            </div>\n\n            <div formGroupName=\"myOffice1\" class=\"form-group\">\n                <label for=\"myOffice1\">Office 1</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"myOffice1\" id=\"myOffice1\" formControlName=\"input\">\n                <span class=\"validation-error\" *ngIf=\"!myOffice1Input.valid\"> Not Valid </span>\n                <br>\n                <br>\n            </div>\n\n              <div formGroupName=\"myOffice2\" class=\"form-group\">\n                <label for=\"myOffice2\">Office 2</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"myOffice2\" id=\"myOffice2\" formControlName=\"input\">\n                <span class=\"validation-error\" *ngIf=\"!myOffice2Input.valid\"> Not Valid </span>\n                <br>\n                <br>\n            </div>\n\n              <div formGroupName=\"myOffice3\" class=\"form-group\">\n                <label for=\"myOffice3\">Office 3</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"myOffice3\" id=\"myOffice3\" formControlName=\"input\">\n                <span class=\"validation-error\" *ngIf=\"!myOffice3Input.valid\"> Not Valid </span>\n                <br>\n                <br>\n            </div>\n\n              <div formGroupName=\"myOffice4\" class=\"form-group\">\n                <label for=\"myOffice4\">Office 4</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"myOffice4\" id=\"myOffice4\" formControlName=\"input\">\n                <span class=\"validation-error\" *ngIf=\"!myOffice4Input.valid\"> Not Valid </span>\n                <br>\n                <br>\n            </div>\n\n            <div formGroupName=\"myOfficePostalCode\" class=\"form-group\">\n                <label for=\"myOfficePostalCode\">Postal Code(Office)</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"myOfficePostalCode\" id=\"myOfficePostalCode\" formControlName=\"input\">\n                <span class=\"validation-error\" *ngIf=\"!myOfficePostalCodeInput.valid\"> Not Valid </span>\n                <br>\n                <br>\n            </div>\n\n            <div formGroupName=\"myOfficeContactNumber\" class=\"form-group\">\n                <label for=\"myOfficeContactNumber\">ontact Number(Office)</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"myOfficeContactNumber\" id=\"myOfficeContactNumber\" formControlName=\"input\">\n                <span class=\"validation-error\" *ngIf=\"!myOfficeContactNumberInput.valid\"> Not Valid </span>\n                <br>\n                <br>\n            </div>\n\n             <div formGroupName=\"myOfficeFaxNumber\" class=\"form-group\">\n                <label for=\"myOfficeFaxNumber\">Fax Number(Office)</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"myOfficeFaxNumber\" id=\"myOfficeFaxNumber\" formControlName=\"input\">\n                <span class=\"validation-error\" *ngIf=\"!myOfficeFaxNumberInput.valid\"> Not Valid </span>\n                <br>\n                <br>\n            </div>\n\n               <div formGroupName=\"myDetails\" class=\"form-group\">\n                <label for=\"myDetails\">Details</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"myDetails\" id=\"myDetails\" formControlName=\"input\">\n                <span class=\"validation-error\" *ngIf=\"!myDetailsInput.valid\"> Not Valid </span>\n                <br>\n                <br>\n            </div>\n\n               <div formGroupName=\"myEmailAddress\" class=\"form-group\">\n                <label for=\"myEmailAddress\">Email Address</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"myEmailAddress\" id=\"myEmailAddress\" formControlName=\"input\">\n                <span class=\"validation-error\" *ngIf=\"!myEmailAddressInput.valid\"> Not Valid </span>\n                <br>\n                <br>\n            </div>\n\n            <div formGroupName=\"myReturnedInvalidAddRefusedMail\" class=\"form-group\">\n                <label for=\"myReturnedInvalidAddRefusedMail\">Returned Mail. Invalid Add / Refused Mail</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"myReturnedInvalidAddRefusedMail\" id=\"myReturnedInvalidAddRefusedMail\" formControlName=\"input\">\n                <span class=\"validation-error\" *ngIf=\"!myReturnedInvalidAddRefusedMailInput.valid\"> Not Valid </span>\n                <br>\n                <br>\n            </div>\n\n            <div formGroupName=\"myDateOfUpdate\" class=\"form-group\">\n                <label for=\"myDateOfUpdate\">Date Of Update</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"myDateOfUpdate\" id=\"myDateOfUpdate\" formControlName=\"input\">\n                <span class=\"validation-error\" *ngIf=\"!myDateOfUpdateInput.valid\"> Not Valid </span>\n                <br>\n                <br>\n            </div>\n\n\n        </form>\n    </div>\n    ",
                        directives: [forms_1.REACTIVE_FORM_DIRECTIVES],
                        outputs: ['childevent']
                    }), 
                    __metadata('design:paramtypes', [])
                ], Particulars2Component);
                return Particulars2Component;
            }());
            exports_1("Particulars2Component", Particulars2Component);
        }
    }
});
//# sourceMappingURL=particulars2.component.js.map