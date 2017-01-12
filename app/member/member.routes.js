System.register(['./member.component', './membercreate.component', './membersearch.component', './memberedit.component', "./databasetable/databasetable.component", '../login/auth.guard'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var member_component_1, membercreate_component_1, membersearch_component_1, memberedit_component_1, databasetable_component_1, auth_guard_1;
    var memberRoutes;
    return {
        setters:[
            function (member_component_1_1) {
                member_component_1 = member_component_1_1;
            },
            function (membercreate_component_1_1) {
                membercreate_component_1 = membercreate_component_1_1;
            },
            function (membersearch_component_1_1) {
                membersearch_component_1 = membersearch_component_1_1;
            },
            function (memberedit_component_1_1) {
                memberedit_component_1 = memberedit_component_1_1;
            },
            function (databasetable_component_1_1) {
                databasetable_component_1 = databasetable_component_1_1;
            },
            function (auth_guard_1_1) {
                auth_guard_1 = auth_guard_1_1;
            }],
        execute: function() {
            exports_1("memberRoutes", memberRoutes = [
                {
                    path: 'member',
                    component: member_component_1.MemberComponent,
                    canActivate: [auth_guard_1.AuthGuard],
                    children: [
                        {
                            path: '',
                            redirectTo: '/member/search',
                            pathMatch: 'full'
                        },
                        {
                            path: 'create',
                            component: membercreate_component_1.MemberCreateComponent
                        },
                        {
                            path: 'search',
                            component: membersearch_component_1.MemberSearchComponent
                        },
                        {
                            path: 'edit',
                            component: memberedit_component_1.MemberEditComponent
                        },
                        {
                            path: 'database',
                            component: databasetable_component_1.MemberDataBaseComponent
                        },
                    ]
                }
            ]);
        }
    }
});
//# sourceMappingURL=member.routes.js.map