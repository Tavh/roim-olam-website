import { Component, OnInit } from '@angular/core';
import { CatalogItem } from 'src/app/shared/data/catalog-item.model';
import { CatalogService } from 'src/app/shared/services/http-constructors/catalog.service';
import { ItemType } from 'src/app/shared/data/enums/item-type';

@Component({
  selector: 'app-eye-glasses-mobile',
  templateUrl: './eye-glasses-mobile.component.html',
  styleUrls: ['./eye-glasses-mobile.component.css']
})
export class EyeGlassesMobileComponent implements OnInit {

    private photoAsEncodedBase64String: string
    private catalogItems: CatalogItem[]
    private highlightedCatalogItem: CatalogItem

    private highlightedProductContainer: HTMLElement
    
    constructor(private catalogService: CatalogService) {
      this.getCatalogItemsByType()
    }
  
    ngOnInit() {
        this.highlightedProductContainer = document.getElementById("highlighted_product_info_container")
    }
  
    getCatalogItemsByType() {
      const observable =  this.catalogService.getCatalogItemsByType(ItemType.EYE_GLASSES)
  
      observable.subscribe(
        res => {
          this.catalogItems = res.body
          this.catalogItems.forEach(element => {
              console.log(element)
          });
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

}
