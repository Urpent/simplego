import {FormGroup} from '@angular/forms'; 


export class ParticularsInfo{
    public title: string;
    public name: string;
    public nric: string;
    public partner: string;
    public martial_status: string;
    public affiliation: string;   
    public date_of_birth: string;
    public gender: string;
    public race: string;
 
    constructor(particulars :FormGroup){
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
}