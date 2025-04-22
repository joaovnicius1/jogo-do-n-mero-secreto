let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextonaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMsgInicial() {
  exibirTextonaTela("h1", "Jogo do número secreto");
  exibirTextonaTela("p", "Escolha um número de 1 a 10:");
}
exibirMsgInicial();

function verificarChute() {
  let chute = document.querySelector("input").value;
  if (chute == numeroSecreto) {
    exibirTextonaTela("h1", "Acertou miseravi!!");
    let palavratentaviva = tentativas > 1 ? "tentativas" : "tentativa";
    let msgTentativa = `Parabéns!! Vc acertou o número secreto com ${tentativas} ${palavratentaviva}`;
    exibirTextonaTela("p", msgTentativa);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exibirTextonaTela("p", "O número secreto é menor");
    } else {
      exibirTextonaTela("p", "O número secreto é maior");
    }
  }

  tentativas++;

  limpaCampo();
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if(quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumerosSorteados = []
  }

  if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
  } else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}

function limpaCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limpaCampo();
  tentativas = 1;
  exibirMsgInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
