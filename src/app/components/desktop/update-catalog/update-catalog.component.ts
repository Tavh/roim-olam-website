import { Component, OnInit } from "@angular/core"
import { CatalogService } from "src/app/shared/services/http-constructors/catalog.service"
import { CatalogItem } from "src/app/shared/data/catalog-item.model"
import { GeneralConstants } from "src/app/shared/constants/general-constants.model"
import { ServerConstants } from "src/app/shared/constants/server-constants.model"
import { CatalogItemPhoto } from "src/app/shared/data/catalog-item-photo"

@Component({
    selector: "app-update-catalog",
    templateUrl: "./update-catalog.component.html",
    styleUrls: ["./update-catalog.component.css"],
})
export class UpdateCatalogComponent implements OnInit {
    title: string
    brand: string
    price: number
    description: string
    itemType: string
    photo: File
    photoBase64: string
    errorMessage: string
    isDisplayError: boolean
    displayedErrorType: string
    isDisplayUploadSuccessful: boolean

    constructor(private catalogService: CatalogService) {
        this.isDisplayUploadSuccessful = false
    }

    public createCatalogItem() {
        this.turnOffError()

        var catalogItem = new CatalogItem(
            this.title,
            this.brand,
            this.price,
            this.description,
            this.itemType,
            new CatalogItemPhoto(this.photoBase64)
        )

        console.log(catalogItem)
        const createItemObservable = this.catalogService.createCatalogItem(catalogItem)
        createItemObservable.subscribe(
            (res) => {
                if (res.status != ServerConstants.HTTP_POST_SUCCESS_STATUS) {
                    let errorMessage = res.headers.get(ServerConstants.ERROR_MESSAGE_HEADER)
                    this.displayError(GeneralConstants.SERVER_ERROR, errorMessage)
                    return
                } else if (this.isDisplayError != true) {
                    this.isDisplayUploadSuccessful = true
                }
            },
            (err) => {
                console.log(err)
                this.errorMessage = err.headers.get(
                    ServerConstants.ERROR_MESSAGE_HEADER
                )
                this.displayError(this.errorMessage, GeneralConstants.SERVER_ERROR)
            }
        )
    }

    private isFileFormatValid() {
        let photoName = this.photo.name
        if (!photoName.includes(GeneralConstants.JPG_POSTFIX) &&
            !photoName.includes(GeneralConstants.JPEG_POSTFIX)) {
            let errorMessage = "Please use only JPG photos"
            this.displayError(GeneralConstants.FILE_ERROR, errorMessage)
            return false
        }
        return true
    }

    private isFileSizeValid() {
        let photoSize = this.photo.size
        if (photoSize > GeneralConstants.MAX_PHOTO_SIZE) {
            let errorMessage = `File has exceeded max size of: ${GeneralConstants.MAX_PHOTO_SIZE / GeneralConstants.MEGABYTE_FACTOR} MB`
            this.displayError(GeneralConstants.FILE_ERROR, errorMessage)
            return false
        }
        return true
    }

    receiveFile(event) {

        this.photo = event.target.files[0]

        if (!this.isFileFormatValid()) {
            return
        }

        if (!this.isFileSizeValid()) {
            return
        }

        if (this.displayedErrorType == GeneralConstants.FILE_ERROR) {
            this.turnOffError()
        }
        var reader = new FileReader()
        reader.onload = this._handleReaderLoaded.bind(this)
        reader.readAsBinaryString(this.photo)
    }

    _handleReaderLoaded(readerEvt) {
        var binaryString = readerEvt.target.result
        this.photoBase64 = btoa(binaryString) // Converting binary string data.
        console.log(this.photoBase64)
    }

    private displayError(errorType: string, errorMessage: string) {
        this.isDisplayError = true
        this.displayedErrorType = errorType
        if (errorMessage == "" || errorMessage == null) {
            this.errorMessage == GeneralConstants.DEFAULT_ERROR_MESSAGE
        } else {
            this.errorMessage = errorMessage
        }
    }

    private turnOffError() {
        this.isDisplayError = false
        this.displayedErrorType = null
        this.errorMessage = null
    }

    ngOnInit() { }
}
