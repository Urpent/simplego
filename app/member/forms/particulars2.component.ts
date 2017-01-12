import {Component, EventEmitter, OnInit} from '@angular/core';

import { REACTIVE_FORM_DIRECTIVES, Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'particulars2',

    template: `
    <h2> particulars 2</h2>
    <div class="container">
        <form [formGroup]="myForm">
            <div formGroupName="myMbrNo" class="form-group">
                <label for="myMbrNo">MbrNo</label>
                <input type="text" class="form-control" placeholder="myMbrNo" id="myMbrNo" formControlName="input" #spy>
                <span class="validation-error" *ngIf="!myMbrNoInput.valid"> Not Valid </span>
                <br>
                <br>
            </div>

            <div formGroupName="myDateJoined" class="form-group">
                <label for="myDateJoined">DateJoined</label>
                 <input type="text" class="form-control" placeholder="myDateJoined" id="myDateJoined" formControlName="input">
                <span class="validation-error" *ngIf="!myDateJoinedInput.valid"> Not Valid </span>
                <br>
                <br>
            </div>

            <div formGroupName="myType" class="form-group">
                <label for="myType">Partner</label>
                <input type="text" class="form-control" placeholder="myType" id="myType" formControlName="input">
                <span class="validation-error" *ngIf="!myTypeInput.valid"> Not Valid </span>

                <br>
                <br>
            </div>

            <div formGroupName="myHome1" class="form-group">
                <label for="myHome1">Home 1</label>
                <input type="text" class="form-control" placeholder="myHome1" id="myHome1" formControlName="input">
                <span class="validation-error" *ngIf="!myHome1Input.valid"> Not Valid </span>
                <br>
                <br>
            </div>

            <div formGroupName="myHome2" class="form-group">
                <label for="myHome2">Home 2</label>
                <input type="text" class="form-control" placeholder="myHome2" id="myHome2" formControlName="input">
                    <span class="validation-error" *ngIf="!myHome2Input.valid"> Not Valid </span>
                    <br>
                    <br>
            </div>

            <div formGroupName="myHome3" class="form-group">
                <label for="myHome3">Home 3</label>
                <input type="text" class="form-control" placeholder="myHome3" id="myHome3" formControlName="input">
                <span class="validation-error" *ngIf="!myHome3Input.valid"> Not Valid </span>
                <br>
                <br>
            </div>

            <div formGroupName="myCountry" class="form-group">
                <label for="myCountry">Country</label>
                <input type="text" class="form-control" placeholder="myCountry" id="myCountry" formControlName="input">
                <span class="validation-error" *ngIf="!myCountryInput.valid"> Not Valid </span>
                <br>
                <br>
            </div>
            
           <div formGroupName="myPostalCode" class="form-group">
                <label for="myPostalCode">Postal Code</label>
                <input type="text" class="form-control" placeholder="myPostalCode" id="myPostalCode" formControlName="input">
                <span class="validation-error" *ngIf="!myPostalCodeInput.valid"> Not Valid </span>
                <br>
                <br>
            </div>

            <div formGroupName="myResidential" class="form-group">
                <label for="myResidential">Residential</label>
                <input type="text" class="form-control" placeholder="myResidential" id="myResidential" formControlName="input">
                <span class="validation-error" *ngIf="!myResidentialInput.valid"> Not Valid </span>
                <br>
                <br>
            </div>

            <div formGroupName="myMobile" class="form-group">
                <label for="myMobile">Mobile</label>
                <input type="text" class="form-control" placeholder="myMobile" id="myMobile" formControlName="input">
                <span class="validation-error" *ngIf="!myMobileInput.valid"> Not Valid </span>
                <br>
                <br>
            </div>

            <div formGroupName="myEAmplified" class="form-group">
                <label for="myEAmplified">Race</label>
                <input type="text" class="form-control" placeholder="myEAmplified" id="myEAmplified" formControlName="input">
                <span class="validation-error" *ngIf="!myEAmplifiedInput.valid"> Not Valid </span>
                <br>
                <br>
            </div>

             <div formGroupName="myHighestQualifications" class="form-group">
                <label for="myHighestQualifications">Highest Qualifications</label>
                <input type="text" class="form-control" placeholder="myHighestQualifications" id="myHighestQualifications" formControlName="input">
                <span class="validation-error" *ngIf="!myHighestQualificationsInput.valid"> Not Valid </span>
                <br>
                <br>
            </div>

            <div formGroupName="myOtherQualifications" class="form-group">
                <label for="myOtherQualifications">Other Qualifications</label>
                <input type="text" class="form-control" placeholder="myOtherQualifications" id="myOtherQualifications" formControlName="input">
                <span class="validation-error" *ngIf="!myOtherQualificationsInput.valid"> Not Valid </span>
                <br>
                <br>
            </div>

            <div formGroupName="myNameofCompanyBusiness" class="form-group">
                <label for="myNameofCompanyBusiness">Name of Company/Business</label>
                <input type="text" class="form-control" placeholder="myNameofCompanyBusiness" id="myNameofCompanyBusiness" formControlName="input">
                <span class="validation-error" *ngIf="!myNameofCompanyBusinessInput.valid"> Not Valid </span>
                <br>
                <br>
            </div>

            <div formGroupName="myDesignation" class="form-group">
                <label for="myDesignation">Designation</label>
                <input type="text" class="form-control" placeholder="myDesignation" id="myDesignation" formControlName="input">
                <span class="validation-error" *ngIf="!myDesignationInput.valid"> Not Valid </span>
                <br>
                <br>
            </div>

            <div formGroupName="myOffice1" class="form-group">
                <label for="myOffice1">Office 1</label>
                <input type="text" class="form-control" placeholder="myOffice1" id="myOffice1" formControlName="input">
                <span class="validation-error" *ngIf="!myOffice1Input.valid"> Not Valid </span>
                <br>
                <br>
            </div>

              <div formGroupName="myOffice2" class="form-group">
                <label for="myOffice2">Office 2</label>
                <input type="text" class="form-control" placeholder="myOffice2" id="myOffice2" formControlName="input">
                <span class="validation-error" *ngIf="!myOffice2Input.valid"> Not Valid </span>
                <br>
                <br>
            </div>

              <div formGroupName="myOffice3" class="form-group">
                <label for="myOffice3">Office 3</label>
                <input type="text" class="form-control" placeholder="myOffice3" id="myOffice3" formControlName="input">
                <span class="validation-error" *ngIf="!myOffice3Input.valid"> Not Valid </span>
                <br>
                <br>
            </div>

              <div formGroupName="myOffice4" class="form-group">
                <label for="myOffice4">Office 4</label>
                <input type="text" class="form-control" placeholder="myOffice4" id="myOffice4" formControlName="input">
                <span class="validation-error" *ngIf="!myOffice4Input.valid"> Not Valid </span>
                <br>
                <br>
            </div>

            <div formGroupName="myOfficePostalCode" class="form-group">
                <label for="myOfficePostalCode">Postal Code(Office)</label>
                <input type="text" class="form-control" placeholder="myOfficePostalCode" id="myOfficePostalCode" formControlName="input">
                <span class="validation-error" *ngIf="!myOfficePostalCodeInput.valid"> Not Valid </span>
                <br>
                <br>
            </div>

            <div formGroupName="myOfficeContactNumber" class="form-group">
                <label for="myOfficeContactNumber">ontact Number(Office)</label>
                <input type="text" class="form-control" placeholder="myOfficeContactNumber" id="myOfficeContactNumber" formControlName="input">
                <span class="validation-error" *ngIf="!myOfficeContactNumberInput.valid"> Not Valid </span>
                <br>
                <br>
            </div>

             <div formGroupName="myOfficeFaxNumber" class="form-group">
                <label for="myOfficeFaxNumber">Fax Number(Office)</label>
                <input type="text" class="form-control" placeholder="myOfficeFaxNumber" id="myOfficeFaxNumber" formControlName="input">
                <span class="validation-error" *ngIf="!myOfficeFaxNumberInput.valid"> Not Valid </span>
                <br>
                <br>
            </div>

               <div formGroupName="myDetails" class="form-group">
                <label for="myDetails">Details</label>
                <input type="text" class="form-control" placeholder="myDetails" id="myDetails" formControlName="input">
                <span class="validation-error" *ngIf="!myDetailsInput.valid"> Not Valid </span>
                <br>
                <br>
            </div>

               <div formGroupName="myEmailAddress" class="form-group">
                <label for="myEmailAddress">Email Address</label>
                <input type="text" class="form-control" placeholder="myEmailAddress" id="myEmailAddress" formControlName="input">
                <span class="validation-error" *ngIf="!myEmailAddressInput.valid"> Not Valid </span>
                <br>
                <br>
            </div>

            <div formGroupName="myReturnedInvalidAddRefusedMail" class="form-group">
                <label for="myReturnedInvalidAddRefusedMail">Returned Mail. Invalid Add / Refused Mail</label>
                <input type="text" class="form-control" placeholder="myReturnedInvalidAddRefusedMail" id="myReturnedInvalidAddRefusedMail" formControlName="input">
                <span class="validation-error" *ngIf="!myReturnedInvalidAddRefusedMailInput.valid"> Not Valid </span>
                <br>
                <br>
            </div>

            <div formGroupName="myDateOfUpdate" class="form-group">
                <label for="myDateOfUpdate">Date Of Update</label>
                <input type="text" class="form-control" placeholder="myDateOfUpdate" id="myDateOfUpdate" formControlName="input">
                <span class="validation-error" *ngIf="!myDateOfUpdateInput.valid"> Not Valid </span>
                <br>
                <br>
            </div>


        </form>
    </div>
    `,
    directives: [REACTIVE_FORM_DIRECTIVES],
    outputs: ['childevent']

})


