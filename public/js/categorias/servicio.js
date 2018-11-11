'use strict';

function registrar_categoria(pNombre , pDescripcion){
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/registrar_categoria',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
           nombre : pNombre,
           descripcion : pDescripcion,
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

function obtener_categorias(){
  let listaCategorias = [];
  let peticion = $.ajax({
      url: 'http://localhost:4000/api/listar_categorias',
      type: 'get',
      contentType: 'application/x-www-form-urlencoded; charset=utf-8',
      dataType : 'json',
      async:false,
      data:{
      }
    });
  
    peticion.done(function(response){
      listaCategorias = response;
    });
  
    peticion.fail(function(){
     
    });

  return listaCategorias;
};