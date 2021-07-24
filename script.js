let prato;
let bebida;
let sobremesa;


function selecionaPrato(item){
   prato = document.querySelector(".pratos .selecionado");
   if(prato !== null){
      prato.classList.remove("selecionado");
   }

   item.classList.add("selecionado");

   prato = item;

   liberaPedido();

   // return console.log(item.querySelector(".nome-item").innerHTML);
   
}

function selecionaBebida(item){
   bebida = document.querySelector(".bebidas .selecionado");
   if(bebida !== null){
      bebida.classList.remove("selecionado");
   }

   item.classList.add("selecionado");

   bebida = item;

   liberaPedido();
   
   // return console.log(item.querySelector(".nome-item").innerHTML);

}

function selecionaSobremesa(item){
   sobremesa = document.querySelector(".sobremesas .selecionado");
   if(sobremesa !== null){
      sobremesa.classList.remove("selecionado");
   }

   item.classList.add("selecionado");

   sobremesa = item;

   liberaPedido();
   
   // return console.log(item.querySelector(".nome-item").innerHTML);

}



function liberaPedido(){
   let botao = document.querySelector(".botao-finalizar");

   if(prato !== undefined && bebida !== undefined && sobremesa !== undefined){
      botao.classList.add("botao-liberado");
      botao.disabled = false;
      botao.innerHTML = "Fechar pedido";
      // geraMensagem();
   }

}


function confirmarPedido(){
   let telaConfirmacao = document.querySelector(".confirmar-container");

   let precoPrato = prato.querySelector(".preco-item").innerHTML;
   let precoBebida = bebida.querySelector(".preco-item").innerHTML;
   let precoSobremesa = sobremesa.querySelector(".preco-item").innerHTML;

   let precoTotal = Number(precoPrato) + Number(precoBebida) + Number(precoSobremesa);

   telaConfirmacao.classList.remove("escondido");
}

function geraMensagem(){
   let botao = document.querySelector(".botao-finalizar");

   let precoPrato = prato.querySelector(".preco-item").innerHTML;
   let precoBebida = bebida.querySelector(".preco-item").innerHTML;
   let precoSobremesa = sobremesa.querySelector(".preco-item").innerHTML;

   let precoTotal = Number(precoPrato) + Number(precoBebida) + Number(precoSobremesa);

   precoTotal = precoTotal.toFixed(2);

   prato = prato.querySelector(".nome-item").innerHTML;
   bebida = bebida.querySelector(".nome-item").innerHTML;
   sobremesa = sobremesa.querySelector(".nome-item").innerHTML;


   console.log(prato, bebida, sobremesa);

  let mensagem = encodeURIComponent(`Olá, gostaria de fazer o pedido:
  - Prato: ${prato}
  - Bebida: ${bebida}
  - Sobremesa: ${sobremesa}
  Total: R$ ${precoTotal}`);


   botao.innerHTML = `<a href="https://wa.me/5514996047024?text=${mensagem}">
                           <p>Fechar pedido</p>
                        </a>`;

}