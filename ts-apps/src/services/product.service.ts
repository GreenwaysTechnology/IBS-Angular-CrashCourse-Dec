import { Product } from "../types/product.type"

export class ProductService {

    findAllProducts(): Array<Product> {
        return [{ id: 1, name: 'apple' }]
    }
}