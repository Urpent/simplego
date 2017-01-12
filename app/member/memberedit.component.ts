import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { REACTIVE_FORM_DIRECTIVES, Validators, FormControl, FormGroup } from '@angular/forms';
import {MemberService} from './member.service'
import {ParticularsComponent} from './forms/particulars.component'
import {ParticularsInfo} from './models/particularsinfo';
import {Particulars2Component} from './forms/particulars2.component'
import {Particulars2Info} from './models/particulars2info';
import {MailingListComponent} from './forms/mailinglist.component'
import {MailingListInfo} from './models/mailinglistinfo';
import {MemberInfo} from './models/memberinfo';
@Component({

    template: `
    <h1>Edit Member</h1>

    <particulars            (childevent)="particularsForm = $event"  ></particulars>

    <particulars2           (childevent)="particulars2Form = $event" ></particulars2>

    <mailing-list-component (childevent)="mailingListForm = $event"  ></mailing-list-component>

    <input class="btn btn-primary" type="button"  (click)="editMember()" value="Edit"/>
    `,
    directives: [ROUTER_DIRECTIVES, ParticularsComponent, MailingListComponent, Particulars2Component]
})
export class MemberEditComponent implements OnInit {

    particularsForm: FormGroup;
    particulars2Form: FormGroup;
    mailingListForm: FormGroup;

    memberInfo: MemberInfo;

    constructor(private _memberService: MemberService) { }
    ngOnInit() {
        //Retrieve member info for editing
    }
    editMember() {
        if (!this.particularsForm.valid || !this.particulars2Form.valid || !this.mailingListForm.valid) {
            console.log('MemberComponent: Forms is not valid')
            return;
        }

        this.memberInfo = new MemberInfo(this.particularsForm, this.particulars2Form, this.mailingListForm);

        this._memberService.editMember(this.memberInfo).subscribe(jsonObj => {
            console.log(jsonObj);

            console.log('success')
        }, err => console.log(err));
    }
}