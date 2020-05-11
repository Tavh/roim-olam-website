import { CatalogItemPhoto } from './catalog-item-photo'

export class CatalogItem {
    id: number
    title: string
    brand: string
    price: number
    description: string
    itemType: string
    photo: CatalogItemPhoto

    public constructor (
        title?: string, 
        brand?: string,
        price?: number,
        description?: string, 
        itemType?: string,
        photo?: CatalogItemPhoto
    ) {
        this.title = title
        this.brand = brand
        this.price = price
        this.description = description
        this.itemType = itemType
        this.photo = photo
    }
}