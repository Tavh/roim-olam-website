import { Injectable } from '@angular/core';
import { AuthenticationConstants } from './constants/authentication-constants.model';
import { UserDetails } from './data/user.model';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageManager {

  constructor() {}

  public static initializeSessionStorageCurrentUserData() {
    if (!this.getSessionStorageUserDetails()) {
      let disconnectedLoginStatusWrapper = new UserDetails()
      disconnectedLoginStatusWrapper.loginStatus = AuthenticationConstants.DISCONNECTED_LOGIN_STATUS
      SessionStorageManager.setSessionStorageUserDetails(disconnectedLoginStatusWrapper)
    }
  }

  public static setSessionStorageUserDetails(userDetails: UserDetails) {
    sessionStorage.setItem(AuthenticationConstants.CURRENT_USER_SESSION_KEY, JSON.stringify(userDetails));
  }

  public static getSessionStorageUserDetails() {
    return JSON.parse(sessionStorage.getItem(AuthenticationConstants.CURRENT_USER_SESSION_KEY))
  }
}