export class Particulars2Component implements OnInit {
    myForm: FormGroup;
    childevent: EventEmitter<any> = new EventEmitter();
    gender = ['Male', 'Female'];


    myMbrNoInput = new FormControl('', [Validators.required])
    myDateJoinedInput = new FormControl('', [Validators.required])
    myTypeInput = new FormControl('', [Validators.required])
    myHome1Input = new FormControl('', [Validators.required])
    myHome2Input = new FormControl('', [Validators.required])
    myHome3Input = new FormControl('', [Validators.required])
    myCountryInput = new FormControl('', [Validators.required])
    myPostalCodeInput = new FormControl('', [Validators.required])
    myResidentialInput = new FormControl('', [Validators.required])
    myMobileInput = new FormControl('', [Validators.required])
    myEAmplifiedInput = new FormControl('', [Validators.required])
    myHighestQualificationsInput = new FormControl('', [Validators.required])
    myOtherQualificationsInput = new FormControl('', [Validators.required])
    myNameofCompanyBusinessInput = new FormControl('', [Validators.required])
    myDesignationInput = new FormControl('', [Validators.required])
    myOffice1Input = new FormControl('', [Validators.required])
    myOffice2Input = new FormControl('', [Validators.required])
    myOffice3Input = new FormControl('', [Validators.required])
    myOffice4Input = new FormControl('', [Validators.required])
    myOfficePostalCodeInput = new FormControl('', [Validators.required])
    myOfficeContactNumberInput = new FormControl('', [Validators.required])
    myOfficeFaxNumberInput = new FormControl('', [Validators.required])
    myDetailsInput = new FormControl('', [Validators.required])
    myEmailAddressInput = new FormControl('', [Validators.required])
    myReturnedInvalidAddRefusedMailInput = new FormControl('', [Validators.required])
    myDateOfUpdateInput = new FormControl('', [Validators.required])


