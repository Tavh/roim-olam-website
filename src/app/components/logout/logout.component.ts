import { Component, OnInit } from "@angular/core"
import { UserDetails } from "src/app/shared/data/user.model"
import { CookieService } from "ngx-cookie-service"
import { AuthenticationService } from "src/app/shared/services/http-constructors/authentication.service"
import { SessionStorageManager } from "src/app/shared/session-storage-manager"
import { AuthenticationConstants } from "src/app/shared/constants/authentication-constants.model"
import { Router } from '@angular/router'

@Component({
    selector: "app-logout",
    templateUrl: "./logout.component.html",
    styleUrls: ["./logout.component.css"],
})
export class LogoutComponent implements OnInit {
    sessionUserDetails: UserDetails

    constructor(
        private myAuthenticationService: AuthenticationService,
        private myCookieService: CookieService,
        private router: Router
    ) {
        this.sessionUserDetails = SessionStorageManager.getSessionStorageUserDetails()
    }

    logout() {
        const observable = this.myAuthenticationService.logout()
        observable.subscribe(
            (res) => {
                alert(`${this.sessionUserDetails.email} מנתק את `)
                sessionStorage.removeItem(
                    AuthenticationConstants.CURRENT_USER_SESSION_KEY
                )
                this.myCookieService.delete(
                    AuthenticationConstants.SERVER_SESSION_COOKIE_NAME
                )
                let userDetails = new UserDetails()
                userDetails.loginStatus =
                    AuthenticationConstants.DISCONNECTED_LOGIN_STATUS
                sessionStorage.setItem(
                    AuthenticationConstants.CURRENT_USER_SESSION_KEY,
                    JSON.stringify(userDetails)
                )
                SessionStorageManager.setSessionStorageUserDetails(userDetails)
                this.router.navigateByUrl('/reload', { skipLocationChange: true }).then(() => {
                    this.router.navigate(['/login']);
                }); 
                location.reload()
            },
            (err) => {
                console.log(err)
            }
        )
    }

    ngOnInit() {}
}
