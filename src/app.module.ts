import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Product } from './products/entities/product.entity'
import { ProductsModule } from './products/products.module'

@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'nesttdd',
      entities: [Product],
      synchronize: true
    })
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
