var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function () {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function () {
        var erroAjax = document.querySelector("#erro-ajax");
        try {
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(paciente => {
                adicionaPacienteTabela(paciente);
            });
            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.add("invisivel");
        } catch {
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }
    })
    xhr.send();

});