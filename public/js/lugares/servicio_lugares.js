'use strict';

function registrar_lugar(pnombre, pdescripcion, pcategoria, petiqueta, pprovincia, pcanton, pdistrito, psenas){
    
    let respuesta = '';
    let peticion = $.ajax({
      url: 'http://localhost:4000/api/registrar_lugar', 
      type: 'post',
      contentType: 'application/x-www-form-urlencoded; charset=utf-8',
      dataType : 'json',
      async:false,
      data:{
        nombre: pnombre,
        descripcion: pdescripcion,
        categoria: pcategoria,
        etiqueta: petiqueta,
        provincia: pprovincia,
        canton: pcanton,
        distrito: pdistrito,
        senas: psenas
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

function obtener_lugares(){
  let listaLugares = [];
  let peticion = $.ajax({
    url: 'http://localhost:4000/api/listar_lugar',
    type: 'get',
    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
    dataType : 'json',
    async:false,
    data:{
    }
  });
  
  peticion.done(function(response){
    listaLugares = response;
  });
    
  return listaLugares;
};