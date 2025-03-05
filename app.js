let nomeAmigos = [];

function adicionarNomeAmigo(){
  let adicionar = document.getElementById("amigo");
  let nome = adicionar.value.trim();
  

  if(nome == ""){
    alert("Por favor, insira um nome.");
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