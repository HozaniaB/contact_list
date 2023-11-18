const form = document.getElementById('form-contact');
const Avatar = '<img src="./images/avatar.png" alt="Imagem avatar neutro" />';
const nomes = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

adicionarLinha();
atualizarTabela();
});

function adicionarLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroTelefone = document.getElementById('numero-telefone');

    if(nomes.includes(inputNomeContato.value) || numeros.includes(inputNumeroTelefone.value)) {
        alert(`O Nome ${inputNomeContato.value} e/ou Número de contato ${inputNumeroTelefone.value} já existe. Favor verificar e tentar novamente.`);        
    } else { 
    nomes.push(inputNomeContato.value);
    numeros.push(inputNumeroTelefone.value);

    let linha = '<tr>';
    linha += `<td>${Avatar}</td>`;
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroTelefone.value}</td>`;

    linhas += linha;
}

    inputNomeContato.value = '';
    inputNumeroTelefone.value = '';
}
function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}