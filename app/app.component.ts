import {Component} from '@angular/core';
//import {RouteConfig, RouterOutlet} from "@angular/router-deprecated"

import { ROUTER_DIRECTIVES } from '@angular/router';

//import {LoggedInRouterOutlet} from "./routing/myRouterOutlet.directive"
//import {IAuthService} from "./routing/i.auth.service"


import {LoginComponent} from "./login/login.component"
import {AuthService} from "./login/auth.service"
//import {LoginService} from "./login/login.service"

import {MemberComponent} from "./member/member.component"
import {MemberService} from "./member/member.service"

@Component({
    selector: 'my-app',
    template: `
    <div class="container body-container">
        <h1>App</h1>
        <router-outlet></router-outlet>
    </div>
    `,
    styleUrls: ['assets/css/app.css'],
    providers: [MemberService],
    directives: [ROUTER_DIRECTIVES]
   
    //precompile: [LoginComponent], //TODO: need to add member component etc
    //directives: [LoggedInRouterOutlet],
    //providers: [provide(IAuthService, { useExisting: LoginService }), MemberService] 
    //TODO: providers need to clean up
})

/*
@RouteConfig([
    //name is needed for imperative nagivation. Eg.  this.router.navigate(['MemberManagement'])
    { path: '/login', name:'Login' ,component: LoginComponent },
    { path: '/member', name:'MemberManagement' ,component: MemberComponent, data:{roles:['MemberManager']} }
    //{ path: '/donor', name:'DonorManagement' ,component: DonorComponent, data:{roles:['DonorManager']} }
])
*/
export class AppComponent { }
