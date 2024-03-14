import { Module } from "@nestjs/common";
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategy/local.strategy';
import { SessionSerializer } from './strategy/session.serializer';
import { HashService } from '../user/hash.service';
import { UserService } from '../user/user.service';
import { UserModule } from '../user/user.module';
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "src/user/entities/user.entity";

@Module({
    imports: [
        UserModule,
        PassportModule.register({ session: true }),
        TypeOrmModule.forFeature([UserEntity]), // Importa la entidad User
    ],
    providers: [
        AuthService,
        LocalStrategy,
        SessionSerializer,
        HashService,
        UserService
    ]
})
export class AuthModule { }