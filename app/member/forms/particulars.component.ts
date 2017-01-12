import {Component,EventEmitter,OnInit} from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, Validators, FormControl, FormGroup } from '@angular/forms'; 


@Component({ selector: 'particulars',

 template: `
    <h2> particulars </h2>

    <div class="container">
        <form [formGroup]="myForm">
            <div formGroupName="mySal" class="form-group">
                <label for="mySal">Sal</label>
                <input type="text" class="form-control" placeholder="mySal" id="mySal" formControlName="input" #spy>
                <span class="validation-error" *ngIf="!mySalInput.valid"> Not Valid </span>
                <br>
                <br>
            </div>

            <div formGroupName="myName" class="form-group">
                <label for="myName">Name</label>
                 <input type="text" class="form-control" placeholder="myName" id="myName" formControlName="input">
                <span class="validation-error" *ngIf="!myNameInput.valid"> Not Valid </span>
                <br>
                <br>
            </div>

            <div formGroupName="myPartner" class="form-group">
                <label for="myPartner">Partner</label>
                <input type="text" class="form-control" placeholder="myPartner" id="myPartner" formControlName="input">
                <span class="validation-error" *ngIf="!myPartnerInput.valid"> Not Valid </span>

                <br>
                <br>
            </div>

            <div formGroupName="myStatus" class="form-group">
                <label for="myStatus">Status</label>
                <input type="text" class="form-control" placeholder="myStatus" id="myStatus" formControlName="input">
                <span class="validation-error" *ngIf="!myStatusInput.valid"> Not Valid </span>
                <br>
                <br>
            </div>

            <div formGroupName="myAffiliation" class="form-group">
                <label for="myAffiliation">Affiliation</label>
                <input type="text" class="form-control" placeholder="myAffiliation" id="myAffiliation" formControlName="input">
                    <span class="validation-error" *ngIf="!myAffiliationInput.valid"> Not Valid </span>
                    <br>
                    <br>
            </div>

            <div formGroupName="myNRIC" class="form-group">
                <label for="myNRIC">NRIC</label>
                <input type="text" class="form-control" placeholder="myNRIC" id="myNRIC" formControlName="input">
                <span class="validation-error" *ngIf="!myNRICInput.valid"> Not Valid </span>
                <br>
                <br>
            </div>

            <div formGroupName="myDOB" class="form-group">
                <label for="myDOB">DOB</label>
                <input type="text" class="form-control" placeholder="myDOB" id="myDOB" formControlName="input">
                <span class="validation-error" *ngIf="!myDOBInput.valid"> Not Valid </span>
                <br>
                <br>
            </div>

           <div formGroupName="myGender" class="form-group">
                <label for="myGender">Gender</label>
                <!-- <input [ngFormControl]="myForm.controls['myGender']" placeholder="myGender"  type="text" #myGender="ngForm">-->
                <select class="form-control" formControlName="input">
                    <option *ngFor="let p of gender" [value] = "p"> {{p}}</option>>
                </select>
                <span class="validation-error" *ngIf="!myGenderInput.valid"> Not Valid </span>
                <br>
                <br>
            </div>

            
           <div formGroupName="myRace" class="form-group">
                <label for="myRace">Race</label>
                <input type="text" class="form-control" placeholder="myRace" id="myRace" formControlName="input">
                <span class="validation-error" *ngIf="!myRaceInput.valid"> Not Valid </span>
                <br>
                <br>
            </div>

        </form>
    </div>
    `, 
    directives: [REACTIVE_FORM_DIRECTIVES],
    outputs:['childevent']
    
 })


export class ParticularsComponent implements OnInit
{
    myForm: FormGroup;
    childevent: EventEmitter<any> = new EventEmitter();
    gender = ['Male','Female'];
    mySalInput = new FormControl('', [Validators.required])
    myNameInput = new FormControl('', [Validators.required])
    myPartnerInput = new FormControl('', [Validators.required])
    myStatusInput = new FormControl('', [Validators.required])
    myAffiliationInput = new FormControl('', [Validators.required])
    myNRICInput = new FormControl('', [Validators.required])
    myDOBInput =  new FormControl('', [Validators.required])
    myGenderInput = new FormControl('', [Validators.required])
    myRaceInput = new FormControl('', [Validators.required])


    constructor() {

        this.myForm = new FormGroup({

            mySal: new FormGroup({
                input: this.mySalInput
            }),

            myName: new FormGroup({
                input: this.myNameInput
            }),
            myPartner: new FormGroup({
                input: this.myPartnerInput
            }),
            myStatus: new FormGroup({
                input: this.myStatusInput
            }),
            myAffiliation: new FormGroup({
                input: this.myAffiliationInput
            }),
            myNRIC: new FormGroup({
                input: this.myNRICInput
            }),
            myDOB: new FormGroup({
                input: this.myDOBInput
            }),
            myGender: new FormGroup({
                input: this.myGenderInput
            }),
            myRace: new FormGroup({
                input: this.myRaceInput
            }),
        });
    }

    ngOnInit() { //Called after constructor
        this.childevent.emit(this.myForm);
    }
}
