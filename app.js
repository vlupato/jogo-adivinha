let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo da Adivinhação';


let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';*/

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Male", { rate: 1.2 });
}

function reiniciarMensagem() {
  exibirTextoNaTela("h1", "Jogo da Adivinhação");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}
reiniciarMensagem();

function verificarChute() {
  let chute = document.querySelector("input").value;
  console.log(chute == numeroSecreto);

  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Parabéns, você acertou!!");
    let palavraTentativa = tentativas == 1 ? "tentativa" : "tentativas";
    let mensagemTentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O número secreto é menor.");
    } else {
      exibirTextoNaTela("p", "O número secreto é maior.");
    }
  }
  tentativas++;
  limparCampo();
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * 10) + 1;
  let quantidadeDeNumerosSorteados = listaDeNumerosSorteados.length;
  if (quantidadeDeNumerosSorteados == 10) {
    listaDeNumerosSorteados = [];
  }
  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  reiniciarMensagem();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

//ATIVIDADES FUNÇÕES

/* function olaMundo(){
        console.log('Ola Mundo');
    }

    function olaNome(nome){
        console.log(`Olá ${nome}`);
    }

    function numeroEmDobro(numero){
        return numero * 2;
    }*/

//ATIVIDADES ARRAYS

/*let listaGenerica = [];

let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Pyton'];
  

let tresNomes = ['João', 'Maria', 'José'];
console.log(tresNomes[0]);
console.log(tresNomes[1]);
console.log(tresNomes[2]);*/
