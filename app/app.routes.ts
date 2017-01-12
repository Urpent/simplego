import { provideRouter, RouterConfig } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MemberComponent } from './member/member.component';

import {loginRoutes, authProviders}          from './login/login.routes';
import {memberRoutes}          from './member/member.routes';


export const routes: RouterConfig = [
    { path: '', redirectTo: '/login', pathMatch: 'full'}, //redirect when no path (initially when user enter main site url)
    ...loginRoutes, // ... means flatten the array. In this case, array only contain one element { path: 'login', component: LoginComponent }
    ...memberRoutes,
    //{ path: 'donor', component: DonorComponent }
];

export const appRouterProviders = [
	provideRouter(routes),
	authProviders,
    //CanDeactivateGuard
];