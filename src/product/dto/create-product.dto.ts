import { IsDecimal, IsInt, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class CreateProductDto {

    @IsInt()
    pos_emp_codi:number;

    @IsInt()
    pos_pro_cont:number;

    @IsString()
    pos_pro_codi:string;

    @IsString()
    pos_pro_desc:string;

    @IsNumber()
    pos_pro_pcost:number;

    @IsNumber()
    pos_pro_pgan:number;

    @IsNumber()
    pos_pro_pven:number;
    
    @IsString()
    @MinLength(1)
    @MaxLength(1)
    pos_pro_esta:string;

}
