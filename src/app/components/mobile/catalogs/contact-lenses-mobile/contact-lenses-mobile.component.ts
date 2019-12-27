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
    private catalogItems: CatalogItem[]
  
    constructor(private catalogService: CatalogService) {
      this.getCatalogItemsByType()
    }
  
    ngOnInit() {
    }
  
    getCatalogItemsByType() {
      const observable =  this.catalogService.getCatalogItemsByType(ItemType.CONTACT_LENSES);
  
      observable.subscribe(
        res => {
          this.catalogItems = res.body
        },
        err => {
          console.log(err)
        })
    }


}