    constructor() {

        this.myForm = new FormGroup({

            myMbrNo: new FormGroup({
                input: this.myMbrNoInput
            }),

            myDateJoined: new FormGroup({
                input: this.myDateJoinedInput
            }),
            myType: new FormGroup({
                input: this.myTypeInput
            }),
            myHome1: new FormGroup({
                input: this.myHome1Input
            }),
            myHome2: new FormGroup({
                input: this.myHome2Input
            }),
            myHome3: new FormGroup({
                input: this.myHome3Input
            }),
            myCountry: new FormGroup({
                input: this.myCountryInput
            }),
            myPostalCode: new FormGroup({
                input: this.myPostalCodeInput
            }),
            myResidential: new FormGroup({
                input: this.myResidentialInput
            }),
            myMobile: new FormGroup({
                input: this.myMobileInput
            }),
            myEAmplified: new FormGroup({
                input: this.myEAmplifiedInput
            }),
            myHighestQualifications: new FormGroup({
                input: this.myHighestQualificationsInput
            }),
            myOtherQualifications: new FormGroup({
                input: this.myOtherQualificationsInput
            }),
            myNameofCompanyBusiness: new FormGroup({
                input: this.myNameofCompanyBusinessInput
            }),
            myDesignation: new FormGroup({
                input: this.myDesignationInput
            }),
            myOffice1: new FormGroup({
                input: this.myOffice1Input
            }),
            myOffice2: new FormGroup({
                input: this.myOffice2Input
            }),
            myOffice3: new FormGroup({
                input: this.myOffice3Input
            }),
            myOffice4: new FormGroup({
                input: this.myOffice4Input
            }),
            myOfficePostalCode: new FormGroup({
                input: this.myOfficePostalCodeInput
            }),
            myOfficeContactNumber: new FormGroup({
                input: this.myOfficeContactNumberInput
            }),
            myOfficeFaxNumber: new FormGroup({
                input: this.myOfficeFaxNumberInput
            }),
            myDetails: new FormGroup({
                input: this.myDetailsInput
            }),
            myEmailAddress: new FormGroup({
                input: this.myEmailAddressInput
            }),
            myReturnedInvalidAddRefusedMail: new FormGroup({
                input: this.myReturnedInvalidAddRefusedMailInput
            }),
            myDateOfUpdate: new FormGroup({
                input: this.myDateOfUpdateInput
            }),

        });
    }

    ngOnInit() {
      
        this.childevent.emit(this.myForm);

        /*this.myForm.valueChanges.subscribe(
            obj => {
                if (this.myForm.valid) {
                    this.childevent.emit(this.myForm);
                }
                else {
                    this.childevent.emit(null);
                }
            }, err => console.log(err));*/
    }
}
