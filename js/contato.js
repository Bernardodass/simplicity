'use strict';

// selecionando os elementos que serão manupulados
const formulario = document.querySelector("form");
const campocep = formulario.querySelector("#cep");
const campoendereco = formulario.querySelector("#endereco");
const campobairro = formulario.querySelector("#bairro");
const campocidade = formulario.querySelector("#cidade");
const campoestado = formulario.querySelector("#estado");
const campotelefone = formulario.querySelector("#telefone");
const botaobuscar = formulario.querySelector("#buscar");
const mensagemstatus = formulario.querySelector("#status");


/* seleção dos campos (via jQuery) e ativação das máscaras (via jQuery Mask) */
$(campocep).mask("00000-000");         // 01234-567
$(campotelefone).mask("(00) 0000-0000");         // (11) 2135-0300

// detectando quando o botão de buscar CEP é acionado
botaobuscar.addEventListener("click", async function(event){
    // anular o comportamento padrão de rediricionamento/recarregamento da página. Sempre acontece ao trabalhar com <a> e <form>.
    event.preventDefault();

    

    // verificando se o CEP NÃO TEM 9 digitos
    if ( campocep.value.length !==9 ){
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
    let url = `https://viacep.com.br/ws/${cepinformado}/json/`
   
    // etapa 2: acessar a API (com a URL) e aguardar o retorno dela
    const resposta = await fetch(url);

    // etapa3: extrair os dados da resposta da API em formato JSON
    const dados = await resposta.json();

    // etapa 4: lidar com os dados (em caso de erro e de sucesso)

    // se existir a string/prop "erro" no objeto dados
    if("erro" in dados){
        mensagemstatus.textContent = "CEP inexistente";
        mensagemstatus.style.color = "red";
    } else {
        // senão, é porque o CEP existe!
        mensagemstatus.textContent = "CEP encontrado!";
        mensagemstatus.style.color = "blue";

        // selecionando os elementos que estão escondidos
        const camposrestantes = formulario.querySelectorAll('.campos-restantes');

        // removendo a classes um loop
        for( const campo of camposrestantes ){
            campo.classList.remove("campos-restantes");
        }

        campoendereco.value = dados.logradouro;
        campobairro.value = dados.bairro;
        campocidade.value = dados.localidade;
        campoestado.value = dados.uf;

    }
});