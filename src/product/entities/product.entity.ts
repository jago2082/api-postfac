import { Column, Entity, Index, PrimaryColumn } from "typeorm";


@Entity('product')
@Index(['pos_emp_codi','pos_pro_cont'],{unique:true})
export class ProductEntity {

    @PrimaryColumn("smallint")
    pos_emp_codi:number

    @PrimaryColumn("int")
    pos_pro_cont:number

    @Column({length:50})
    pos_pro_codi:string

    @Column({length:255})
    pos_pro_desc:string

    @Column("double")
    pos_pro_pcost:number

    @Column("double")
    pos_pro_pgan:number

    @Column("double")
    pos_pro_pven:number

    @Column({length:1})
    pos_pro_esta:string

}