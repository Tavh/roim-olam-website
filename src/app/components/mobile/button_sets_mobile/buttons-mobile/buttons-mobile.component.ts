import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-buttons-mobile',
  templateUrl: './buttons-mobile.component.html',
  styleUrls: ['./buttons-mobile.component.css']
})
export class ButtonsMobileComponent implements OnInit {

    
    constructor() { }

    changeSubMenuState(subMenuId) {
        let subMenu = document.getElementById(subMenuId)
        let subMenuVisibility = subMenu.style.visibility

        switch (subMenuVisibility) {
            case "hidden": this.viewSubMenu(subMenu)
            break

            case "visible": this.hideSubMenu(subMenu)
            break

            default: this.viewSubMenu(subMenu)
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

        subMenus.forEach(subMenu => {
            if (subMenu != excludedElement) {
                this.hideSubMenu(subMenu)
            }
        })
    }

    closeMenu() {
        let menuToggler = document.getElementById("toggler")
        let transparentScreenMask = document.getElementById("transparent_screen_mask")

        transparentScreenMask.style.visibility = "hidden";
        menuToggler.click()
    }

    ngOnInit() {
    }

}
