import { Test, TestingModule } from '@nestjs/testing'
import { ProductsController } from './products.controller'
import { ProductsService } from './products.service'

import { CreateProductDto } from './dto/create-product.dto'
import { Product } from './entities/product.entity'

describe('ProductsController', () => {
  let controller: ProductsController

  const mockProcutsService = {
    create: jest.fn((dto: CreateProductDto) => ({
      id: Date.now(),
      ...dto
    })),
    findAll: () => [new Product()],
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

    expect(mockProcutsService.create).toHaveBeenCalledWith(dto)
  })

  it('shold find all products', () => {
    expect(controller.findAll()).toEqual([new Product()])
  })
})
