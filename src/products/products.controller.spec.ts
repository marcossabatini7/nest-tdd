import { Test, TestingModule } from '@nestjs/testing'
import { ProductsController } from './products.controller'
import { ProductsService } from './products.service'

import { CreateProductDto } from './dto/create-product.dto'

describe('ProductsController', () => {
  let controller: ProductsController

  const mockProcutsService = {
    create: jest.fn((dto: CreateProductDto) => ({
      id: Date.now(),
      ...dto
    })),
    findAll: () => [{}],
    findOne: () => ({}),
    update: () => ({}),
    remove: () => null
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService]
    })
      .overrideProvider(ProductsService)
      .useValue(mockProcutsService)
      .compile()

    controller = module.get<ProductsController>(ProductsController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  it('shold create a product', () => {
    const dto = new CreateProductDto({
      name: 'Acer Nitro 5',
      price: 5000,
      quantity: 3
    })

    expect(controller.create(dto)).toEqual({
      id: expect.any(Number),
      ...dto
    })
  })
})
