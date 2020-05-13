import { Component, OnInit } from "@angular/core"
import { ItemType } from 'src/app/shared/data/enums/item-type'
import { UserDetails } from 'src/app/shared/data/user.model'
import { Router } from '@angular/router'
import { SessionStorageManager } from 'src/app/shared/session-storage-manager'
import { GeneralConstants } from 'src/app/shared/constants/general-constants.model'

@Component({
    selector: "app-buttons-mobile",
    templateUrl: "./buttons-mobile.component.html",
    styleUrls: ["./buttons-mobile.component.css"],
})
export class ButtonsMobileComponent implements OnInit {
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

    changeSubMenuState(subMenuId) {
        let subMenu = document.getElementById(subMenuId)
        let subMenuVisibility = subMenu.style.visibility

        switch (subMenuVisibility) {
            case "hidden":
                this.viewSubMenu(subMenu)
                break

            case "visible":
                this.hideSubMenu(subMenu)
                break

            default:
                this.viewSubMenu(subMenu)
        }
    }

    private viewSubMenu(subMenu) {
        subMenu.style.opacity = "100%"
        subMenu.style.visibility = "visible"
        subMenu.style.maxHeight = "200px"
        subMenu.style.transform = "scaleY(1)"

        this.closeSubMenus(subMenu)
    }

    private hideSubMenu(subMenu) {
        subMenu.style.opacity = "0%"
        subMenu.style.visibility = "hidden"
        subMenu.style.maxHeight = "0px"
        subMenu.style.transform = "scaleY(0)"
    }

    closeSubMenus(excludedElement?) {
        let subMenus = Array.from(document.getElementsByClassName("sub_menu"))

        subMenus.forEach((subMenu) => {
            if (subMenu != excludedElement) {
                this.hideSubMenu(subMenu)
            }
        })
    }

    closeMenu() {
        let menuToggler = document.getElementById("toggler")
        let transparentScreenMask = document.getElementById(
            "transparent_screen_mask"
        )

        transparentScreenMask.style.visibility = "hidden"
        menuToggler.click()
    }

    ngOnInit() {}
}
