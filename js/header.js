const $menu = document.querySelector(".barra-navegacion");
const $btMenu = document.querySelector(".boton_menu");
const $ulMenu = document.querySelector("nav ul");

$btMenu.addEventListener("click", () =>{
    $menu.classList.toggle("menu-toggle");
    $ulMenu.classList.toggle("menu-toggle");
});