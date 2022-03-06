var paginaAtual = document.getElementById("select").value;

var mensagem = document.getElementById("mensagem");
var qualMetodo = true;

function mudaPagina() {
  const pagina = document.getElementById("select").value;
  if (pagina !== paginaAtual) {
    location.href = "index.html";
  }
}

const metodo = (value) => {
  if (value === "Codificar") {
    document.getElementById("botao").innerHTML = "Codificar Mensagem!";
    qualMetodo = true;
  } else {
    document.getElementById("botao").innerHTML = "Decodificar Mensagem!";
    qualMetodo = false;
  }
};

function codificar(mensagem) {
  var palavracodificada = btoa(mensagem);
  document.getElementById("resultado").value = palavracodificada;
}
function decodificar(mensagem) {
  var palavraDecodificada = atob(mensagem);
  document.getElementById("resultado").value = palavraDecodificada;
}

const usarMetodo = (mensagem) => {
  if (qualMetodo) {
    codificar(mensagem);
  } else {
    decodificar(mensagem);
  }
};

 