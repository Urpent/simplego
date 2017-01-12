System.register(['./auth.guard', './auth.service', './login.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var auth_guard_1, auth_service_1, login_component_1;
    var loginRoutes, authProviders;
    return {
        setters:[
            function (auth_guard_1_1) {
                auth_guard_1 = auth_guard_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            }],
        execute: function() {
            exports_1("loginRoutes", loginRoutes = [
                { path: 'login', component: login_component_1.LoginComponent }
            ]);
            exports_1("authProviders", authProviders = [auth_guard_1.AuthGuard, auth_service_1.AuthService]);
        }
    }
});
//# sourceMappingURL=login.routes.js.map