import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>
  ){}

  async create(createProductDto: CreateProductDto) {
    const prod = await this.getProductByProCodi(createProductDto.pos_pro_codi);
    if (prod) {
      return {
        success:false,
        error:`El producto ya se encuentra registrado`,
        obj:null
      }; 
    }
    const newProd = this.productRepository.create(createProductDto);
    const prodAdded = await this.productRepository.save(newProd);
    return {
      success:true,
      error:``,
      obj:prodAdded
    };
  }

  async findAll() {

    const allProds = await this.productRepository.find();

    return {
      success:true,
      error:``,
      obj:allProds
    };
  }

  async findOne(pro_codi: string) {
    const Prod = await this.productRepository.findOne({where:{pos_pro_codi:pro_codi} });

    return {
      success:true,
      error:``,
      obj:Prod
    };
  }

  async update(pro_codi: string, updateProductDto: UpdateProductDto) {
    const prod = await this.getProductByProCodi(pro_codi);
    if (prod) {
      const prodUpdate = await this.productRepository.update({pos_pro_codi:pro_codi},updateProductDto);
      return {
        success:true,
        error:``,
        obj:`Producto actualizado correctamente`
      };
    }else{
      return {
        success:false,
        error:`Producto no encontrado`,
        obj:null
      };
    }
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }

  async getProductByProCodi(pro_codi: string) {
    return await this.productRepository.findOne({where:{pos_pro_codi:pro_codi} });
  }
}
