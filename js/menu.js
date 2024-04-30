'use strict'

/* selecionar o elemento que acionará a lista de links do menu */
const botaomenu = document.querySelector("nav h2 a");

/* selecionando a lista de links/menu */
const listadelinks = document.querySelector(".links-menu");

/* monitorando o evento de click/toque no botaomenu */
botaomenu.addEventListener("click", function(event){
    /* "previnir/anular" o evento padrão do link de redirecionamento/recarregamento da página*/
    event.preventDefault();

    listadelinks.classList.toggle("aberto")

    if (listadelinks.classList.contains("aberto")){
        botaomenu.innerHTML = "Fechar &times;";
    } else {
        botaomenu.innerHTML = "Menu &equiv;";
    }

});

