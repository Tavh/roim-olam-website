import { Component, OnInit } from '@angular/core';
import { SessionStorageManager } from 'src/app/shared/session-storage-manager';
import { UserDetails } from 'src/app/shared/data/user.model';

@Component({
  selector: 'app-guest-buttons-desktop',
  templateUrl: './guest-buttons-desktop.component.html',
  styleUrls: ['./guest-buttons-desktop.component.css']
})
export class GuestButtonsDesktopComponent implements OnInit {

    private sessionUserDetails: UserDetails

    constructor() {
      SessionStorageManager.initializeSessionStorageCurrentUserData()
      this.sessionUserDetails = SessionStorageManager.getSessionStorageUserDetails()
    }
  
    ngOnInit() {
    }

}
