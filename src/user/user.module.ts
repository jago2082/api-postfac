import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { HashService } from './hash.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from './user.repository';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([UserEntity]), // Importa la entidad User
    TypeOrmModule.forFeature([UserRepository]), // Importa el repositorio UserEntityRepository
  ],
  controllers: [UserController],
  providers: [UserService,HashService,AuthService],
})
export class UserModule {}
