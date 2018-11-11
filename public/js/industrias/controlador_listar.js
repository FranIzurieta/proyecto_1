'use strict';

let listaIndustrias = obtener_industrias();
let inputFiltro = document.querySelector('#txt_filtro');
let checkboxDeshabilitados = document.querySelector('#txt_deshabilitados');
let estado = 'Habilitado';

// Eventos para filtrar
inputFiltro.addEventListener('keyup', mostrar_industrias);
checkboxDeshabilitados.addEventListener('click', function(){
    if (checkboxDeshabilitados.checked == true) {
        estado = 'Deshabilitado';
        mostrar_industrias();
    } else {
        estado = 'Habilitado';
        mostrar_industrias();
    }
});

mostrar_industrias();
function mostrar_industrias(){
    let tbody = document.querySelector('#tbl_industrias tbody');
    tbody.innerHTML = '';

    for (let i = 0; i < listaIndustrias.length; i++) {
        let filtro = inputFiltro.value;
        let industria = listaIndustrias[i];
        
        if (industria.nombre.toLowerCase().includes(filtro.toLowerCase()) && industria.estado == estado) {
            // Crear fila
            let fila = tbody.insertRow();
    
            // Crear celdas
            let celdaNombre = fila.insertCell();
            let celdaEstado = fila.insertCell();
            let celdaAcciones = fila.insertCell();
    
            // Llenar celdas
            celdaNombre.innerHTML = industria.nombre;
            celdaEstado.innerHTML = industria.estado;
            
            celdaAcciones.classList.add('td_acciones');
    
            let btn_deshabilitar = document.createElement('button');
            btn_deshabilitar.type = 'button';
            btn_deshabilitar.classList.add('btn_accion', 'btn_deshabilitar');
            btn_deshabilitar.innerHTML = 'Deshabilitar';
            celdaAcciones.appendChild(btn_deshabilitar);
    
            let btn_editar = document.createElement('button');
            btn_editar.type= 'button';
            btn_editar.classList.add('btn_accion', 'btn_editar');
            btn_editar.innerHTML = '<i class="fas fa-edit"></i>';
            celdaAcciones.appendChild(btn_editar);
    
            let btn_eliminar = document.createElement('button');
            btn_eliminar.type = 'button';
            btn_eliminar.classList.add('btn_accion', 'btn_eliminar');
            btn_eliminar.innerHTML = '<i class="fas fa-trash"></i>';
            celdaAcciones.appendChild(btn_eliminar);
        }
    }
};

// Contar cantidad de industrias
contar_industrias();
function contar_industrias(){
    let total = '';
    let totalHabilitados = 0;
    let totalDeshabilitados = 0;

    for (let i = 0; i < listaIndustrias.length; i++) {
        const industria = listaIndustrias[i];
        if (industria.estado == 'Habilitado') {
            totalHabilitados++;
        } else {
            totalDeshabilitados++;
        }
    }

    total = totalHabilitados + totalDeshabilitados;
    
    document.querySelector('#total').innerHTML = total;
    document.querySelector('#total_habilitados').innerHTML = totalHabilitados;
    document.querySelector('#total_deshabilitados').innerHTML = totalDeshabilitados;
};