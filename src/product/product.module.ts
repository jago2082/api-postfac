import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductEntity } from './entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRepository } from './product.repository';

@Module({
  imports:[
    TypeOrmModule.forFeature([ProductEntity]), // Importa la entidad User
    TypeOrmModule.forFeature([ProductRepository]), // Importa el repositorio UserEntityRepository
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
