'use strict';

const inputFiltrar = document.querySelector('#txt_filtro');

let listaCategorias = obtener_categorias();

mostrar_lista_categorias();

inputFiltrar.addEventListener('keyup', mostrar_lista_categorias);

function mostrar_lista_categorias(){
    let filtro = inputFiltrar.value;

    let tbody = document.querySelector('#tbl_categorias tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaCategorias.length; i++){
        if(listaCategorias[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())){
            let fila = tbody.insertRow();

        let celdaNombre = fila.insertCell();
        let celdaDescripcion = fila.insertCell();

        celdaNombre.innerHTML = listaCategorias[i]['nombre'];
        celdaDescripcion.innerHTML = listaCategorias[i]['descripcion'];
        }
    }
};

