'use strict';

[].forEach.call(document.getElementsByClassName('input_etiquetas'), function(elemento){
    let inputOculto = document.createElement('input');
    let inputPrincipal = document.createElement('input');
    let etiquetas = [];
    
    inputOculto.setAttribute('type', 'hidden');
    inputOculto.setAttribute('id', 'etiquetas_lugar');
    inputOculto.setAttribute('name', elemento.getAttribute('data-name'));
    
    inputPrincipal.setAttribute('placeholder', 'Separadas por coma');
    inputPrincipal.setAttribute('type', 'text');
    inputPrincipal.classList.add('input_principal');

    inputPrincipal.addEventListener('input', function () {
        let etiquetasIntroducidas = inputPrincipal.value.split(',');
        if (etiquetasIntroducidas.length > 1) {
            etiquetasIntroducidas.forEach(function(t){
                let etiquetasFiltradas = filtro_etiquetas(t);
                if (etiquetasFiltradas.length > 0)
                    agregar_etiqueta(etiquetasFiltradas);
            });
            inputPrincipal.value = '';
        }
    });

    inputPrincipal.addEventListener('keydown', function(e){  //buscar que es e
        let clave = e.which || e.keyCode;
        if (clave === 8 && inputPrincipal.value.length === 0 && etiquetas.length > 0) {
            remover_etiqueta(etiquetas.length - 1);
        }
    });

    elemento.appendChild(inputPrincipal);
    elemento.appendChild(inputOculto);

    // agregar_etiqueta('hello!');

    function agregar_etiqueta(texto){
        let etiqueta = {
            texto: texto,
            element: document.createElement('span'),
        };

        etiqueta.element.classList.add('etiqueta');
        etiqueta.element.textContent = etiqueta.texto;

        let botonEliminar = document.createElement('span');
        botonEliminar.classList.add('eliminar');
        botonEliminar.addEventListener('click', function(){
            remover_etiqueta(etiquetas.indexOf(etiqueta));
        });
        etiqueta.element.appendChild(botonEliminar);

        etiquetas.push(etiqueta);

        elemento.insertBefore(etiqueta.element, inputPrincipal);

        refrescar_etiquetas();
    }

    function remover_etiqueta(i){
        let etiqueta = etiquetas[i];
        etiquetas.splice(i, 1);
        elemento.removeChild(etiqueta.element);
        refrescar_etiquetas();
    }

    function refrescar_etiquetas(){
        let listaEtiquetas = [];
        etiquetas.forEach(function (t) {
            listaEtiquetas.push(t.texto);
        });
        inputOculto.value = listaEtiquetas.join(',');
    }

    function filtro_etiquetas(etiqueta){
        return etiqueta.replace(/[^\w -]/g, '').trim().replace(/\W+/g, '-');
    }
}); //Tiene que estar arriba aguevo xD

let inputNombre = document.querySelector('#nombre_lugar');
let inputDescripcion = document.querySelector('#descripcion_lugar');
let inputCategoria = document.querySelector('#categoria_lugar');
let inputEtiquetas = document.querySelector('#etiquetas_lugar');
let inputEtiquetasPrincipal = document.querySelector('#input_etiquetas');
let inputProvincia = document.querySelector('#provincias');
let inputCanton = document.querySelector('#cantones');
let inputDistrito = document.querySelector('#distritos');
let inputSenas = document.querySelector('#senas_lugar');
let botonRegistrar = document.querySelector('#btn_registrar');
let botonCancelar = document.querySelector('btn_cancelar');

botonRegistrar.addEventListener('click', obtener_datos);

function separar_etiquetas(){
    let valor = inputEtiquetas.value;
    let etiquetas = valor.split(',');
    let arregloEtiquetas = [];

    for(let i=0; i<etiquetas.length; i++){
        arregloEtiquetas[i] = etiquetas[i];
    };

    return arregloEtiquetas;
};

function obtener_datos(){
    
    let nombre = inputNombre.value;
    let descripcion = inputDescripcion.value;
    let categoria = inputCategoria.value;
    let etiquetas = separar_etiquetas();
    let provincia = inputProvincia.value;
    let canton = inputCanton.value;
    let distrito = inputDistrito.value;
    let senas = inputSenas.value;
    
    let estadoError = validar(nombre, descripcion, categoria, etiquetas, provincia, canton, distrito, senas);
    
    if(estadoError == true){
        swal({
            title: 'Datos inválidos',
            text: 'No se pudo registrar el lugar, revise los espacios resaltados',
            type: 'warning',
            timer: 3000,
            showConfirmButton: false,
        });
    }else{
        let respuesta = registrar_lugar(nombre, descripcion, categoria, etiquetas, facebook, twitter, instagram, provincia, canton, distrito, senas);
        if(respuesta.success == true){
            swal({
                title: 'Registro correcto',
                text: respuesta.msg,
                type: 'success',
                timer: 3000,
                showConfirmButton: false,
            });
        }else{
            swal({
                title: 'Registro incorrecto',
                text: respuesta.msg,
                type: 'error',
                confirmButtonText: 'Entendido'
            });
        }
    }
}

function validar(pnombre, pdescripcion, pcategoria, petiquetas, pprovincia, pcanton, pdistrito, psenas){
    
    let error = false;
    let expRegNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ. 0-9]+$/;

    if(pnombre == '' || expRegNombre.test(pnombre) == false){
        inputNombre.classList.add('errorInput');
        error = true;
    }else{
        inputNombre.classList.remove('errorInput');
    }

    if(pdescripcion == ''){
        inputDescripcion.classList.add('errorInput');
        error = true;
    }else{
        inputDescripcion.classList.remove('errorInput');
    }

    if(pcategoria == ''){
        inputCategoria.classList.add('errorInput');
        error = true;
    }else{
        inputCategoria.classList.remove('errorInput');        
    }

    if(petiquetas == ''){
        inputEtiquetasPrincipal.classList.add('errorInput');
        error = true;
    }else{
        inputEtiquetasPrincipal.classList.remove('errorInput');
    }

    if(pprovincia == ''){
        inputProvincia.classList.add('errorInput');
        error = true;
    }else{
        inputProvincia.classList.remove('errorInput');
    }

    if(pcanton == ''){
        inputCanton.classList.add('errorInput');
        error = true;
    }else{
        inputCanton.classList.remove('errorInput');
    }
    
    if(pdistrito == ''){
        inputDistrito.classList.add('errorInput');
        error = true;
    }else{
        inputDistrito.classList.remove('errorInput');
    }

    if(psenas == ''){
        inputSenas.classList.add('errorInput');
    }else{
        inputSenas.classList.remove('errorInput');
    }

    return error;
};