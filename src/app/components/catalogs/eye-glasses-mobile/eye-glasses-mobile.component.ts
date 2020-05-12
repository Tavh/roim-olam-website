import { Component, OnInit, Input } from "@angular/core"
import { CatalogItem } from "src/app/shared/data/catalog-item.model"
import { CatalogService } from "src/app/shared/services/http-constructors/catalog.service"
import { SessionStorageManager } from 'src/app/shared/session-storage-manager'
import { AuthenticationConstants } from 'src/app/shared/constants/authentication-constants.model'

@Component({
    selector: "app-eye-glasses-mobile",
    templateUrl: "./eye-glasses-mobile.component.html",
    styleUrls: ["./eye-glasses-mobile.component.css"]
})
export class EyeGlassesMobileComponent implements OnInit {
    
    public catalogItems: CatalogItem[]
    public highlightedCatalogItem: CatalogItem
    public maxPages: number
    public currentPage: number
    public highlightedProductContainer: HTMLElement

    constructor(private catalogService: CatalogService) {
        this.currentPage = 0
        this.getCatalogItemsByType(++this.currentPage)
        // Makes sure the highlighted product is hidden at page startup
        if (this.highlightedCatalogItem != null) {
            this.hideHighlightedProduct()
        }
    }

    ngOnInit() {
        this.highlightedProductContainer = document.getElementById(
            "highlighted_product_info_container"
        )
    }

    getCatalogItemsByType(page) {
        this.currentPage = page
        const observable = this.catalogService.getCatalogItemsByType(
            SessionStorageManager.getSessionStorageItem(AuthenticationConstants.CURRENT_CATALOG_TYPE_KEY),
            page
        )
        this.catalogItems = null
        observable.subscribe(
            (response) => {
                this.maxPages = response.body.pages
                this.catalogItems = response.body.catalogItems
            },
            (err) => {
                console.log(err)
            }
        )
    }

    displayHighlightedProduct(catalogItem: CatalogItem) {
        if (this.highlightedProductContainer == null) {
            this.highlightedProductContainer = document.getElementById(
                "highlighted_product_info_container"
            )
        }
        this.highlightedCatalogItem = catalogItem
        this.highlightedProductContainer.style.visibility = "visible"
    }

    hideHighlightedProduct() {
        this.highlightedProductContainer.style.visibility = "hidden"
    }
}
