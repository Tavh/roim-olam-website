import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest-buttons-mobile',
  templateUrl: './guest-buttons-mobile.component.html',
  styleUrls: ['./guest-buttons-mobile.component.css']
})
export class GuestButtonsMobileComponent implements OnInit {

    
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
        subMenu.style.visibility = "visible";
        subMenu.style.maxHeight = "200px";

        this.closeSubMenus(subMenu)
    }

    private hideSubMenu(subMenu) {
        subMenu.style.visibility = "hidden";
        subMenu.style.maxHeight = "0px";
    }

    closeSubMenus(excludedElement?) {
        let subMenus = Array.from(document.getElementsByClassName("sub_menu"))

        subMenus.forEach(subMenu => {
            if (subMenu != excludedElement) {
                this.hideSubMenu(subMenu)
            }
        });
    }

    closeMenu() {
        let menuToggler = document.getElementById("toggler")

        menuToggler.click()
    }

    ngOnInit() {
    }

}
