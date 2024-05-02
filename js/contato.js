'use strict';

// selecionando os elementos que serão manupulados
const formulario = document.querySelector("form");
const campocep = formulario.querySelector("#cep");
const campoendereco = formulario.querySelector("#endereco");
const campobairro = formulario.querySelector("#bairro");
const campocidade = formulario.querySelector("#cidade");
const campoestado = formulario.querySelector("#estado");
const botaobuscar = formulario.querySelector("#buscar");
const mensagemstatus = formulario.querySelector("#status");

// detectando quando o botão de buscar CEP é acionado
botaobuscar.addEventListener("click", function(event){
    // anular o comportamento padrão de rediricionamento/recarregamento da página. Sempre acontece ao trabalhar com <a> e <form>.
    event.preventDefault();

    

    // verificando se o CEP NÃO TEM 8 digitos
    if ( campocep.value.length !==8 ){
        // informar o usuário sobre o erro
      mensagemstatus.textContent = "Digite um CEP válido";
      mensagemstatus.style.color = "plum";
      
    // pare completamente a execução
    return;
    }

    // guardando o valor do cep digitado/informado
    let cepinformado = campocep.value;
    

    /* AJAX - Asyncronous JavaSript And XML
    (JavaScript assíntono e XML)
    
    Técnica de comunicação (transmissão, recebimento) de dados que permite o processamento em conjunto com APIs (ou Web Services)*/

    // etapa 1: preparar a URL da API com o CEP que foi informado

    // etapa 2: acessar a API (com a URL) e aguardar o retorno dela

    // etapa3: extrair os dados da resposta da API em formato JSON

    // etapa 4: lidar com os dados (em caso de erro e de sucesso)

});