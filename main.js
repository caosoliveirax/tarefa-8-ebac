const form = document.getElementById('form-agenda');
const nomeCompleto = document.getElementById('nome-contato');

let FormEValido = false;


form.addEventListener('submit', function(e) {
    e.preventDefault();

    validaNome();

});

function validaNome() {
    if (nomeCompleto.value.trim().split(' ').length > 1) {
        nomeCompleto.value = ''; // Limpa o campo
    }
}