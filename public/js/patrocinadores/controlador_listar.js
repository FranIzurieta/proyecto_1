'use strict';

let listaPatrocinadores = obtener_patrocinadores();
let inputFiltro = document.querySelector('#txt_filtro');
let checkboxDeshabilitados = document.querySelector('#txt_deshabilitados');
let estado = 'Habilitado';

mostrar_patrocinadores();

// Eventos de inputs para filtrar
inputFiltro.addEventListener('keyup', mostrar_patrocinadores);
checkboxDeshabilitados.addEventListener('click', function(){
    if (checkboxDeshabilitados.checked == true) {
        estado = 'Deshabilitado';
        mostrar_patrocinadores();
    } else {
        estado = 'Habilitado';
        mostrar_patrocinadores();
    }
});

// Función para llenar la table de patrocinadores
function mostrar_patrocinadores(){
    let tbody = document.querySelector('#tbl_patrocinadores tbody');
    tbody.innerHTML = '';

    for (let i = 0; i < listaPatrocinadores.length; i++) {
        let patrocinador = listaPatrocinadores[i];
        
        // Filtrar tabla
        if (patrocinador.nombre.toLowerCase().includes(inputFiltro.value.toLowerCase()) && patrocinador.estado == estado) {
            
            // Crear fila
            let fila = tbody.insertRow();

            // Crear celdas
            let celdaLogo = fila.insertCell();
            let celdaNombre = fila.insertCell();
            let celdaIndustria = fila.insertCell();
            let celdaEstado = fila.insertCell();
            let celdaAcciones = fila.insertCell();

            // Llenar celdas
            let logo = new Image();
            logo.src = patrocinador.logo;
            logo.classList.add('logo');
            celdaLogo.appendChild(logo);

            celdaNombre.innerHTML = patrocinador.nombre;
            celdaIndustria.innerHTML = patrocinador.industria;
            celdaEstado.innerHTML = patrocinador.estado;
            
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

// Contar patrocinadores registrados
contar_patrocinadores();
function contar_patrocinadores(){
    let total = '';
    let totalHabilitados = 0;
    let totalDeshabilitados = 0;

    for (let i = 0; i < listaPatrocinadores.length; i++) {
        const patrocinador = listaPatrocinadores[i];
        if (patrocinador.estado == 'Habilitado') {
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