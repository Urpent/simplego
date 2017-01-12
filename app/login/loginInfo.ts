import {FormGroup}    from '@angular/forms'; //New form

export class LoginInfo{
    public username: string = "";
    public password: string = "";

    //constructor();
    
    constructor(fg :FormGroup){ //make parameter optional to create overloading
            this.username = fg.value.username.input;
            this.password = fg.value.password.input;
    }
}



