import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { UserDetails } from "../../data/user.model"
import { ServerConstants } from "../../constants/server-constants.model"

@Injectable({
    providedIn: "root",
})
export class AuthenticationService {
    constructor(private myHttpClient: HttpClient) {}

    public login(userDetails: UserDetails) {
        return this.myHttpClient.post<UserDetails>(
            `${ServerConstants.HOST_AND_PORT}/users/login`,
            userDetails,
            { observe: "response", withCredentials: true }
        )
    }

    public logout() {
        return this.myHttpClient.get<void>(
            `${ServerConstants.HOST_AND_PORT}/users/logout`,
            { observe: "response", withCredentials: true }
        )
    }
}
