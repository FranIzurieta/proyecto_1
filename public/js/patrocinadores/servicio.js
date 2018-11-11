'use strict';

function registrar_patrocinador(pUrl, pNombre, pIndustria){
    let respuesta = '';
    
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/registrar_patrocinador',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
           logo: pUrl,
           nombre: pNombre,
           industria: pIndustria
        }
      });

      peticion.done(function(response){
        respuesta = response;
      });
    
      peticion.fail(function(response){
        respuesta = response;
      });

     return respuesta; 
};

function obtener_patrocinadores(){
    let lista_patrocinadores = [];

    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listar_patrocinadores',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
        }
    });

    peticion.done(function(response){
        lista_patrocinadores = response;
    });

    // peticion.fail(function(response){

    // });
    
    return lista_patrocinadores;
};

// Obtener lista de industrias
function obtener_industrias(){
    let lista_industrias = [];

    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listar_industrias',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
        }
    });

    peticion.done(function(response){
        lista_industrias = response;
    });

    peticion.fail(function(response){

    });
    
    return lista_industrias;
};
