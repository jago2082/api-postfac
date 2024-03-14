import { IsInt, IsString } from 'class-validator';

export class LoginUserDto {
    @IsInt()
    pos_emp_codi:number;

    @IsString()
    pos_usu_codi:string;

    @IsString()
    pos_uso_pass: string;
}