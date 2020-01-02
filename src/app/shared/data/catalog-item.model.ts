export class CatalogItem {
    id: number
    title: string
    brand: string
    price: number
    amountInStock: number
    description: string
    itemType: string
    photoFileName: string
    photoBase64String: string

    public constructor (
        title?: string, 
        brand?: string,
        price?: number,
        amountInStock?: number, 
        description?: string, 
        itemType?: string,
        photoFileName?: string
    ) {
        this.title = title
        this.brand = brand
        this.price = price
        this.amountInStock = amountInStock
        this.description = description
        this.itemType = itemType
        this.photoFileName = photoFileName
    }
}