function selecionaPrato(item){
   let selecionado = document.querySelector(".pratos .selecionado");

   if(selecionado !== null){
      selecionado.classList.remove("selecionado");
   }

      item.classList.add("selecionado");

      return console.log(item.querySelector(".nome-item").innerHTML);
   
}

function selecionaBebida(item){
   let selecionado = document.querySelector(".bebidas .selecionado");

   if(selecionado !== null){
      selecionado.classList.remove("selecionado");
   }

      item.classList.add("selecionado");
   
      return console.log(item.querySelector(".nome-item").innerHTML);

}

function selecionaSobremesa(item){
   let selecionado = document.querySelector(".sobremesas .selecionado");

   if(selecionado !== null){
      selecionado.classList.remove("selecionado");
   }

      item.classList.add("selecionado");
   
      return console.log(item.querySelector(".nome-item").innerHTML);

}

function liberaPedido(){
   
}