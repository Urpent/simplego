System.register(['./app.component', '@angular/platform-browser-dynamic', '@angular/forms', '@angular/http', './app.routes', 'angular2-localstorage/LocalStorageEmitter'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var app_component_1, platform_browser_dynamic_1, forms_1, http_1, app_routes_1, LocalStorageEmitter_1;
    var appPromise;
    return {
        setters:[
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            },
            function (LocalStorageEmitter_1_1) {
                LocalStorageEmitter_1 = LocalStorageEmitter_1_1;
            }],
        execute: function() {
            appPromise = platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
                forms_1.disableDeprecatedForms(),
                forms_1.provideForms(),
                app_routes_1.appRouterProviders,
                http_1.HTTP_PROVIDERS,
                LocalStorageEmitter_1.LocalStorageService
            ]);
            LocalStorageEmitter_1.LocalStorageSubscriber(appPromise);
        }
    }
});
//# sourceMappingURL=main.js.map