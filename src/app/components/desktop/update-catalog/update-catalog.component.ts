import { Component, OnInit } from '@angular/core';
import { CatalogService } from 'src/app/shared/services/http-constructors/catalog.service';
import { CatalogItem } from 'src/app/shared/data/catalog-item.model';
import { GeneralConstants } from 'src/app/shared/constants/general-constants.model';
import { ServerConstants } from 'src/app/shared/constants/server-constants.model';

@Component({
  selector: 'app-update-catalog',
  templateUrl: './update-catalog.component.html',
  styleUrls: ['./update-catalog.component.css']
})
export class UpdateCatalogComponent implements OnInit {
    title: string
    brand: string
    price: number
    description: string
    itemType: string
    photo: File
    photoBase64String: string
    errorMessage: string
    isDisplayError: boolean
    isDisplayUploadSuccessful: boolean
  
    constructor(private catalogService: CatalogService) {
      this.isDisplayUploadSuccessful = false
    }
  
    public createCatalogItem() {
      this.isDisplayError = false

      let photoId = this.generatePhotoId()
      var catalogItem = new CatalogItem(this.title, 
                                        this.brand,
                                        this.price, 
                                        this.description, 
                                        this.itemType,
                                        this.photoBase64String)
      
      const createItemObservable =  this.catalogService.createCatalogItem(catalogItem);
      createItemObservable.subscribe(
        res => {
          if (res.status != 201) {
            this.errorMessage = res.headers.get(ServerConstants.ERROR_MESSAGE_HEADER)
            this.isDisplayError = true
            return
          } else if (this.isDisplayError != true) {
            this.isDisplayUploadSuccessful = true
          }
      },
      err=> {
          console.log(err)
          this.errorMessage = err.headers.get(ServerConstants.ERROR_MESSAGE_HEADER)
          this.isDisplayError = true
        }
      )
    }

    private isFileFormatValid() {
      let photoName = this.photo.name
      if (!photoName.includes(GeneralConstants.JPG_POSTFIX) && !photoName.includes(GeneralConstants.JPEG_POSTFIX)) {
        this.errorMessage = "Please use only JPG photos"
        this.isDisplayError = true
        return
      }
    }

    private isFileSizeValid() {
      let photoSize = this.photo.size
      if (photoSize > GeneralConstants.MAX_PHOTO_SIZE) {
        this.errorMessage = "File has exceeded max size of: " + GeneralConstants.MAX_PHOTO_SIZE
        this.isDisplayError = true
        return 
      }
    }

    getFile(event) {
      this.photo = event.target.files[0];
      
      this.isFileFormatValid()
      if (!this.isFileFormatValid) {
        return
      }

      this.isFileSizeValid()
      if (!this.isFileSizeValid) {
        return
      }
      
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(this.photo);
  }
 
  _handleReaderLoaded(readerEvt) {
      var binaryString = readerEvt.target.result;
      this.photoBase64String = btoa(binaryString);  // Converting binary string data.
 }

    private generatePhotoId() {
      return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

    ngOnInit() {
    }

}
