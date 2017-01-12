import {FormGroup} from '@angular/forms'; 


export class Particulars2Info{
    public member_number: string;
    public date_joined: string;
    public type: string;
    public home_address_1 : string;
    public home_address_2 : string;
    public home_address_3: string;
    public country : string;
    public postal_code: string;
    public residential : string;
    public mobile :  string;
    public e_amplified : string;
    public highest_qualifications : string;
    public other_qualifications : string;
    public name_of_company  : string;
    public designation : string;
    public office_1 : string;
    public office_2 : string;
    public office_3 : string;
    public office_4 : string;
    public postal_code_office : string;
    public contact_number_office : string;
    public fax_number : string;
    public details : string;
    public email_address : string;
    public subscription : string;
    public returned_mail_address : string;
    public date_of_update : string;

    constructor(particulars2 :FormGroup){

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
}