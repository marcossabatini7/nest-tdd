import { Product } from '../entities/product.entity'

export class CreateProductDto extends Product {
  constructor(init?: Partial<CreateProductDto>) {
    super()
    Object.assign(this, init)
  }
}
