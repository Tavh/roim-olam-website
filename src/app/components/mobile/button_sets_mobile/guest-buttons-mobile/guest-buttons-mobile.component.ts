import { Component, OnInit } from '@angular/core';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';

@Component({
  selector: 'app-guest-buttons-mobile',
  templateUrl: './guest-buttons-mobile.component.html',
  styleUrls: ['./guest-buttons-mobile.component.css']
})
export class GuestButtonsMobileComponent implements OnInit {

    private isViewGlassesMenu: boolean;
    private isViewLensesMenu: boolean;

    constructor() { }

    changeGlassesMenuVisibility() {
        if (this.isViewGlassesMenu == true) {
            this.isViewGlassesMenu = false
        } else {
            this.isViewLensesMenu = false
            this.isViewGlassesMenu = true
        }
    }

    changeLensesMenuVisibility() {
        if (this.isViewLensesMenu == true) {
            this.isViewLensesMenu = false
        } else {
            this.isViewGlassesMenu = false
            this.isViewLensesMenu = true
        }
    }

    closeMenu() {
        let menuToggler = document.getElementById("toggler")

        this.isViewGlassesMenu = false
        this.isViewLensesMenu = false

        menuToggler.click()
    }

    closeSubMenus() {
        this.isViewGlassesMenu = false
        this.isViewLensesMenu = false
    }

    ngOnInit() {
    }

}
