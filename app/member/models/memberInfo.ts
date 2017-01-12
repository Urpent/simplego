import {FormGroup} from '@angular/forms'; 
import {ParticularsInfo} from './particularsinfo'
import {Particulars2Info} from './particulars2info'
import {MailingListInfo} from './mailinglistinfo'

export class MemberInfo{
    public title: string;
    public name: string;
    public nric: string;
    public partner: string;
    public martial_status: string;
    public affiliation: string;
    public date_of_birth: string;
    public gender: string;
    public race: string;
    public member_number: string;
    public date_joined: string;
    public type: string;
    public home_address_1 : string;
    public home_address_2 : string;
    public home_address_3: string;
    public country : string;
    public postal_code: string;
    public residential : string;
    public mobile : string;
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
    public mailing_list : MailingListInfo;
    public subscription : string;
    public returned_mail_address : string;
    public date_of_update : string;

    constructor(p1: FormGroup, p2 :FormGroup, mailinglist: FormGroup){
        this.title = p1.value.mySal.input;
        this.name = p1.value.myName.input;
        this.partner = p1.value.myPartner.input;
        this.martial_status = p1.value.myStatus.input;
        this.affiliation = p1.value.myAffiliation.input; 
        this.nric = p1.value.myNRIC.input;
        this.date_of_birth = p1.value.myDOB.input;
        this.gender = p1.value.myGender.input;
        this.race = p1.value.myRace.input;


      this.member_number = p2.value.myMbrNo.input;
        this.date_joined = p2.value.myDateJoined.input;
        this.type = p2.value.myType.input;
        this.home_address_1 = p2.value.myHome1.input;
        this.home_address_2 = p2.value.myHome2.input;
        this.home_address_3 = p2.value.myHome3.input;
        this.country = p2.value.myCountry.input;
        this.postal_code = p2.value.myPostalCode.input;
        this.residential = p2.value.myResidential.input;
        this.mobile = p2.value.myMobile.input;
        this.e_amplified = p2.value.myEAmplified.input;
        this.highest_qualifications = p2.value.myHighestQualifications.input;
        this.other_qualifications = p2.value.myOtherQualifications.input;
        this.name_of_company = p2.value.myNameofCompanyBusiness.input;
        this.designation = p2.value.myDesignation.input;
        this.office_1 = p2.value.myOffice1.input;
        this.office_2 = p2.value.myOffice2.input;
        this.office_3 = p2.value.myOffice3.input;
        this.office_4 = p2.value.myOffice4.input;
        this.postal_code_office = p2.value.myOfficePostalCode.input;
        this.contact_number_office = p2.value.myOfficeContactNumber.input;
        this.fax_number = p2.value.myOfficeFaxNumber.input;
        this.details = p2.value.myDetails.input;
        this.email_address = p2.value.myEmailAddress.input;

        this.mailing_list = new MailingListInfo(mailinglist);

         this.returned_mail_address = p2.value.myReturnedInvalidAddRefusedMail.input;
        this.date_of_update = p2.value.myDateOfUpdate.input;
        this.subscription = null;

    }
}