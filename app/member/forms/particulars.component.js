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
    var ParticularsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }],
        execute: function() {
            ParticularsComponent = (function () {
                function ParticularsComponent() {
                    this.childevent = new core_1.EventEmitter();
                    this.gender = ['Male', 'Female'];
                    this.mySalInput = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myNameInput = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myPartnerInput = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myStatusInput = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myAffiliationInput = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myNRICInput = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myDOBInput = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myGenderInput = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myRaceInput = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.myForm = new forms_1.FormGroup({
                        mySal: new forms_1.FormGroup({
                            input: this.mySalInput
                        }),
                        myName: new forms_1.FormGroup({
                            input: this.myNameInput
                        }),
                        myPartner: new forms_1.FormGroup({
                            input: this.myPartnerInput
                        }),
                        myStatus: new forms_1.FormGroup({
                            input: this.myStatusInput
                        }),
                        myAffiliation: new forms_1.FormGroup({
                            input: this.myAffiliationInput
                        }),
                        myNRIC: new forms_1.FormGroup({
                            input: this.myNRICInput
                        }),
                        myDOB: new forms_1.FormGroup({
                            input: this.myDOBInput
                        }),
                        myGender: new forms_1.FormGroup({
                            input: this.myGenderInput
                        }),
                        myRace: new forms_1.FormGroup({
                            input: this.myRaceInput
                        }),
                    });
                }
                ParticularsComponent.prototype.ngOnInit = function () {
                    this.childevent.emit(this.myForm);
                };
                ParticularsComponent = __decorate([
                    core_1.Component({ selector: 'particulars',
                        template: "\n    <h2> particulars </h2>\n\n    <div class=\"container\">\n        <form [formGroup]=\"myForm\">\n            <div formGroupName=\"mySal\" class=\"form-group\">\n                <label for=\"mySal\">Sal</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"mySal\" id=\"mySal\" formControlName=\"input\" #spy>\n                <span class=\"validation-error\" *ngIf=\"!mySalInput.valid\"> Not Valid </span>\n                <br>\n                <br>\n            </div>\n\n            <div formGroupName=\"myName\" class=\"form-group\">\n                <label for=\"myName\">Name</label>\n                 <input type=\"text\" class=\"form-control\" placeholder=\"myName\" id=\"myName\" formControlName=\"input\">\n                <span class=\"validation-error\" *ngIf=\"!myNameInput.valid\"> Not Valid </span>\n                <br>\n                <br>\n            </div>\n\n            <div formGroupName=\"myPartner\" class=\"form-group\">\n                <label for=\"myPartner\">Partner</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"myPartner\" id=\"myPartner\" formControlName=\"input\">\n                <span class=\"validation-error\" *ngIf=\"!myPartnerInput.valid\"> Not Valid </span>\n\n                <br>\n                <br>\n            </div>\n\n            <div formGroupName=\"myStatus\" class=\"form-group\">\n                <label for=\"myStatus\">Status</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"myStatus\" id=\"myStatus\" formControlName=\"input\">\n                <span class=\"validation-error\" *ngIf=\"!myStatusInput.valid\"> Not Valid </span>\n                <br>\n                <br>\n            </div>\n\n            <div formGroupName=\"myAffiliation\" class=\"form-group\">\n                <label for=\"myAffiliation\">Affiliation</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"myAffiliation\" id=\"myAffiliation\" formControlName=\"input\">\n                    <span class=\"validation-error\" *ngIf=\"!myAffiliationInput.valid\"> Not Valid </span>\n                    <br>\n                    <br>\n            </div>\n\n            <div formGroupName=\"myNRIC\" class=\"form-group\">\n                <label for=\"myNRIC\">NRIC</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"myNRIC\" id=\"myNRIC\" formControlName=\"input\">\n                <span class=\"validation-error\" *ngIf=\"!myNRICInput.valid\"> Not Valid </span>\n                <br>\n                <br>\n            </div>\n\n            <div formGroupName=\"myDOB\" class=\"form-group\">\n                <label for=\"myDOB\">DOB</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"myDOB\" id=\"myDOB\" formControlName=\"input\">\n                <span class=\"validation-error\" *ngIf=\"!myDOBInput.valid\"> Not Valid </span>\n                <br>\n                <br>\n            </div>\n\n           <div formGroupName=\"myGender\" class=\"form-group\">\n                <label for=\"myGender\">Gender</label>\n                <!-- <input [ngFormControl]=\"myForm.controls['myGender']\" placeholder=\"myGender\"  type=\"text\" #myGender=\"ngForm\">-->\n                <select class=\"form-control\" formControlName=\"input\">\n                    <option *ngFor=\"let p of gender\" [value] = \"p\"> {{p}}</option>>\n                </select>\n                <span class=\"validation-error\" *ngIf=\"!myGenderInput.valid\"> Not Valid </span>\n                <br>\n                <br>\n            </div>\n\n            \n           <div formGroupName=\"myRace\" class=\"form-group\">\n                <label for=\"myRace\">Race</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"myRace\" id=\"myRace\" formControlName=\"input\">\n                <span class=\"validation-error\" *ngIf=\"!myRaceInput.valid\"> Not Valid </span>\n                <br>\n                <br>\n            </div>\n\n        </form>\n    </div>\n    ",
                        directives: [forms_1.REACTIVE_FORM_DIRECTIVES],
                        outputs: ['childevent']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ParticularsComponent);
                return ParticularsComponent;
            }());
            exports_1("ParticularsComponent", ParticularsComponent);
        }
    }
});
//# sourceMappingURL=particulars.component.js.map