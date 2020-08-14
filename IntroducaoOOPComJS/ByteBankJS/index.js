import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacaoLogin } from "./SistemaAutenticacaoLogin.js";


const cliente = new Cliente("Matheus", 11122233309, "456789");

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
const gerente = new Gerente("Ricardo", 5000, 12378945601);

diretor.cadastrarSenha("123456789");
gerente.cadastrarSenha("123");

console.log("Cliente está logado?", SistemaAutenticacaoLogin.login(cliente, "456789"));
console.log("Diretor está logado?", SistemaAutenticacaoLogin.login(diretor, "123456789"));
console.log("Gerente está logado?", SistemaAutenticacaoLogin.login(gerente, "123"));