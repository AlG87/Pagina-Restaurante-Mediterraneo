import  {platos}  from './platos.js'
        
const MAIN = document.querySelector("main")

platos.map(item => {
    MAIN.innerHTML += `
        <div class="contenedor">
            <div class="info-plato">
                <strong>${item.nombre}</strong>
                <span>${item.descripcion}</span>
                <strong>${item.precio} COP</strong>
            </div>
            <div class="img-plato-container">
                <img src="../IMG/img_platos/${item.id}.jpeg" alt="${item.nombre}">
            </div>
        </div>
    `
})