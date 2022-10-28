export class Product {
  id: string
  name: string
  price: number
  quantity: number

  constructor(init?: Partial<Product>) {
    Object.assign(this, init)
  }
}
