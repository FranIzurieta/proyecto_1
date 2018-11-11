'use strict';

let nombre = document.querySelector('#txt_nombre');
let btnRegistrar = document.querySelector('#btn_registrar');
let btnCancelar = document.querySelector('#btn_cancelar');
let msgCampos = document.querySelector('#msg_campos');
let msgExiste = document.querySelector('#msg_existe');

// Click en boton registrar
btnRegistrar.addEventListener('click', function(){
    let error = validar(nombre.value);
    
    if (error) {
        msgCampos.classList.remove('ocultar');
    } else {
        let respuesta = registrar_industria(nombre.value);
        
        if (respuesta.success) {
            swal({
                title: 'Registro éxitoso',
                type: 'success',
                showConfirmButton: false,
                text: 'Volviendo a la lista de industrias...',
                timer: 3000,
                position: 'top',
                customClass: 'modal'
            })

            setTimeout(function(){
                location.href = 'industrias.html';                
            }, 2900);

        } else {
            msgExiste.innerHTML = 'Esta industria ya está registrada';
            msgExiste.classList.remove('ocultar');
        }
        
    }
});

// Validar los campos
function validar(pNombre){
    let regLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü ]+$/;
    let error = false;

    if (pNombre == '' || regLetras.test(pNombre) == false) {
        error = true;
        nombre.classList.add('border_error');
    } else {
        nombre.classList.remove('border_error');
    }

    return error;
};

// Click en boton cancelar
btnCancelar.addEventListener('click', function(){
    window.location.href = 'industrias.html';
});
