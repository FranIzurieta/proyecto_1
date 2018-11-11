'use strict';
const selectProvincias = document.querySelector('#provincias');
const selectCantones = document.querySelector('#cantones');
const selectDistritos = document.querySelector('#distritos');

let provincias = obtener_provincias();
let cantones = obtener_cantones();
let distritos = obtener_distritos();

llenarProvincias();

selectProvincias.addEventListener('change', function(){    
    llenarCantones(this.value);
});

selectCantones.addEventListener('change', function(){
        llenarDistritos(this.value);
});

function llenarProvincias() {

    for (let i = 0; i < provincias.length; i++) {
        let opcion = new Option(provincias[i].nombre);
        opcion.value = provincias[i].idProvincia;
        selectProvincias.appendChild(opcion);
    }
};

function llenarCantones(pprovincia) {
    selectCantones.innerHTML = '';


    for (let i = 0; i < cantones.length; i++) {
        if (pprovincia == cantones[i].Provincia_idProvincia){
            let opcion = new Option(cantones[i].nombre);
            opcion.value = cantones[i].idCanton;
            selectCantones.appendChild(opcion);
        }
    }
};

function llenarDistritos(pcanton) {
    selectDistritos.innerHTML = '';

    for (let i = 0; i < distritos.length; i++) {
        if (pcanton == distritos[i].Canton_idCanton){
            let opcion = new Option(distritos[i].nombre);
            opcion.value = distritos[i].idDistrito;
            selectDistritos.appendChild(opcion);
        }    
    }

};