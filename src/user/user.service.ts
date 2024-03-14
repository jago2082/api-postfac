import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HashService } from './hash.service';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private hashService: HashService,
  ){}
  

  async create(createUserDto: CreateUserDto) {
    const user = await this.getUserByUsuCodi(createUserDto.pos_usu_codi);
    if (user) {
      return {
        success:false,
        error:`El usuario ya se encuentra registrado`,
        obj:null
      }; 
    }
    createUserDto.pos_uso_pass= await this.hashService.hashPassword(createUserDto.pos_uso_pass);
    const newuser = this.userRepository.create(createUserDto);
    const userAdded = await this.userRepository.save(newuser);
    return {
      success:true,
      error:``,
      obj:userAdded
    }; 
    
  }


  async getUserByUsuCodi(usu_codi: string) {
    return await this.userRepository.findOne({where:{pos_usu_codi:usu_codi} });
  }

  async findAll() {

    const allUsers = await this.userRepository.find();

    return {
      success:true,
      error:``,
      obj:allUsers
    };
  }

  async findOne(usu_codi: string) {
    const user = await this.getUserByUsuCodi(usu_codi);
    if (user) {
      return {
        success:true,
        error:``,
        obj:user
      }; 
      
    }
    return {
      success:false,
      error:`Usuario no encontrado`,
      obj:null
    };
  }

  async update(usu_codi: string, updateUserDto: UpdateUserDto) {
    const user = await this.getUserByUsuCodi(usu_codi);
    if (user) {
      updateUserDto.pos_uso_pass = await this.hashService.hashPassword(updateUserDto.pos_uso_pass);
      const userUpdate = await this.userRepository.update({pos_usu_codi:usu_codi},updateUserDto);
      return {
        success:true,
        error:``,
        obj:`Usuario actualizado correctamente`
      };
    }else{
      return {
        success:false,
        error:`Usuario no encontrado`,
        obj:null
      };
    }
    
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
