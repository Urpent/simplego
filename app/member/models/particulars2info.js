System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Particulars2Info;
    return {
        setters:[],
        execute: function() {
            Particulars2Info = (function () {
                function Particulars2Info(particulars2) {
                    this.member_number = particulars2.value.myMbrNo.input;
                    this.date_joined = particulars2.value.myDateJoined.input;
                    this.type = particulars2.value.myType.input;
                    this.home_address_1 = particulars2.value.myHome1.input;
                    this.home_address_2 = particulars2.value.myHome2.input;
                    this.home_address_3 = particulars2.value.myHome3.input;
                    this.country = particulars2.value.myCountry.input;
                    this.postal_code = particulars2.value.myPostalCode.input;
                    this.residential = particulars2.value.myResidential.input;
                    this.mobile = particulars2.value.myMobile.input;
                    this.e_amplified = particulars2.value.myEAmplified.input;
                    this.highest_qualifications = particulars2.value.myHighestQualifications.input;
                    this.other_qualifications = particulars2.value.myOtherQualifications.input;
                    this.name_of_company = particulars2.value.myNameofCompanyBusiness.input;
                    this.designation = particulars2.value.myDesignation.input;
                    this.office_1 = particulars2.value.myOffice1.input;
                    this.office_2 = particulars2.value.myOffice2.input;
                    this.office_3 = particulars2.value.myOffice3.input;
                    this.office_4 = particulars2.value.myOffice4.input;
                    this.postal_code_office = particulars2.value.myOfficePostalCode.input;
                    this.contact_number_office = particulars2.value.myOfficeContactNumber.input;
                    this.fax_number = particulars2.value.myOfficeFaxNumber.input;
                    this.details = particulars2.value.myDetails.input;
                    this.email_address = particulars2.value.myEmailAddress.input;
                    this.returned_mail_address = particulars2.value.myReturnedInvalidAddRefusedMail.input;
                    this.date_of_update = particulars2.value.myDateOfUpdate.input;
                    this.subscription = null;
                }
                return Particulars2Info;
            }());
            exports_1("Particulars2Info", Particulars2Info);
        }
    }
});
//# sourceMappingURL=particulars2info.js.map