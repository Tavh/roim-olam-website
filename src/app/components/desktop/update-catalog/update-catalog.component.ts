import { Component, OnInit } from '@angular/core';
import { CatalogService } from 'src/app/shared/services/http-constructors/catalog.service';
import { CatalogItem } from 'src/app/shared/data/catalog-item.model';

@Component({
  selector: 'app-update-catalog',
  templateUrl: './update-catalog.component.html',
  styleUrls: ['./update-catalog.component.css']
})
export class UpdateCatalogComponent implements OnInit {
    title: string
    price: number
    amountInStock: number
    description: string
    itemType: string
    photo: File
    errorMessage: string
    isDisplayError: boolean
    isDisplayUploadSuccessful: boolean
  
    constructor(private catalogService: CatalogService) {
      this.isDisplayUploadSuccessful = false
    }
  
    public handlePhotoUpload(photos: FileList) {
      this.photo = photos.item(0);
    }
  
    public createCatalogItem() {
      this.isDisplayError = false
  
      var catalogItem = new CatalogItem(this.title, this.price, this.amountInStock, this.description, this.itemType, this.photo.name)
      
      const uploadPhotoObservable =  this.catalogService.uploadCatalogItemPhoto(this.photo);
      uploadPhotoObservable.subscribe(
        res => {
          if (res.body.status != "OK" && res.status != 201) {
            this.errorMessage = res.headers.get("errorMessage")
            this.isDisplayError = true
          }
      },
      err=> {
          console.log(err)
          this.errorMessage = err.headers.get("errorMessage")
          this.isDisplayError = true
        }
      )
  
      const createItemObservable =  this.catalogService.createCatalogItem(catalogItem);
      createItemObservable.subscribe(
        res => {
          if (res.status != 201) {
            this.errorMessage = res.headers.get("errorMessage")
            this.isDisplayError = true
            return
          } else if (this.isDisplayError != true) {
            this.isDisplayUploadSuccessful = true
          }
      },
      err=> {
          console.log(err)
          this.errorMessage = err.headers.get("errorMessage")
          this.isDisplayError = true
        }
      )
  
    }
    
    ngOnInit() {
    }

}
