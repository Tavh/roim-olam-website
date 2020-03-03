import { Component, OnInit } from '@angular/core';
import { CatalogItem } from 'src/app/shared/data/catalog-item.model';
import { CatalogService } from 'src/app/shared/services/http-constructors/catalog.service';
import { ItemType } from 'src/app/shared/data/enums/item-type';

@Component({
  selector: 'app-contact-lenses-mobile',
  templateUrl: './contact-lenses-mobile.component.html',
  styleUrls: ['./contact-lenses-mobile.component.css']
})
export class ContactLensesMobileComponent implements OnInit {

    private photoAsEncodedBase64String: string
    public catalogItems: CatalogItem[]
    private brands: Set<String>
    public highlightedCatalogItem: CatalogItem
    public maxPages: number
    public currentPage: number
    public highlightedProductContainer: HTMLElement
    private displayNoDataFoundMessage: boolean

    constructor(private catalogService: CatalogService) {
        this.currentPage = 0
        this.getCatalogItemsByType(++this.currentPage)
        // Makes sure the highlighted product is hidden at page startup
        if (this.highlightedCatalogItem != null) {
            this.hideHighlightedProduct()
        }
    }
    
    ngOnInit() {
        this.highlightedProductContainer = document.getElementById("highlighted_product_info_container")
    }
    
    getCatalogItemsByType(page) {
        this.currentPage = page
        const observable =  this.catalogService.getCatalogItemsByType(ItemType.CONTACT_LENSES, page)
        this.catalogItems = null
        observable.subscribe(
            response => {
                this.maxPages = response.body.pages
                this.catalogItems = response.body.catalogItems
                // this.brands = this.findAllBrandsInCurrentCatalog()
        },
        err => {
          console.log(err)
        })
    }

    /* currently unused
    getCatalogItemsByTypeAndBrand(brand: string) {
        this.displayNoDataFoundMessage = false

        this.catalogItems = null
        const observable =  this.catalogService.getCatalogItemsByTypeAndBrand(ItemType.CONTACT-LENSES,
                                                                              brand)
    
        observable.subscribe(
            
            res => {
                if (res.status != 200) {
                    if (res.status == 209) {
                        this.displayNoDataFoundMessage = true
                    }
                    this.catalogItems = []
                } else {
                    this.catalogItems = res.body
                }
        },
        err => {
          console.log(err)
        })
    } */

    displayHighlightedProduct(catalogItem: CatalogItem) {
        if (this.highlightedProductContainer == null) {
            this.highlightedProductContainer = document.getElementById("highlighted_product_info_container")
        }
        this.highlightedCatalogItem = catalogItem
        this.highlightedProductContainer.style.visibility = "visible"
    }
    
    hideHighlightedProduct() {
        this.highlightedProductContainer.style.visibility = "hidden"
    }

    /* currently unused
    findAllBrandsInCurrentCatalog() {
        let brands = new Set<String>();

        this.catalogItems.forEach(c => {
            brands.add(c.brand);
        });

        return brands;
    } */
}
