import { IsInt, IsString, MaxLength, MinLength } from "class-validator"

export class CreateUserDto {

    @IsInt()
    pos_emp_codi:number;
    
    @IsInt()
    pos_usu_cont:number;

    @IsString()
    pos_usu_codi:string;

    @IsString()
    pos_uso_noco:string;

    @IsString()
    @MinLength(8)
    @MaxLength(50)
    pos_uso_pass:string;

    @IsString()
    pos_uso_esta:string;
}
