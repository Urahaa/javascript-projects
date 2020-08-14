var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    clearMessages();

    var form = document.querySelector("#form-paciente");
    var paciente = obtemInformacaoPacienteForm(form);

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        showErrorMessage(erros);
        return;
    }
    
    adicionaPacienteTabela(paciente);
    form.reset();
});

function adicionaPacienteTabela(paciente) {
    var pacienteTr = montaTrPaciente(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function obtemInformacaoPacienteForm(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value),
    };
    return paciente;
}

function montaTrPaciente(paciente) {

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;

}

function montaTd(valor, classe) {
    var td = document.createElement("td");
    
    td.textContent = valor;
    td.classList.add(classe)
   
    return td;
}

function validaPaciente(paciente) {
    var erros = [];

    if (!validaNome(paciente.nome)) erros.push("O nome não pode ser em branco");
    if (!validaPeso(paciente.peso)) erros.push("O peso é inválido");
    if (!validaAltura(paciente.altura)) erros.push("A altura é inválida");
    if (!validaGordura(paciente.gordura)) erros.push("A gordura não pode ser em branco");

    return erros;
}

function showErrorMessage(errors) {
    var ul = document.querySelector("#mensagens-erro");
        errors.forEach(element => {
            var li = document.createElement("li");
            li.textContent = element;
            ul.appendChild(li);
        })
}

function clearMessages() {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
}
