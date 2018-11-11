'use strict';

function obtener_actividades(){
    let lista_actividades = [];

    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listar_actividades',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
        }
    });

    peticion.done(function(response){
        lista_actividades = response;
    });

    peticion.fail(function(response){

    });

    return lista_actividades;
};

function obtener_actividad(id){
    let actividad = [];

    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listar_actividad',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
            id: id
        }
    });

    peticion.done(function(response){
        actividad = response;
    });

    peticion.fail(function(response){
        actividad = response;
    });

    return actividad;
};

function registrar_actividad(pNombre, pPatrocinadores){
    let respuesta = '';

    console.log(pPatrocinadores);
    
    
    // let peticion = $.ajax({
    //     url: 'http://localhost:4000/api/registrar_actividad',
    //     type: 'post',
    //     contentType: 'application/x-www-form-urlencoded; charset=utf-8',
    //     dataType: 'json',
    //     async: false,
    //     data: {
    //        nombre: pNombre,
    //        patrocinadores: pPatrocinadores
    //     }
    //   });

    //   peticion.done(function(response){
    //     respuesta = response;
    //   });
    
    //   peticion.fail(function(response){
    //     respuesta = response;
    //   });

    //  return respuesta; 
};