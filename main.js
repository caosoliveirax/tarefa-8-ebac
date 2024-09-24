const form = document.getElementById('form-agenda');
const nomeCompleto = document.getElementById('nome-contato');
const telefoneFormatado = document.getElementById('numero-contato');

let FormEValido = false;

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (validaNome() && validaTelefone()) {
        adicionaLinha();
        atualizaTabela();
        limpaCampos();
    }
});

telefoneFormatado.addEventListener('input', function (e) {
    const x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
});

function validaNome() {
    if (nomeCompleto.value.trim().split(' ').length > 1) {
        nomeCompleto.style.border = '';
        document.querySelector('.error-message').style.display = 'none';
        return true;
    } else {
        nomeCompleto.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
        return false;
    }
}

function validaTelefone() {
    if (telefoneFormatado.value.trim().length === 15) {
        telefoneFormatado.style.border = '';
        document.querySelector('.error-message-number').style.display = 'none';
        return true;
    } else {
        telefoneFormatado.style.border = '1px solid red';
        document.querySelector('.error-message-number').style.display = 'block';
        return false;
    }
}

function adicionaLinha() {
    const inputNomeCompleto = document.getElementById('nome-contato');
    const inputTelefone = document.getElementById('numero-contato');

    let linha = '<tr>';
    linha += `<td>${inputNomeCompleto.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += '</tr>';

    linhas += linha;
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function limpaCampos() {
    nomeCompleto.value = ''; 
    telefoneFormatado.value = ''; 
}
