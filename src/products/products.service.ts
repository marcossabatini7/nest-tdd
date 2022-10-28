import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import { Product } from './entities/product.entity'

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private _productRepository: Repository<Product>
  ) {}

  create(createProductDto: CreateProductDto) {
    return this._productRepository.insert(createProductDto)
  }

  findAll() {
    return this._productRepository.find()
  }

  findOne(id: number) {
    return this._productRepository.findOneByOrFail({ id })
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    delete updateProductDto.id
    return this._productRepository.update({ id }, updateProductDto)
  }

  remove(id: number) {
    return this._productRepository.delete(id)
  }
}
