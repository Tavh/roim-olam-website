import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { ServerConstants } from "../../constants/server-constants.model"
import { CatalogItem } from "../../data/catalog-item.model"
import { UserDetails } from "../../data/user.model"
import { ItemType } from "../../data/enums/item-type"
import { SessionStorageManager } from "../../session-storage-manager"
import { CatalogItemsWrapper } from "../../data/catalog-items-wrapper"
import { CatalogItemDeleteStatusWrapper } from '../../data/catalog-item-delete-status-wrapper.model'

@Injectable({
    providedIn: "root",
})
export class CatalogService {
    sessionStorageUserDetails: UserDetails

    constructor(private myHttpClient: HttpClient) {
        this.sessionStorageUserDetails = SessionStorageManager.getSessionStorageUserDetails()
    }

    public getAllCatalogItems() {
        return this.myHttpClient.get<CatalogItem[]>(
            `${ServerConstants.HOST_AND_PORT}/catalog/get-all-catalog-items`,
            { observe: "response", withCredentials: true }
        )
    }

    public createCatalogItem(catalogItem: CatalogItem) {
        let headers = new HttpHeaders({
            "user-email": `${this.sessionStorageUserDetails.email}`,
        })

        return this.myHttpClient.post<number>(
            `${ServerConstants.HOST_AND_PORT}/catalog/create-catalog-item`,
            catalogItem,
            { headers: headers, observe: "response", withCredentials: true }
        )
    }

    public getCatalogItemsByType(itemType: ItemType, page?: number) {
        return this.myHttpClient.get<CatalogItemsWrapper>(
            `${ServerConstants.HOST_AND_PORT}/catalog/get-catalog-items-by-type?itemType=${itemType}&page=${page}`,
            { observe: "response", withCredentials: true }
        )
    }

    public getCatalogItemsByTypeAndBrand(itemType: ItemType, brand: string) {
        return this.myHttpClient.get<CatalogItem[]>(
            `${ServerConstants.HOST_AND_PORT}/catalog/get-catalog-items-by-brand-and-type?itemType=${itemType}&brand=${brand}`,
            { observe: "response", withCredentials: true }
        )
    }

    public deleteCatalogItem(id: number) {
        return this.myHttpClient.delete<CatalogItemDeleteStatusWrapper>(
            `${ServerConstants.HOST_AND_PORT}/catalog/delete-catalog-item/${id}`,
            { observe: "response", withCredentials: true }
        )
    }
}
