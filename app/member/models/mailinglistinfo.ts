import {FormGroup} from '@angular/forms'; 


export class MailingListInfo{
    public title: string;
    public name: string;
    public remarks: string;
    public member_number: string;
    public home_1: string;
    public home_2: string;   
    public home_3: string;
    public country: string;
    public postal_code: string;
 
    constructor(mailinglist :FormGroup){
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
}
