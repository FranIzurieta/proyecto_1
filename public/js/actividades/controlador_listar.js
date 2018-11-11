'use strict';

let listaActividades = obtener_actividades();
let inputFiltro = document.querySelector('#txt_filtro');
let checkboxDeshabilitados = document.querySelector('#txt_deshabilitados');
let estado = 'Habilitado';

mostrar_actividades();

// Eventos de inputs para filtrar
// inputFiltro.addEventListener('keyup', mostrar_actividades);
// checkboxDeshabilitados.addEventListener('click', function(){
//     if (checkboxDeshabilitados.checked == true) {
//         estado = 'Deshabilitado';
//         mostrar_actividades();
//     } else {
//         estado = 'Habilitado';
//         mostrar_actividades();
//     }
// });

// Función para llenar la table de patrocinadores
function mostrar_actividades(){
    let tbody = document.querySelector('#tbl_actividades tbody');
    tbody.innerHTML = '';
    // console.log(listaActividades);
    

    for (let i = 0; i < listaActividades.length; i++) {
        let actividad = listaActividades[i];
        
        // Filtrar tabla
        if (actividad.nombre.toLowerCase().includes(inputFiltro.value.toLowerCase())) {
            
            // Crear fila
            let fila = tbody.insertRow();

            // Crear celdas
            let celdaNombre = fila.insertCell();
            let celdaPatrocinadores = fila.insertCell();
            let celdaAcciones = fila.insertCell();

            // Llenar celdas
            // let logo = new Image();
            // logo.src = actividad.logo;
            // logo.classList.add('logo');
            // celdaLogo.appendChild(logo);

            let nombreActividad = document.createElement('a');
            nombreActividad.href = 'perfil_actividad.html?id=' + actividad._id;
            // nombreActividad.dataset.id = actividad._id; 
            nombreActividad.innerHTML = actividad.nombre;

            celdaNombre.appendChild(nombreActividad);
            celdaPatrocinadores.innerHTML = actividad.patrocinadores.join(', ');
            
            // for (let i = 0; i < actividad.patrocinadores.length; i++) {
            //     const patrocinador = actividad.patrocinadores[i];
            //     console.log(patrocinador);
            //     celdaPatrocinadores.innerHTML += patrocinador + ', ';
            // }
            
            
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
            // celdaAcciones.appendChild(btn_editar);

            let btn_eliminar = document.createElement('button');
            btn_eliminar.type = 'button';
            btn_eliminar.classList.add('btn_accion', 'btn_eliminar');
            btn_eliminar.innerHTML = '<i class="fas fa-trash"></i>';
            celdaAcciones.appendChild(btn_eliminar);
        }
    }
};

// Contar patrocinadores registrados
// contar_patrocinadores();
// function contar_patrocinadores(){
//     let total = '';
//     let totalHabilitados = 0;
//     let totalDeshabilitados = 0;

//     for (let i = 0; i < listaActividades.length; i++) {
//         const patrocinador = listaActividades[i];
//         if (patrocinador.estado == 'Habilitado') {
//             totalHabilitados++;
//         } else {
//             totalDeshabilitados++;
//         }
//     }

//     total = totalHabilitados + totalDeshabilitados;
    
//     document.querySelector('#total').innerHTML = total;
//     document.querySelector('#total_habilitados').innerHTML = totalHabilitados;
//     document.querySelector('#total_deshabilitados').innerHTML = totalDeshabilitados;
// };

