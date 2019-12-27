import { Component, OnInit } from '@angular/core';
import { SessionStorageManager } from 'src/app/shared/session-storage-manager';
import { UserDetails } from 'src/app/shared/data/user.model';

@Component({
  selector: 'app-buttons-desktop',
  templateUrl: './buttons-desktop.component.html',
  styleUrls: ['./buttons-desktop.component.css']
})
export class ButtonsDesktopComponent implements OnInit {

    private sessionUserDetails: UserDetails

    constructor() {
      SessionStorageManager.initializeSessionStorageCurrentUserData()
      this.sessionUserDetails = SessionStorageManager.getSessionStorageUserDetails()
    }
  
    ngOnInit() {
    }

}
