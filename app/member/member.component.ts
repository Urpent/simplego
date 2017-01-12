import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import { MemberService } from './member.service'
import { Router }from '@angular/router';
import { AuthService } from '../login/auth.service'

@Component({
    selector: 'my-login',
    template: `
                <nav>
                    <a [routerLink]="['/member/search']">Search</a>
                    <a [routerLink]="['/member/create']">Create</a>
                    <a [routerLink]="['/member/edit']">Edit</a>
                    <a [routerLink]="['/member/database']">Database</a>


                    <button type="button" class="btn btn-default" (click)="logout()" style="margin-left: 2cm;">
                        <span class="glyphicon glyphicon-log-out"></span> Log out
                    </button>
                </nav>

                <router-outlet></router-outlet>         
    `, 
    directives: [ROUTER_DIRECTIVES], //Needed for [routerLink] to work
    providers: [MemberService] 
})


export class MemberComponent{

   constructor( private router: Router, 
   private _memberService: MemberService,
   private authService: AuthService
   ) { }
   
   logout(){
        this.authService.Logout();
        this.router.navigate(['login']);
   }
}


