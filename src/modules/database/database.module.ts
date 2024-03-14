import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from 'src/product/entities/product.entity';
import { UserEntity } from 'src/user/entities/user.entity';

@Module({
    imports:[
        TypeOrmModule.forRoot({
            type:'mysql',
            host:'localhost',
            port:3306,
            username:'root',
            password:'',
            database:'system_pos_fac',
            // host:process.env.DB_HOST,
            // port:parseInt(process.env.DB_PORT),
            // username:process.env.DB_USER,
            // password:process.env.DB_PASS,
            // database:process.env.DB_NAME,
            entities:[
                ProductEntity,
                UserEntity
            ],
            synchronize:true
        })
    ]
})

export class DatabaseModule {}