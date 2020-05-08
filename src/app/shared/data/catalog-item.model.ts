export class CatalogItem {
    id: number
    title: string
    brand: string
    price: number
    amountInStock: number
    description: string
    itemType: string
    photoId: number
    photoBase64String: string

    public constructor (
        title?: string, 
        brand?: string,
        price?: number,
        amountInStock?: number, 
        description?: string, 
        itemType?: string,
        photoId?: number
    ) {
        this.title = title
        this.brand = brand
        this.price = price
        this.amountInStock = amountInStock
        this.description = description
        this.itemType = itemType
        this.photoId = photoId
    }
}