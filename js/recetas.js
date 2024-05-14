import  {platos}  from './platos.js'

const contenedorRecetas = document.querySelector(".contenedor-recetas")

platos.map(item =>{
    contenedorRecetas.innerHTML += `
    <div class="receta">
        <img src="../IMG/img_platos/${item.id}.jpeg" alt="${item.nombre}">
        <h3>${item.nombre}</h3>
        <p>${item.descripcion}</p>
        <a class="boton-ver-receta" href="recetas/${item.id}.html">Ver receta</a>
    </div>
    `
})