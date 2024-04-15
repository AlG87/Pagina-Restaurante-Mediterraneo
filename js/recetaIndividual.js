import  {platos}  from './platos.js'

const $Contenedor = document.querySelector(".contenedor_receta")

var rutaArchivo = document.location.pathname;
var nombreArchivo = rutaArchivo.split('/').pop();
var nombrePlato = nombreArchivo.split('.')[0];


platos.map(item => {
    if(nombrePlato == item.id){
        $Contenedor.innerHTML =  `
            <strong class="titulo_receta">${item.nombre}</strong>
            <div class="contenido_receta">
                <div>
                    <img src="../../IMG/img_platos/${item.id}.jpeg" alt="${item.nombre}">
                </div>
                <p class="info_preparacion">
                    ${item.preparacion}
                </p>
            </div>
            <a href="../recetas.html">
                <button class="boton_ver_mas">
                    Ver otras
                </button>
            </a>
        `
    }
})