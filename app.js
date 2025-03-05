let nomeAmigos = [];


function adicionarNomeAmigo(){
  let adicionar = document.getElementById("amigo");
  let nome = adicionar.value.trim().toLowerCase();
  let regex = /^[a-zA-Z]+$/;

  if(nome == ""){
    alert("Por favor, insira um nome.");
    return;

  }
  if(!regex.test(nome)){
    alert("Por favor,insira apenas letras no nome.");
    return;
  }
  if(nomeAmigos.includes(nome)){
    alert("Este nome já foi adicionado");
    return;
  }
  nomeAmigos.push(nome);
  console.log(nomeAmigos);
  limparCampo();
  exibirListaAmigos();
  
}


function limparCampo(){
let limpar = document.getElementById("amigo");
limpar.value="";
}

function exibirListaAmigos(){
let lista = document.getElementById('listaAmigos');
lista.innerHTML="";

nomeAmigos.forEach((nome)=>{
  let itemNome = document.createElement("li");
  itemNome.textContent = nome;
  lista.appendChild(itemNome);
});
}
document.getElementById("sortear").addEventListener("click", gerarNomeAleatorio);

function gerarNomeAleatorio(){
  if(nomeAmigos.length <2){
    alert("Você precisa de pelo menos 2 nomes de amigos para sortear");
    return;
  }

  if(nomeAmigos.length == 0){
    alert("A lista está vazia!Adcione nomes antes de sortear");
    return;
  }

  let nomeAleatorio = Math.floor(Math.random()* nomeAmigos.length);
  let nomeSorteado = nomeAmigos[nomeAleatorio];
  let exibirNomeEscolhido = document.getElementById("resultado");
  exibirNomeEscolhido.innerHTML = `O nome sorteado foi ${nomeSorteado}`;

  nomeAmigos.splice(nomeAleatorio,1);
  exibirListaAmigos();

  
  

}



