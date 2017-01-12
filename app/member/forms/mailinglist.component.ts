import {Component,EventEmitter,OnChanges,OnInit} from '@angular/core';

import { REACTIVE_FORM_DIRECTIVES, Validators, FormControl, FormGroup } from '@angular/forms'; 


@Component({

    selector: 'mailing-list-component',
    template: `
    <h2> mailing list </h2>

    <div class="container">
        <form [formGroup]="myForm">
            <div>
            <div formGroupName="myTitle" class="form-group">
                <label for="myTitle">Title</label>
                <input type="text" class="form-control" placeholder="myTitle" id="myTitle" formControlName="input" #spy>
                <span class="validation-error" *ngIf="!myTitleInput.valid"> Not Valid </span>
                <br>
                <br>
            </div>

            <div formGroupName="myName" class="form-group">
                <label for="myName">Name</label>
                <input type="text" class="form-control" placeholder="myName" id="myName" formControlName="input" #spy>
                <span class="validation-error" *ngIf="!myNameInput.valid"> Not Valid </span>
                <br>
                <br>
            </div>


            <div formGroupName="myRemarks" class="form-group">
                <label for="myRemarks">Remarks</label>
                <input type="text" class="form-control" placeholder="myRemarks" id="myRemarks" formControlName="input" #spy>
                <span class="validation-error" *ngIf="!myRemarksInput.valid"> Not Valid </span>
                <br>
                <br>
            </div>

         
            <div formGroupName="myMemberNum" class="form-group">
                <label for="myMemberNum">Member Number</label>
                <input type="text" class="form-control" placeholder="myMemberNum" id="myMemberNum" formControlName="input" #spy>
                <span class="validation-error" *ngIf="!myMemberNumInput.valid"> Not Valid </span>
                <br>
                <br>
            </div>

            <div formGroupName="myHome1" class="form-group">
                <label for="myHome1">Home 1</label>
                <input type="text" class="form-control" placeholder="myHome1" id="myHome1" formControlName="input" #spy>
                <span class="validation-error" *ngIf="!myHome1Input.valid"> Not Valid </span>
                <br>
                <br>
            </div>

            <div formGroupName="myHome2" class="form-group">
                <label for="myHome2">Home 2</label>
                <input type="text" class="form-control" placeholder="myHome2" id="myHome2" formControlName="input" #spy>
                <span class="validation-error" *ngIf="!myHome2Input.valid"> Not Valid </span>
                <br>
                <br>
            </div>

            <div formGroupName="myHome3" class="form-group">
                <label for="myHome3">Home 3</label>
                <input type="text" class="form-control" placeholder="myHome3" id="myHome3" formControlName="input" #spy>
                <span class="validation-error" *ngIf="!myHome3Input.valid"> Not Valid </span>
                <br>
                <br>
            </div>

            <div formGroupName="myCountry" class="form-group">
                <label for="myCountry">Country</label>
                <input type="text" class="form-control" placeholder="myCountry" id="myCountry" formControlName="input" #spy>
                <span class="validation-error" *ngIf="!myCountryInput.valid"> Not Valid </span>
                <br>
                <br>
            </div>


            <div formGroupName="myPostalCode" class="form-group">
                <label for="myPostalCode">Postal Code</label>
                <input type="text" class="form-control" placeholder="myPostalCode" id="myPostalCode" formControlName="input" #spy>
                <span class="validation-error" *ngIf="!myPostalCodeInput.valid"> Not Valid </span>
                <br>
                <br>
            </div>
         
            </div>
        </form>
    </div>
    `,directives: [REACTIVE_FORM_DIRECTIVES],
    outputs:['childevent']
})


export class MailingListComponent implements OnInit
{
    myForm: FormGroup;
    childevent: EventEmitter<any> = new EventEmitter();

    myTitleInput = new FormControl('', [Validators.required])
    myNameInput = new FormControl('', [Validators.required])
    myRemarksInput = new FormControl('', [Validators.required])
    myMemberNumInput = new FormControl('', [Validators.required])
    myHome1Input = new FormControl('', [Validators.required])
    myHome2Input = new FormControl('', [Validators.required])
    myHome3Input =  new FormControl('', [Validators.required])
    myCountryInput = new FormControl('', [Validators.required])
    myPostalCodeInput = new FormControl('', [Validators.required])


    constructor() { 

         this.myForm = new FormGroup({

            myTitle: new FormGroup({
                input: this.myTitleInput
            }),

            myName: new FormGroup({
                input: this.myNameInput
            }),
            myRemarks: new FormGroup({
                input: this.myRemarksInput
            }),
            myMemberNum: new FormGroup({
                input: this.myMemberNumInput
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

        });
    }


    ngOnInit() {


        this.myForm.valueChanges.subscribe(
            obj => {
                if (this.myForm.valid) {
                    this.childevent.emit(this.myForm);
                }
                else{
                    this.childevent.emit(null);
                }
            }, err => console.log(err));
    }
}