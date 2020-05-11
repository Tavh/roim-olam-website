export class CatalogItemPhoto {
    photoBase64: string
    photoId?: number

    public constructor (photoBase64: string, photoId?: number) {
        this.photoBase64 = photoBase64
        this.photoId = photoId
    }
}