'use strict';

// selecionando os elementos que serão manupulados
const formulario = document.querySelector("form");
const campocep = formulario.querySelector("#cep");
const campoendereco = formulario.querySelector("#endereco");
const campobairro = formulario.querySelector("#bairro");
const campocidade = formulario.querySelector("#cidade");
const campoestado = formulario.querySelector("#estado");
const botaobuscar = formulario.querySelector("#buscar");
const mensagem = formulario.querySelector("#status");

// detectando quando o botão de buscar CEP é acionado
botaobuscar.addEventListener("click", function(event){
    // anular o comportamento padrão de rediricionamento/recarregamento da página. Sempre acontece ao trabalhar com <a> e <form>.
    event.preventDefault();
    
});