var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(paciente => {
    let peso = paciente.querySelector(".info-peso").textContent;
    let altura = paciente.querySelector(".info-altura").textContent;
    let tdImc = paciente.querySelector(".info-imc");

    let isPesoValido = validaPeso(peso);
    let isAlturaValida = validaAltura(altura);

    if (isPesoValido && isAlturaValida) {
        tdImc.textContent = calculaImc(peso, altura);
    }

    if (!isPesoValido) {
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido")
    }

    if (!isAlturaValida) {
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido")
    }
});

function validaPeso(peso) {
    return peso > 0 && peso < 1000;
}

function validaAltura(altura) {
    return altura > 0 && altura < 3;
}

function validaNome(nome) {
    return nome.length > 0;
}

function validaGordura(gordura) {
    return gordura.length > 0;
}

function calculaImc(peso, altura) {
    let imc = peso / (altura * altura);
    return imc.toFixed(2);
}