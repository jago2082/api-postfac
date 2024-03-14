import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { AuthenticatedGuard } from 'src/guard/auth/authenticated.guard';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(AuthenticatedGuard)
  @Post('create')
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @UseGuards(AuthenticatedGuard)
  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @UseGuards(AuthenticatedGuard)
  @Get(':pro_codi')
  findOne(@Param('pro_codi') pro_codi: string) {
    return this.productService.findOne(pro_codi);
  }

  @UseGuards(AuthenticatedGuard)
  @Patch(':pro_codi')
  update(@Param('pro_codi') pro_codi: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(pro_codi, updateProductDto);
  }

  @UseGuards(AuthenticatedGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
