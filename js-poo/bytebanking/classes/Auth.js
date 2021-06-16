import { Funcionario } from "./Funcionarios/Funcionario.js";

export class Auth {
    static login (user, password) {
        if (Auth.isAuth(user)) {
            return user.auth(password);
        }
        return false;
    }

    static isAuth(user) {
        return 'auth' in user && user.auth instanceof Function;
    }
}
