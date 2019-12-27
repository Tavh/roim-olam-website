import { Component, OnInit } from '@angular/core';
import { UserDetails } from 'src/app/shared/data/user.model';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from 'src/app/shared/services/http-constructors/authentication.service';
import { SessionStorageManager } from 'src/app/shared/session-storage-manager';
import { AuthenticationConstants } from 'src/app/shared/constants/authentication-constants.model';

@Component({
  selector: 'app-logout-desktop',
  templateUrl: './logout-desktop.component.html',
  styleUrls: ['./logout-desktop.component.css']
})
export class LogoutDesktopComponent implements OnInit {

    sessionUserDetails: UserDetails

    constructor(private myAuthenticationService: AuthenticationService, private myCookieService: CookieService) {
      this.sessionUserDetails = SessionStorageManager.getSessionStorageUserDetails();
    }
  
    logout() {
      const observable = this.myAuthenticationService.logout()
      observable.subscribe(
        res => {
          alert(`Farewell, ${this.sessionUserDetails.email}!`)
          sessionStorage.removeItem(AuthenticationConstants.CURRENT_USER_SESSION_KEY)
          this.myCookieService.delete(AuthenticationConstants.SERVER_SESSION_COOKIE_NAME)
          let userDetails = new UserDetails()
          userDetails.loginStatus = AuthenticationConstants.DISCONNECTED_LOGIN_STATUS
          sessionStorage.setItem(AuthenticationConstants.CURRENT_USER_SESSION_KEY, JSON.stringify(userDetails))
          SessionStorageManager.setSessionStorageUserDetails(userDetails)
          location.reload()
        },
        err => { console.log(err) }
      )
    }
  
  ngOnInit() {
  }

}
