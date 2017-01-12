System.register(['@angular/router', './login/login.routes', './member/member.routes'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, login_routes_1, member_routes_1;
    var routes, appRouterProviders;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (login_routes_1_1) {
                login_routes_1 = login_routes_1_1;
            },
            function (member_routes_1_1) {
                member_routes_1 = member_routes_1_1;
            }],
        execute: function() {
            exports_1("routes", routes = [
                { path: '', redirectTo: '/login', pathMatch: 'full' }
            ].concat(login_routes_1.loginRoutes, member_routes_1.memberRoutes));
            exports_1("appRouterProviders", appRouterProviders = [
                router_1.provideRouter(routes),
                login_routes_1.authProviders,
            ]);
        }
    }
});
//# sourceMappingURL=app.routes.js.map