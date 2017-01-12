import { RouterConfig }       from '@angular/router';
import { MemberComponent }     from './member.component';
import { MemberCreateComponent }     from './membercreate.component';
import { MemberSearchComponent }     from './membersearch.component';
import { MemberEditComponent }     from './memberedit.component';
import {MemberDataBaseComponent} from "./databasetable/databasetable.component"

import { AuthGuard }             from '../login/auth.guard';


//See angular.io latest routing guide
export const memberRoutes: RouterConfig = [
  {
    path: 'member',
    component: MemberComponent, 
    canActivate: [AuthGuard],
    children:[
      {
          path: '', //default member path open create page
          redirectTo: '/member/search',
          pathMatch: 'full'
      },
      {
          path: 'create',
          component: MemberCreateComponent
          //canActivate: [AuthGuard] 
      },
      {
          path: 'search',
          component: MemberSearchComponent
          //canActivate: [AuthGuard] 
      },
       {
          path: 'edit',
          component: MemberEditComponent
          //canActivate: [AuthGuard] 
      },
     {
          path: 'database',
          component: MemberDataBaseComponent
          //canActivate: [AuthGuard] 
      },
    ]
  }
];


