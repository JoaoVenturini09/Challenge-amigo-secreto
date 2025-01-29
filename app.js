//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes dos amigos
let listaDeAmigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    // Captura o valor do campo de entrada
    let inputAmigo = document.getElementById('amigo');
    let nome = inputAmigo.value.trim(); // remove os espaços em branco

    // Validação da entrada: garante que o campo não esteja vazio
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }
    
    // Atualiza o array de amigos
    listaDeAmigos.push(nome);

    // Atualiza a lista na interface do usuário
    atualizarListaDeAmigos();

    // Limpa o campo de entrada
    inputAmigo.value = '';
}

// Função para atualizar a lista de amigos na interface do usuário
function atualizarListaDeAmigos() {
    // Obtenha o elemento da lista
    let listaAmigosElement = document.getElementById('listaAmigos');
    
    // Limpe a lista existente
    listaAmigosElement.innerHTML = '';

    // Percorra o array e crie elementos de lista para cada nome
    for (let amigo of listaDeAmigos) {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigosElement.appendChild(li);
    }
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    // Validação para garantir que há amigos disponíveis no array
    if (listaDeAmigos.length === 0) {
        alert('Nenhum amigo foi adicionado ainda.');
        return;
    }

    // Gera um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    
    // Obtém o nome sorteado
    let amigoSorteado = listaDeAmigos[indiceAleatorio];
    
    // Mostra o resultado na interface do usuário
    let resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `Amigo secreto sorteado: ${amigoSorteado}`;
}