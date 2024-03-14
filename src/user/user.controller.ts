import { Controller, Get, Post, Body, Patch, Param, Delete,Request, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { LocalAuthGuard } from 'src/guard/auth/local-auth.guard';
import { AuthenticatedGuard } from 'src/guard/auth/authenticated.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("create")
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return { msg: 'Logged in!' }
  }

  @UseGuards(AuthenticatedGuard)
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @UseGuards(AuthenticatedGuard)
  @Get('info')
  getUsers(@Request() req) {
    return {
      data: req.user
    }
  }


  @UseGuards(AuthenticatedGuard)
  @Get(':usu_codi')
  findOne(@Param('usu_codi') usu_codi: string) {
    return this.userService.findOne(usu_codi);
  }

  @UseGuards(AuthenticatedGuard)
  @Patch(':id')
  update(@Param('usu_codi') usu_codi: string, @Body() updateUserDto: UpdateUserDto) {
    this.userService.update(usu_codi, updateUserDto);
    return {

    }
  }

  @UseGuards(AuthenticatedGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
