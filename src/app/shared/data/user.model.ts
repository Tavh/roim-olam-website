import { ThrowStmt } from '@angular/compiler';

export class UserDetails {
   
    email?:string;

    // Including password in the object is only required when logging in!
    password?:string;

    id?:number;
    loginStatus?:string;
    userType?:string

    constructor (email?:string, password?:string, id?:number, loginStatus?:string, userType?:string) {
        this.email = email;
        this.password = password;
        this.id = id;
        this.loginStatus = loginStatus;
        this.userType = userType
    }
}