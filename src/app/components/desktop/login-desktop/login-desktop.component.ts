import { Component, OnInit } from '@angular/core';
import { SessionStorageManager } from 'src/app/shared/session-storage-manager';
import { AuthenticationConstants } from 'src/app/shared/constants/authentication-constants.model';
import { UserDetails } from 'src/app/shared/data/user.model';
import { AuthenticationService } from 'src/app/shared/services/http-constructors/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-desktop',
  templateUrl: './login-desktop.component.html',
  styleUrls: ['./login-desktop.component.css']
})
export class LoginDesktopComponent implements OnInit {

    isDisplayError: boolean
    errorMessage: string
    email: string
    password: string
  
    private sessionUserDetails: UserDetails
  
    constructor(private myAuthenticationService: AuthenticationService, private router: Router) {
      this.sessionUserDetails = SessionStorageManager.getSessionStorageUserDetails()
      this.isDisplayError = false
    }
  
    login() {
      const observable = this.myAuthenticationService.login(new UserDetails(this.email, this.password))
  
      observable.subscribe(
        response => {
          if (response.status == AuthenticationConstants.SUCCESSFUL_LOGIN_STATUS) {
            let fetchedUserDetails = new UserDetails()
            fetchedUserDetails.email = response.body.email
            fetchedUserDetails.loginStatus = AuthenticationConstants.SUCCESSFUL_LOGIN_STATUS_VALUE
            fetchedUserDetails.password = null
            fetchedUserDetails.userType = response.body.userType
            SessionStorageManager.setSessionStorageUserDetails(fetchedUserDetails);
            this.router.navigateByUrl("/home")
            location.reload();
          }
  
          this.isDisplayError = true
          this.errorMessage = response.headers.get("errorMessage")
        },
        err => {
          this.isDisplayError = true
          this.errorMessage = err.headers.get("errorMessage")
          console.log(err)
        }
      )
  
    }
  
    ngOnInit() {}
}
