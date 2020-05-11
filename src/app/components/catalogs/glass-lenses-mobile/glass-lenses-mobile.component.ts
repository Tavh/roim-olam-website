import { Component, OnInit } from "@angular/core"
import { ItemType } from "src/app/shared/data/enums/item-type"
import { CatalogService } from "src/app/shared/services/http-constructors/catalog.service"
import { CatalogItem } from "src/app/shared/data/catalog-item.model"

@Component({
    selector: "app-glass-lenses-mobile",
    templateUrl: "./glass-lenses-mobile.component.html",
    styleUrls: ["./glass-lenses-mobile.component.css"],
})
export class GlassLensesMobileComponent implements OnInit {
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
            ItemType.GLASS_LENSES,
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
