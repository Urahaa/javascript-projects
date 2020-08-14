export class SistemaAutenticacaoLogin {

    static login(autenticavel, senha) {
        if (SistemaAutenticacaoLogin.isAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static isAutenticavel(autenticavel) {
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }

}
