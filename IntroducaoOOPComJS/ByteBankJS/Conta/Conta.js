import { Cliente } from "../Cliente.js";

//Classe abstrata
export class Conta {

    constructor(saldoInicial, agencia, cliente) {
        if (this.constructor == Conta) {
            throw new Error("Não é possível instanciar uma classe abstrata")
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) this._cliente = novoValor;
    }

    sacar(valor) {
        throw new Error("O método sacar da conta é abstrato")
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }

        return 0;
    }

    depositar(valor) {
        if (valor <= 0) return;
        this._saldo += valor;
    }

    transferir(valor, conta) {
        if (valor <= 0) return;
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}