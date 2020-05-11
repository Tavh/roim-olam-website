import { Component, OnInit } from "@angular/core"
import { DeviceDetectorService } from "ngx-device-detector"

@Component({
    selector: "app-main",
    providers: [DeviceDetectorService],
    templateUrl: "./main.component.html",
    styleUrls: ["./main.component.css"],
})
export class MainComponent implements OnInit {
    currentDevice: string

    constructor(private deviceService: DeviceDetectorService) {
        if (window.innerWidth > 800) {
            this.currentDevice = "desktop"
        } else {
            this.currentDevice = "mobile"
        }

        // if (deviceService.isDesktop()) {
        //     this.currentDevice = 'desktop'
        // }

        // if (deviceService.isMobile()) {
        //     this.currentDevice = 'mobile'
        // }
    }

    ngOnInit() {}
}
