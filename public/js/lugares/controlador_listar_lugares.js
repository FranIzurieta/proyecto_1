'use strict';

const inputFiltrar = document.querySelector('#filtro_lugar'); 

const listaLugares = obtener_lugares();

mostrar_lugares();

inputFiltrar.addEventListener('keyup', mostrar_lugares)

function mostrar_lugares(){
    let filtro = inputFiltrar.value;
    let tbody = document.querySelector('#tabla_libros tbody');
    tbody.innerHTML = '';

    for(let i=0; i<listaLugares.length; i++){
        if(listaLugares[i]['nombre'].toLowerCase().includes(filtro.toLowerCase()) || listaLugares[i]['categoria'].toLowerCase().includes(filtro.toLowerCase()) || listaLugares[i]['provincia'].toLowerCase().includes(filtro.toLowerCase()) || listaLugares[i]['canton'].toLowerCase().includes(filtro.toLowerCase()) || listaLugares[i]['distrito'].toLowerCase().includes(filtro.toLowerCase())){
            let fila = tbody.insertRow();

            let celdaNombre = fila.insertCell();
            let celdaDescripcion = fila.insertCell();
            let celdaCategoria = fila.insertCell();
            let celdaEtiqueta = fila.insertCell();
            let celdaProvincia = fila.insertCell();
            let celdaCanton = fila.insertCell();
            let celdaDistrito = fila.insertCell();
            let celdaSenas = fila.insertCell();

            celdaNombre.innerHTML = listaLugares[i]['nombre'];
            celdaDescripcion.innerHTML = listaLugares[i]['descripcion'];
            celdaCategoria.innerHTML = listaLugares[i]['categoria'];
            celdaEtiqueta.innerHTML = listaLugares[i]['etiqueta'];
            celdaProvincia.innerHTML = listaLugares[i]['provincia'];
            celdaCanton.innerHTML = listaLugares[i]['canton'];
            celdaDistrito.innerHTML = listaLugares[i]['distrito'];
            celdaSenas.innerHTML = listaLugares[i]['senas'];
        }
    }
};