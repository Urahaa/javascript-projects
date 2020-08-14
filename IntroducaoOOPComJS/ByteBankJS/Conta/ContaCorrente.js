import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {

    constructor(agencia, cliente) {
        super(0, agencia, cliente);
    }

    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }


}