let prato;
let bebida;
let sobremesa;
let precoPrato;
let precoBebida;
let precoSobremesa;
let precoTotal;


function selecionaPrato(item){
   prato = document.querySelector(".pratos .selecionado");

   if(prato !== null){
      prato.classList.remove("selecionado");
   }

   item.classList.add("selecionado");

   prato = item;

   liberaPedido()   
}

function selecionaBebida(item){
   bebida = document.querySelector(".bebidas .selecionado");
   if(bebida !== null){
      bebida.classList.remove("selecionado");
   }

   item.classList.add("selecionado");

   bebida = item;

   liberaPedido();
}

function selecionaSobremesa(item){
   sobremesa = document.querySelector(".sobremesas .selecionado");
   if(sobremesa !== null){
      sobremesa.classList.remove("selecionado");
   }

   item.classList.add("selecionado");

   sobremesa = item;

   liberaPedido();
}



function liberaPedido(){
   let botao = document.querySelector(".botao-finalizar");

   if(prato !== undefined && bebida !== undefined && sobremesa !== undefined){
      botao.classList.add("botao-liberado");
      botao.disabled = false;
      botao.innerHTML = "Fechar pedido";
   }
}


function confirmarPedido(){
   let telaConfirmacao = document.querySelector(".confirmar-container");

   let precoPratoConfirmado = document.querySelector(".preco-prato");
   let precoBebidaConfirmado = document.querySelector(".preco-bebida");
   let precoSobremesaConfirmado = document.querySelector(".preco-sobremesa");
   let precoTotalConfirmado = document.querySelector(".preco-total span");
   
   let nomePrato = document.querySelector(".nome-prato");
   let nomeBebida = document.querySelector(".nome-bebida");
   let nomeSobremesa = document.querySelector(".nome-sobremesa");


   precoPrato = prato.querySelector(".preco-item").innerHTML;
   precoBebida = bebida.querySelector(".preco-item").innerHTML;
   precoSobremesa = sobremesa.querySelector(".preco-item").innerHTML;

   prato = prato.querySelector(".nome-item").innerHTML;
   bebida = bebida.querySelector(".nome-item").innerHTML;
   sobremesa = sobremesa.querySelector(".nome-item").innerHTML;

   precoPratoConfirmado.innerHTML = precoPrato;
   precoBebidaConfirmado.innerHTML = precoBebida;
   precoSobremesaConfirmado.innerHTML = precoSobremesa;

   nomePrato.innerHTML = prato;
   nomeBebida.innerHTML = bebida;
   nomeSobremesa.innerHTML = sobremesa;

   precoTotal = (Number(precoPrato) + Number(precoBebida) + Number(precoSobremesa)).toFixed(2);
   precoTotalConfirmado.innerHTML = precoTotal;

   telaConfirmacao.classList.remove("escondido");

   let btn = document.querySelector(".confirmar button");

   let mensagem = geraMensagem();

   btn.innerHTML = `<a href="https://wa.me/5514996047024?text=${mensagem}">
                           Tudo certo, pode pedir!
                     </a>`;
}

function geraMensagem(){
  let texto = encodeURIComponent(`Olá, gostaria de fazer o pedido:
  - Prato: ${prato}
  - Bebida: ${bebida}
  - Sobremesa: ${sobremesa}
  Total: R$ ${precoTotal}`);

  return texto;
}

function cancelarPedido(){
   let telaConfirmacao = document.querySelector(".confirmar-container");
   telaConfirmacao.classList.add("escondido");

   prato = document.querySelector(".pratos .selecionado");
   sobremesa = document.querySelector(".sobremesas .selecionado");
   bebida = document.querySelector(".bebidas .selecionado");
}