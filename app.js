let listaAmigos = [];

// Função para adicionar amigos à lista
function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo"); // Captura o input
    let nomeAmigo = inputAmigo.value.trim(); // Remove espaços em branco extras

    if (nomeAmigo === "") {
        alert("Por favor, insira um nome válido."); // Valida o campo vazio
        return;
    }

    // Adiciona o nome na lista
    listaAmigos.push(nomeAmigo);

    // Atualiza a lista na interface
    atualizarLista();

    // Limpa o campo de input
    inputAmigo.value = "";
    inputAmigo.focus(); // Retorna o foco para o campo
}

// Função para atualizar a lista de amigos exibida
function atualizarLista() {
    const llistaAmigos = document.getElementById("listaAmigos");
    llistaAmigos.innerHTML = ""; // Limpa a lista existente

    // Adiciona os itens da lista atualizada
    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${amigo}`;
        llistaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    const resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = ""; // Limpa o resultado anterior

    if (listaAmigos.length === 0) {
        alert("A lista está vazia. Adicione pelo menos um nome antes de realizar o sorteio.");
        return;
    }


    // Sorteia um índice aleatório da lista
    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceSorteado];

    // Exibe o resultado na interface
   resultadoHTML.innerHTML = `<li>🎉 O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;

   limparLista();
}

// Função para limpar a lista e o array
function limparLista() {
    listaAmigos = []; // Limpar o array
    const listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = ""; // Limpar o conteúdo da lista HTML
}