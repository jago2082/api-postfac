import { UserService } from '../user/user.service';
import { HashService } from '../user/hash.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private hashService: HashService
    ) { }

    async validateUser(pos_usu_codi: string, pos_uso_pass: string): Promise<any> {
        const user = await this.userService.getUserByUsuCodi(pos_usu_codi);
        if (user) {
            const math = await this.hashService.comparePassword(pos_uso_pass, user.pos_uso_pass);
            if (math)
                return user;
        }

        return null;
    }
}