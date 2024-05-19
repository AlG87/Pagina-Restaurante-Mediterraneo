import  {platos}  from './platos.js'

const $seccion1 = document.querySelector(".plato-1")
const $seccion2 = document.querySelector(".plato-2")

$seccion1.innerHTML = `
    <img src="IMG/img_platos/${platos[0].id}.jpeg" class="plato-promocional-img" alt="${platos[0].nombre}">
    <div class="contenedor-contenido">
        <h3>${platos[0].nombre}</h3>
        <p>${platos[0].descripcion}</p>
        <a href="paginas/recetas/${platos[0].id}.html">
            <button class="boton-ver-receta">Ver plato</button>
        </a>
    </div>
`
$seccion2.innerHTML = `
    <img src="IMG/img_platos/${platos[1].id}.jpeg" class="plato-promocional-img" alt="${platos[1].nombre}">
    <div class="contenedor-contenido">
        <h3>${platos[1].nombre}</h3>
        <p>${platos[1].descripcion}</p>
        <a href="paginas/recetas/${platos[1].id}.html">
            <button class="boton-ver-receta">Ver plato</button>
        </a>
    </div>
`

const $menu = document.querySelector(".contenedor-platos")
for(let i = 2;i < 8;i++){
    $menu.innerHTML += `
        <div class="plato">
        <div class="imagen">
            <img src="IMG/img_platos/${platos[i].id}.jpeg" alt="${platos[i].nombre}">
        </div>
        <div class="contenedor-info-platos">
            <h4>${platos[i].nombre}</h4>
        </div>
        </div>
    `
}
const $contMenu = document.querySelector(".contenedor-menu")
$contMenu.innerHTML += `
    <a href="paginas/menu.html" class="container-boton-receta-menu">
        <button class="boton-ver-receta boton-receta-menu">Ver menu completo</button>
    </a>
`