'use strict';

let nombreActividad = document.querySelector('#nombre');
let listaPatrocinadores = document.querySelector('#patrocinadores');
var url = location.href;
var id = url.substring(url.lastIndexOf('=') + 1);
console.log(id);

mostrar_actividad();


// Crear la información de la actividad
function mostrar_actividad(){
    let actividad = obtener_actividad(id)[0];

    // console.log(actividad);
    

    nombreActividad.innerHTML = actividad.nombre;
    
    for (let i = 0; i < actividad.patrocinadores.length; i++) {
        const patrocinador = actividad.patrocinadores[i];
        let li = document.createElement('li');
        li.innerHTML = patrocinador;
        listaPatrocinadores.appendChild(li);
    }
};
