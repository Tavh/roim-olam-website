import { Component, OnInit } from "@angular/core"
import { SessionStorageManager } from "src/app/shared/session-storage-manager"
import { UserDetails } from "src/app/shared/data/user.model"
import { ItemType } from 'src/app/shared/data/enums/item-type'
import { Router } from '@angular/router'
import { AuthenticationConstants } from 'src/app/shared/constants/authentication-constants.model'
import { GeneralConstants } from 'src/app/shared/constants/general-constants.model'

@Component({
    selector: "app-buttons-desktop",
    templateUrl: "./buttons-desktop.component.html",
    styleUrls: ["./buttons-desktop.component.css"],
})
export class ButtonsDesktopComponent implements OnInit {
    public sessionUserDetails: UserDetails
    public sunGlassesType = ItemType.SUN_GLASSES
    public eyeGlassesType = ItemType.EYE_GLASSES
    public contactLensesType = ItemType.CONTACT_LENSES
    public glassLensesType = ItemType.GLASS_LENSES

    constructor(private router: Router) {
        SessionStorageManager.initializeSessionStorageCurrentUserData()
        this.sessionUserDetails = SessionStorageManager.getSessionStorageUserDetails()
    }

    public forwardToCatalog(itemType: ItemType) {
        SessionStorageManager.setSessionStorageItem(GeneralConstants.CURRENT_CATALOG_TYPE_KEY, itemType)

        this.router.navigateByUrl('/reload', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/catalog']);
        }); 
    } 

    ngOnInit() {}
}
