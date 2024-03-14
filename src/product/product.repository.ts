import { EntityRepository, Repository } from 'typeorm';
import { ProductEntity } from './entities/product.entity';

@EntityRepository(ProductEntity)
export class ProductRepository extends Repository<ProductEntity> {
  // Aquí puedes definir métodos específicos de consulta si es necesario
}