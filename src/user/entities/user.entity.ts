import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Entity('user')
@Index(['pos_emp_codi','pos_usu_cont'],{unique:true})
export class UserEntity {

    @PrimaryColumn("smallint")
    pos_emp_codi:number

    @PrimaryColumn("int")
    pos_usu_cont:number

    @Column({length:15})
    pos_usu_codi:string

    @Column({length:255})
    pos_uso_noco:string

    @Column({length:255})
    pos_uso_pass:string

    @Column({length:1})
    pos_uso_esta:string

}
