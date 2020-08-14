var table = document.querySelector("#tabela-pacientes");

table.addEventListener("dblclick", function (event) {
    var linhaRemover = event.target.parentNode;
    linhaRemover.classList.add("fade-out");

    setTimeout(function () {
        linhaRemover.remove();
    }, 500);

});
