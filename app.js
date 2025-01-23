//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const amigos = [];
const inptNome = document.querySelector('#amigo');
function adicionarAmigo() {
    let amigo = inptNome.value;

    if(amigo){
        mostraListaDeAmigos(amigo);
        limparCampo();
    }else{
        alert('Você precisa adicionar um nome válido!')
    }
}

function limparCampo() {
    inptNome.value = '';
    inptNome.select();
}

function mostraListaDeAmigos(amigo) {
    amigos.push(amigo);
    const listAmigos = document.querySelector('#listaAmigos');
    listAmigos.innerHTML = '';
    
    amigos.forEach(amigo => {
        listAmigos.insertAdjacentHTML('beforeend', `<li>${amigo}</li>`);
    });
}

function sortearAmigo() {
    if(amigos.length > 0){
        let numeroAleatorio = Math.floor(Math.random() * amigos.length) 
        mostrarResultado(numeroAleatorio)
    }
}

function mostrarResultado(index) {
    const listaResultado = document.querySelector('#resultado');
    listaResultado.insertAdjacentHTML('beforeend',`<li>${amigos[index]}</li>`);
    amigos.splice(index, 1);
    console.log(amigos)
}
