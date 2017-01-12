System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MailingListInfo;
    return {
        setters:[],
        execute: function() {
            MailingListInfo = (function () {
                function MailingListInfo(mailinglist) {
                    this.title = mailinglist.value.myTitle.input;
                    this.name = mailinglist.value.myName.input;
                    this.remarks = mailinglist.value.myRemarks.input;
                    this.member_number = mailinglist.value.myMemberNum.input;
                    this.home_1 = mailinglist.value.myHome1.input;
                    this.home_2 = mailinglist.value.myHome2.input;
                    this.home_3 = mailinglist.value.myHome3.input;
                    this.country = mailinglist.value.myCountry.input;
                    this.postal_code = mailinglist.value.myPostalCode.input;
                }
                return MailingListInfo;
            }());
            exports_1("MailingListInfo", MailingListInfo);
        }
    }
});
//# sourceMappingURL=mailinglistinfo.js.map