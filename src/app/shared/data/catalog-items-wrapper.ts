import { CatalogItem } from './catalog-item.model'

export class CatalogItemsWrapper {

    pages: number
    catalogItems: CatalogItem[]

    public constructor (pages: number, catalogItems: CatalogItem[]) {
        this.pages = pages
        this.catalogItems = catalogItems
    }
}