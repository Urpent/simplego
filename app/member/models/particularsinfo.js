System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ParticularsInfo;
    return {
        setters:[],
        execute: function() {
            ParticularsInfo = (function () {
                function ParticularsInfo(particulars) {
                    this.title = particulars.value.mySal.input;
                    this.name = particulars.value.myName.input;
                    this.nric = particulars.value.myNRIC.input;
                    this.partner = particulars.value.myPartner.input;
                    this.martial_status = particulars.value.myStatus.input;
                    this.affiliation = particulars.value.myAffiliation.input;
                    this.date_of_birth = particulars.value.myDOB.input;
                    this.gender = particulars.value.myGender.input;
                    this.race = particulars.value.myRace.input;
                }
                return ParticularsInfo;
            }());
            exports_1("ParticularsInfo", ParticularsInfo);
        }
    }
});
//# sourceMappingURL=particularsinfo.js.map