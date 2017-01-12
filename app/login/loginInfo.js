System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LoginInfo;
    return {
        setters:[],
        execute: function() {
            LoginInfo = (function () {
                function LoginInfo(fg) {
                    this.username = "";
                    this.password = "";
                    this.username = fg.value.username.input;
                    this.password = fg.value.password.input;
                }
                return LoginInfo;
            }());
            exports_1("LoginInfo", LoginInfo);
        }
    }
});
//# sourceMappingURL=loginInfo.js.map