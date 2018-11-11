'use strict';

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

function registrar_industria(pNombre){
    let respuesta = '';
    
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/registrar_industria',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
           nombre: pNombre
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