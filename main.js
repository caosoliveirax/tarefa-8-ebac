const form = document.getElementById('form-agenda');
const nomeCompleto = document.getElementById('nome-contato');
const telefoneFormatado = document.getElementById('numero-contato');


let FormEValido = false;


form.addEventListener('submit', function(e) {
    e.preventDefault();

    validaNome();
});

//Formatação de numero de telefone conforme digita no campo Telefone
telefoneFormatado.addEventListener('input', function (e) {
    const x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
});

//Função que verifica se o nome está com mais de uma parte, o que configura que seja um nome completo
function validaNome() {
    if (nomeCompleto.value.trim().split(' ').length > 1) {
        nomeCompleto.value = ''; // Limpa o campo de nome
        telefoneFormatado.value = ''; // Limpa o campo de telefone
    } else {
        nomeCompleto.style.border = '1px solid red'
        document.querySelector('.error-message').style.display = 'block';
    }
}