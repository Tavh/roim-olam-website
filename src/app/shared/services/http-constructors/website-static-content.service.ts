import { Injectable } from "@angular/core"
import { WebsitePage } from "../../data/enums/website-page"
import { TextWrapper } from "../../data/text-wrapper"
import { ServerConstants } from "../../constants/server-constants.model"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { UserDetails } from "../../data/user.model"
import { SessionStorageManager } from "../../session-storage-manager"

@Injectable({
    providedIn: "root",
})
export class WebsiteStaticContentService {
    sessionStorageUserDetails: UserDetails

    constructor(private myHttpClient: HttpClient) {
        this.sessionStorageUserDetails = SessionStorageManager.getSessionStorageUserDetails()
    }
    public writeStaticContent(
        websitePage: WebsitePage,
        websitePagePart: string,
        text: TextWrapper
    ) {
        let headers = new HttpHeaders({
            "user-email": `${this.sessionStorageUserDetails.email}`,
        })

        return this.myHttpClient.put<TextWrapper>(
            `${ServerConstants.HOST_AND_PORT}/website-static-content/write/${websitePage}/${websitePagePart}`,
            text,
            { headers: headers, observe: "response", withCredentials: true }
        )
    }

    public readStaticContent(
        websitePage: WebsitePage,
        websitePagePart: string
    ) {
        return this.myHttpClient.get<TextWrapper>(
            `${ServerConstants.HOST_AND_PORT}/website-static-content/read/${websitePage}/${websitePagePart}`,
            { observe: "response", withCredentials: true }
        )
    }
}
