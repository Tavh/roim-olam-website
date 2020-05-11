import { Component, OnInit } from "@angular/core"

@Component({
    selector: "app-main",
    templateUrl: "./main.component.html",
    styleUrls: ["./main.component.css"],
})
export class MainComponent implements OnInit {
    currentDevice: string

    constructor() {
        if (window.innerWidth > 800) {
            this.currentDevice = "desktop"
        } else {
            this.currentDevice = "mobile"
        }
    }

    ngOnInit() {}
}
