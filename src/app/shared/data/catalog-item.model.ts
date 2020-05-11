export class CatalogItem {
    id: number
    title: string
    brand: string
    price: number
    description: string
    itemType: string
    photoId: string
    photoBase64String: string

    public constructor (
        title?: string, 
        brand?: string,
        price?: number,
        description?: string, 
        itemType?: string,
        photoBase64String?: string
    ) {
        this.title = title
        this.brand = brand
        this.price = price
        this.description = description
        this.itemType = itemType
        this.photoBase64String = photoBase64String
    }
}