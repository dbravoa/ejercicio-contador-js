var contador = 0;

function aumentarValor() {
    actualizarValor(++contador);
}
function actualizarValor(valor) {
    document.getElementById('numero').innerHTML = valor;
}