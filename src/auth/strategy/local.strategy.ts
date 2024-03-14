import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from 'passport-local';
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
            usernameField: 'pos_usu_codi',
            passwordField: 'pos_uso_pass',
        });
    }

    async validate(usu_codi: string, pos_uso_pass: string): Promise<any> {
        const user = await this.authService.validateUser(usu_codi, pos_uso_pass);
        if (!user) {
            throw new UnauthorizedException({
                message: "Credenciales incorrectas!"
            });
        }
        return user;
    }
}