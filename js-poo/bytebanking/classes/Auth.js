import { Funcionario } from "./Funcionarios/Funcionario.js";

export class Auth {
    static login (user, password) {
        if(user.getPassword() ==  password) {
            return true;
        } else {
            return false;
        }
    }
}
