import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {MemberService} from './member.service'

@Component({
    template: `
    <h3>Search Member</h3>
    <input type="button"  (click)="getMember()" value="Search"/>
    <input type="text" (input)="nricInput = $event.target.value" placeholder="Enter NRIC"/>
    <br>
    `,
  directives: [ROUTER_DIRECTIVES]
})
export class MemberSearchComponent implements OnInit {
       nricInput = "";

    constructor( private _memberService: MemberService) { }

    ngOnInit() { }
    getMember(){
       this._memberService.getMember(this.nricInput).subscribe(text => {
                //response
                console.log("(MemberSearchComponent) "+ text )

        }, hhh => {
            //error response
  
             
            if (hhh.status == 500){
                console.log("500 recieved");
            }
            console.log("Error response (MemberSearchComponent )")
            console.log("JSON Received: " + JSON.stringify(hhh));
        });
   }
}