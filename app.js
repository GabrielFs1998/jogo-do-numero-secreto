let listaDeNumerosSorteados = [];
let quantidadeDeNumeros = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function gerarNumeroAleatorio() {
    
    let numeroEscolhido = parseInt(Math.random() * quantidadeDeNumeros + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    
    if (quantidadeDeElementosNaLista == quantidadeDeNumeros) {
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial() {
    exibirTextoNaTela('h1', 'Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número de 1 a 10');
}

mensagemInicial();

function verificarChute () {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Você Acertou !');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let menssagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', menssagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if(chute > numeroSecreto) {
            exibirTextoNaTela('p', 'Você errou, o numero é menor');            
        }else {
            exibirTextoNaTela('p', 'Você errou, o numero é maior');
        }
        tentativas++;
        limparCampo();
    }
}


function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function novoJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    console.log(numeroSecreto);
    document.getElementById('reiniciar').setAttribute('disabled', true);
}