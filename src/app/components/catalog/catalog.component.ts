import { Component, OnInit } from "@angular/core"
import { CatalogItem } from "src/app/shared/data/catalog-item.model"
import { CatalogService } from "src/app/shared/services/http-constructors/catalog.service"
import { SessionStorageManager } from 'src/app/shared/session-storage-manager'
import { UserDetails } from 'src/app/shared/data/user.model'
import { ServerConstants } from 'src/app/shared/constants/server-constants.model'
import { GeneralConstants } from 'src/app/shared/constants/general-constants.model'

@Component({
    selector: "app-catalog",
    templateUrl: "./catalog.component.html",
    styleUrls: ["./catalog.component.css"]
})
export class CatalogComponent implements OnInit {
    
    private readonly HIGHLIGHTED_PRODUCT_CONTAINER_ID = "highlighted_product_info_container"
    private readonly ITEM_DELETE_PROMPT_CONTAINER_ID = "item_delete_prompt_container"

    public catalogItems: CatalogItem[]
    public highlightedCatalogItem: CatalogItem
    public maxPages: number
    public currentPage: number
    public highlightedProductContainer: HTMLElement
    public itemDeletePromptContainer: HTMLElement
    public sessionUserDetails: UserDetails
    public currentItemNominatedForDeletion: CatalogItem
    public isDisplayLoad: boolean

    ngOnInit() {
        this.itemDeletePromptContainer = document.getElementById(this.ITEM_DELETE_PROMPT_CONTAINER_ID)
        this.highlightedProductContainer = document.getElementById(this.HIGHLIGHTED_PRODUCT_CONTAINER_ID)
    }

    constructor(private catalogService: CatalogService) {
        this.sessionUserDetails = SessionStorageManager.getSessionStorageUserDetails()
        this.currentPage = 0
        this.getCatalogItemsByType(++this.currentPage)
        // Makes sure the highlighted product is hidden at page startup
        if (this.highlightedCatalogItem != null) {
            this.hideHighlightedProduct()
        }
        // Makes sure the item delete prompt is hidden at page startup
        if (this.itemDeletePromptContainer != null) {
            this.hideDeleteItemPrompt()
        }
    }

    getCatalogItemsByType(page: number) {
        this.currentPage = page
        this.isDisplayLoad = true
        const observable = this.catalogService.getCatalogItemsByType(
            SessionStorageManager.getSessionStorageItem(GeneralConstants.CURRENT_CATALOG_TYPE_KEY),
            page
        )
        this.catalogItems = null
        observable.subscribe(
            (response) => {
                if (response.status == ServerConstants.HTTP_NO_DATA_FOUND_sTATUS) {
                    this.isDisplayLoad = false
                }
                this.maxPages = response.body.pages
                this.catalogItems = response.body.catalogItems
            },
            (err) => {
                this.isDisplayLoad = false
                console.log(`Server error: ${err}`)
            }
        )
    }

    deleteCatalogItem(id: number) {
        const observable = this.catalogService.deleteCatalogItem(id)
        observable.subscribe(
            (response) => {
                if (response.status == ServerConstants.HTTP_DELETE_SUCCESS_STATUS) {
                    alert(`Removed item '${this.currentItemNominatedForDeletion.title}'!`)
                    this.hideDeleteItemPrompt()
                    location.reload()
                }
            },
            (err) => {
                alert(`Removal of item '${this.currentItemNominatedForDeletion.title}' failed!`)
                console.log(err)
            }
        )
    }

    prepareDeleteItemPrompt(catalogItem: CatalogItem) {
        if (this.itemDeletePromptContainer == null) {
            this.itemDeletePromptContainer = document.getElementById(this.ITEM_DELETE_PROMPT_CONTAINER_ID)
        }
        this.currentItemNominatedForDeletion = catalogItem
        this.itemDeletePromptContainer.style.visibility = "visible"
    }

    hideDeleteItemPrompt() {
        if (this.itemDeletePromptContainer == null) {
            this.itemDeletePromptContainer = document.getElementById(this.ITEM_DELETE_PROMPT_CONTAINER_ID)
        }
        this.currentItemNominatedForDeletion = null
        this.itemDeletePromptContainer.style.visibility = "hidden"
    }

    displayHighlightedProduct(catalogItem: CatalogItem) {
        if (this.highlightedProductContainer == null) {
            this.highlightedProductContainer = document.getElementById(this.HIGHLIGHTED_PRODUCT_CONTAINER_ID)
        }
        this.highlightedCatalogItem = catalogItem
        this.highlightedProductContainer.style.visibility = "visible"
    }

    hideHighlightedProduct() {
        this.highlightedProductContainer.style.visibility = "hidden"
    }
}
