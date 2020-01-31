import { Component, OnInit } from '@angular/core';
import { ItemType } from 'src/app/shared/data/enums/item-type';
import { CatalogService } from 'src/app/shared/services/http-constructors/catalog.service';
import { CatalogItem } from 'src/app/shared/data/catalog-item.model';

@Component({
  selector: 'app-glass-lenses-mobile',
  templateUrl: './glass-lenses-mobile.component.html',
  styleUrls: ['./glass-lenses-mobile.component.css']
})
export class GlassLensesMobileComponent implements OnInit {
    private photoAsEncodedBase64String: string
    private catalogItems: CatalogItem[]
    private brands: Set<String>
    private highlightedCatalogItem: CatalogItem
    
    private highlightedProductContainer: HTMLElement

    private displayNoDataFoundMessage: boolean

    constructor(private catalogService: CatalogService) {
        this.getCatalogItemsByType()
        // Makes sure the highlighted product is hidden at page startup
        if (this.highlightedCatalogItem != null) {
            this.hideHighlightedProduct()
        }
    }
    
    ngOnInit() {
        this.highlightedProductContainer = document.getElementById("highlighted_product_info_container")
    }
    
    getCatalogItemsByType() {
        const observable =  this.catalogService.getCatalogItemsByType(ItemType.GLASS_LENSES)
        
        observable.subscribe(
            response => {
                this.catalogItems = response.body.catalogItems
                this.brands = this.findAllBrandsInCurrentCatalog()
        },
        err => {
          console.log(err)
        })
    }

    getCatalogItemsByTypeAndBrand(brand: string) {
        this.displayNoDataFoundMessage = false

        const observable =  this.catalogService.getCatalogItemsByTypeAndBrand(ItemType.GLASS_LENSES,
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
    }

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

    findAllBrandsInCurrentCatalog() {
        let brands = new Set<String>();

        this.catalogItems.forEach(c => {
            brands.add(c.brand);
        });

        return brands;
    }
}
