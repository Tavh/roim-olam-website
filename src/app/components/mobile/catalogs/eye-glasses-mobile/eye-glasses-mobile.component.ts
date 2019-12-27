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
  
    constructor(private catalogService: CatalogService) {
      this.getCatalogItemsByType()
    }
  
    ngOnInit() {
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

}
