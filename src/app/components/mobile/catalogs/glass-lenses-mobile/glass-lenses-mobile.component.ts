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
  
    constructor(private catalogService: CatalogService) {
      this.getCatalogItemsByType()
    }
  
    ngOnInit() {
    }
  
    getCatalogItemsByType() {
      const observable =  this.catalogService.getCatalogItemsByType(ItemType.GLASS_LENSES);
  
      observable.subscribe(
        res => {
          this.catalogItems = res.body
        },
        err => {
          console.log(err)
        })
    }
}
