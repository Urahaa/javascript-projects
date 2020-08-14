export class Cliente {
    nome;
    _cpf;

    constructor(nome, cpf, senha) {
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }

    get cpf() {
        return this._cpf;
    }

    autenticar(senha) {
        return this._senha == senha;
    }
}