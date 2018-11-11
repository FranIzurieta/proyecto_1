'use strict';

function registrar_usuario(pTipoUsuario, pIdentificacion, pNombreEmpresa, pNombre, pSegundoNombre, pApellido, pSegundoApellido, pFechaNacimiento, pEdad, pSexo, pEmail, pTelefono, pDireccion, pUrlFoto, pContrasena){
    let respuesta = '';
    
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/registrar_usuario',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
            tipo_usuario: pTipoUsuario,
            identificacion: pIdentificacion,
            nombre: pNombre,
            segundo_nombre: pSegundoNombre,
            apellido: pApellido,
            segundo_apellido: pSegundoApellido,
            email: pEmail,
            contrasena: pContrasena,
            sexo: pSexo,
            fecha_nacimiento: pFechaNacimiento,
            edad: pEdad,
            nombre_empresa: pNombreEmpresa,
            url_foto: pUrlFoto,
            telefono: pTelefono,
            direccion: pDireccion 
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

// function obtener_patrocinadores(){
//     let lista_patrocinadores = [];

//     let peticion = $.ajax({
//         url: 'http://localhost:4000/api/listar_patrocinadores',
//         type: 'get',
//         contentType: 'application/x-www-form-urlencoded; charset=utf-8',
//         dataType: 'json',
//         async: false,
//         data: {
//         }
//     });

//     peticion.done(function(response){
//         lista_patrocinadores = response;
//     });

//     // peticion.fail(function(response){

//     // });
    
//     return lista_patrocinadores;
// };

// Obtener lista de industrias
// function obtener_industrias(){
//     let lista_industrias = [];

//     let peticion = $.ajax({
//         url: 'http://localhost:4000/api/listar_industrias',
//         type: 'get',
//         contentType: 'application/x-www-form-urlencoded; charset=utf-8',
//         dataType: 'json',
//         async: false,
//         data: {
//         }
//     });

//     peticion.done(function(response){
//         lista_industrias = response;
//     });

//     peticion.fail(function(response){

//     });
    
//     return lista_industrias;
// };
