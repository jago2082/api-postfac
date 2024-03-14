import { PassportSerializer } from "@nestjs/passport";

export class SessionSerializer extends PassportSerializer {
    serializeUser(user: any, done: (err: Error, user: any) => void): any {
        done(null, {
            pos_emp_codi: user.pos_emp_codi,
            pos_usu_cont: user.pos_usu_cont,
            pos_usu_codi: user.pos_usu_codi,
            pos_uso_noco: user.pos_uso_noco,
            pos_uso_esta: user.pos_uso_esta

        })
    }

    deserializeUser(payload: any, done: (err: Error, payload: string) => void): any {
        done(null, payload)
    }
}