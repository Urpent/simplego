import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { REACTIVE_FORM_DIRECTIVES, Validators, FormControl, FormGroup } from '@angular/forms';
import {MemberService} from './member.service'
import {ParticularsComponent} from './forms/particulars.component'
import {Particulars2Component} from './forms/particulars2.component'
import {MailingListComponent} from './forms/mailinglist.component'

import {MemberInfo} from './models/memberinfo';
@Component({
    template: `
    <h1>Create Member</h1>

    <particulars  (childevent)="particularsForm = $event" ></particulars>
    <particulars2  (childevent)="particulars2Form = $event"></particulars2>
    <mailing-list-component (childevent)="mailingListForm = $event"></mailing-list-component>

    <input class="btn btn-primary" type="button"  (click)="addMember()" value="Add"/>
    `,
    directives: [ROUTER_DIRECTIVES, ParticularsComponent, MailingListComponent, Particulars2Component]
})
export class MemberCreateComponent implements OnInit {

    particularsForm: FormGroup;
    particulars2Form: FormGroup;
    mailingListForm: FormGroup;


    d: MemberInfo;

    constructor(private _memberService: MemberService) { }

    ngOnInit() { }
    addMember() {
        if (this.particularsForm == null || this.particulars2Form == null || this.mailingListForm == null) {
            console.log('MemberCreateComponent: Forms is not valid')
            return;
        }

        this.d = new MemberInfo(this.particularsForm, this.particulars2Form, this.mailingListForm);
        console.log(this.d);

        this._memberService.addMember(this.d).subscribe(jsonObj => { //Successful: JSON

            console.log(jsonObj)
            console.log(jsonObj.text)
            console.log(String(jsonObj))

        }, jsonHttp => { //Error Response
            console.log("Failed! (MemberCreateComponent)")
            console.log(JSON.stringify(jsonHttp))
            console.log("_body: " + jsonHttp._body)

            var j = JSON.parse(jsonHttp._body)
            console.log("text: " + j.text);
        });
    }
}