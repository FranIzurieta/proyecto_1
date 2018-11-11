'use strict';

const botonRegistrar = document.querySelector('#btn_registrar');
const btnCancelar = document.querySelector('#btn_cancelar');
const inputNombre = document.querySelector('#txt_nombre');
const inputDescripcion = document.querySelector('#txt_descripcion');

botonRegistrar.addEventListener('click' , obtener_datos);

function obtener_datos(){
    let bError = false;
    let sNombre = inputNombre.value;
    let sDescripcion = inputDescripcion.value;

    bError = validar(sNombre, sDescripcion);
    
    if(bError == true){
        swal({
            title: 'Registro incorrecto',
            text: 'No se pudo registrar la categoría, revise los campos en rojo',
            type: 'warning',
            confirmButtonText: 'Entendido'
          });
    }else{
        let respuesta = registrar_categoria(sNombre , sDescripcion);
        if(respuesta.success == true){
            swal({
                title: 'Registro correcto',
                text: 'Categoría registrada con éxito, volviendo a la lista de categorías...',
                type: 'success',
                showConfirmButton: false,
                timer: 3000,
              });
              setTimeout(function(){
                  location.href = 'categorias.html';
              }, 3000);
        }else{
            swal({
                title: 'Registro incorrecto',
                text: 'Ya la categoría existe',
                type: 'error',
                confirmButtonText: 'Entendido'
              });
        }
    }
  
};


function validar(vNombre, vDescripcion){
    let error = false;
    let expNombre= /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ ]+$/;
    let expDescripcion= /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ ]+$/;

   if(vNombre == '' || expNombre.test(vNombre)==false){
        inputNombre.classList.add('error_input');
        error = true;
    }else{
        inputNombre.classList.remove('error_input');
    }
    if(vDescripcion == '' || expDescripcion.test(vNombre)==false){
        inputDescripcion.classList.add('error_input');
        error = true;
    }else{
        inputDescripcion.classList.remove('error_input');
    }

    return error;
};

// Click en boton cancelar
btnCancelar.addEventListener('click', function(){
    window.location.href = 'categorias.html';
});
