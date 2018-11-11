'use strict';

const inputTipoUsuario = document.querySelector('#txt_tipoUsuario');
const inputIdentificacion = document.querySelector('#txt_identificacion');
const inputNombreEmpresa = document.querySelector('#txt_nombreEmpresa');
const inputNombre = document.querySelector('#txt_nombre');
const inputSegundoNombre = document.querySelector('#txt_segundoNombre');
const inputApellido = document.querySelector('#txt_apellido');
const inputSegundoApellido = document.querySelector('#txt_segundoApellido');
const inputFechaNacimiento = document.querySelector('#txt_fechaNacimiento');
const inputEdad = document.querySelector('#txt_edad');
// const inputSexo = document.querySelector('#txt_sexo');
const inputEmail = document.querySelector('#txt_email');
const inputContrasena = document.querySelector('#txt_contrasena');
const inputContrasena2 = document.querySelector('#txt_contrasena2');
const inputTelefono = document.querySelector('#txt_telefono');
const inputDireccion = document.querySelector('#txt_direccion');

let btnRegistrar = document.querySelector('#btn_registrar');
let btnCancelar = document.querySelector('#btn_cancelar');
let msgCampos = document.querySelector('#msg_campos');
let msgSexo = document.querySelector('#msg_sexo');

// Click en boton registrar
btnRegistrar.addEventListener('click', function(){
    let inputSexo = document.querySelectorAll('input[type=radio]');
    let pSexo = '';
    let pUrlFoto = 'https://i2.wp.com/drogaspoliticacultura.net/wp-content/uploads/2017/09/placeholder-user.jpg';
    let pContrasena = 'abc123';
    inputSexo.forEach(function(input){
        if (input.checked == true) {
            pSexo = input.value;
        }
    });
    
    let error = validar(inputTipoUsuario.value, inputIdentificacion.value, inputNombreEmpresa.value, 
        inputNombre.value, inputSegundoNombre.value, inputApellido.value, inputSegundoApellido.value, 
        inputFechaNacimiento.value, inputEdad.value, pSexo, inputEmail.value, inputTelefono.value, inputDireccion.value);
    // console.log(error);
    
    if (error) {
        // console.log('Error en la validación');
        msgCampos.classList.remove('ocultar');
    } else {
        // console.log('Validación correcta, enviar formulario');
        msgCampos.classList.add('ocultar');
        // swal({
        //     title: 'Registro éxitoso',
        //     type: 'success',
        //     showConfirmButton: false,
        //     text: 'Volviendo a la lista de usuarios...',
        //     timer: 3000,
        //     position: 'top',
        //     customClass: 'modal'
        // })

        // setTimeout(function(){
        //     location.href = 'usuarios.html';                
        // }, 3000);

        let respuesta = registrar_usuario(inputTipoUsuario.value, inputIdentificacion.value, inputNombreEmpresa.value, 
            inputNombre.value, inputSegundoNombre.value, inputApellido.value, inputSegundoApellido.value, 
            inputFechaNacimiento.value, inputEdad.value, pSexo, inputEmail.value, inputTelefono.value, inputDireccion.value, pUrlFoto, pContrasena);

            console.log(respuesta);
            
        
        if (respuesta.success) {
            swal({
                title: 'Registro éxitoso',
                type: 'success',
                showConfirmButton: false,
                text: 'Volviendo a la lista de usuarios...',
                timer: 3000,
                position: 'top',
                customClass: 'modal'
            })
    
            setTimeout(function(){
                location.href = 'usuarios.html';                
            }, 3000);
        } else {
            let error_code = respuesta.error.errmsg;
        
            // if (error_code.toLowerCase().includes('e11000') && error_code.toLowerCase().includes('nombre')) {
            //     msg_existe.innerHTML = 'Este patrocinador ya está registrado';
            //     msg_existe.classList.remove('ocultar');
            //     nombre.classList.add('border_error');
            // }
        }
        
    }
});

// Validar los campos
function validar(pTipoUsuario, pIdentificacion, pNombreEmpresa, pNombre, pSegundoNombre, pApellido, pSegundoApellido, 
    pFechaNacimiento, pEdad, pSexo, pEmail, pContrasena, pContrasena2, pTelefono, pDireccion){
    let regLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü ]+$/;
    let error = false;

    if (pIdentificacion == '') {
        error = true;
        inputIdentificacion.classList.add('border_error');
    } else {
        inputIdentificacion.classList.remove('border_error');
    }
    
    if ((pTipoUsuario == 'Cliente' || pTipoUsuario == 'Empresario físico') && pSexo == '') {
        error = true;
        msgSexo.classList.remove('ocultar');
    } else {
        msgSexo.classList.add('ocultar');
    }

    if (pTipoUsuario == 'Empresario jurídico' && pNombreEmpresa == '') {
        error = true;
        inputNombreEmpresa.classList.add('border_error');
    } else {
        inputNombreEmpresa.classList.remove('border_error');
    }

    if (pNombre == '') {
        error = true;
        inputNombre.classList.add('border_error');
    } else {
        inputNombre.classList.remove('border_error');
    }

    if (pApellido == '') {
        error = true;
        inputApellido.classList.add('border_error');
    } else {
        inputApellido.classList.remove('border_error');
    }

    if ((pTipoUsuario == 'Empresario físico' || pTipoUsuario == 'Cliente') && pFechaNacimiento == '') {
        error = true;
        inputFechaNacimiento.classList.add('border_error');
    } else {
        inputFechaNacimiento.classList.remove('border_error');
    }

    if ((pTipoUsuario == 'Cliente' && pEdad < 15) || (pTipoUsuario == 'Empresario físico' && pEdad < 18)) {
        error = true;
        inputEdad.classList.add('border_error');
    } else {
        inputEdad.classList.remove('border_error');
    }

    if (pEmail == '') {
        error = true;
        inputEmail.classList.add('border_error');
    } else {
        inputEmail.classList.remove('border_error');
    }

    // if (pContrasena == '') {
    //     error = true;
    //     inputContrasena.classList.add('border_error');
    // } else {
    //     inputContrasena.classList.remove('border_error');
    // }

    // if (pContrasena2 == '') {
    //     error = true;
    //     inputContrasena2.classList.add('border_error');
    // } else {
    //     inputContrasena2.classList.remove('border_error');
    // }

    // if ((pContrasena != '' && pContrasena2 != '') && pContrasena != pContrasena2) {
    //     error = true;
    //     inputContrasena.classList.add('border_error');
    //     inputContrasena2.classList.add('border_error');
    // }

    if (pTipoUsuario != 'Cliente' && pTelefono == '') {
        error = true;
        inputTelefono.classList.add('border_error');
    } else {
        inputTelefono.classList.remove('border_error');
    }

    if (pTipoUsuario != 'Cliente' && pDireccion == '') {
        error = true;
        inputDireccion.classList.add('border_error');
    } else {
        inputDireccion.classList.remove('border_error');
    }

    return error;
};

// Click en boton cancelar
btnCancelar.addEventListener('click', function(){
    window.location.href = 'usuarios.html';
});

// Mostrar/ocultar campos del formulario
let formControls = document.querySelectorAll('#formulario_registro .form_control');
let formBotones = document.querySelector('#formulario_registro .form_botones');

// formControls.forEach(function(formControl){
//     if (formControl.children[1].id != 'txt_tipoUsuario') {
//         formControl.classList.add('ocultar');
//     }
// });

formBotones.classList.add('ocultar');

document.querySelector('#txt_tipoUsuario').addEventListener('change', function(){
    msgCampos.classList.add('ocultar');
    document.querySelector('#formulario_registro').classList.remove('ocultar');
    formControls.forEach(function(formControl){
        formControl.children[1].classList.remove('border_error');
    });
    let tipoUsuario = this.value;

    switch (tipoUsuario) {
        case 'Empresario jurídico':
            formControls.forEach(function(formControl){
                formControl.classList.remove('ocultar');
                formBotones.classList.remove('ocultar');
                if (formControl.children[1].id == 'form_sexo' || formControl.children[1].id == 'txt_fechaNacimiento' || formControl.children[1].id == 'txt_edad') {
                    formControl.classList.add('ocultar');
                }
            });
        break;

        case 'Empresario físico':
            formControls.forEach(function(formControl){
                formControl.classList.remove('ocultar');
                formBotones.classList.remove('ocultar');
                if (formControl.children[1].id == 'txt_nombreEmpresa') {
                    formControl.classList.add('ocultar');
                }
            });
        break;

        case 'Cliente':
            formControls.forEach(function(formControl){
                formControl.classList.remove('ocultar');
                formBotones.classList.remove('ocultar');
                if (formControl.children[1].id == 'txt_nombreEmpresa' || formControl.children[1].id == 'txt_telefono' || formControl.children[1].id == 'txt_direccion') {
                    formControl.classList.add('ocultar');
                }
            });
        break;

    
        default: '';
        break;
    }
});

// Calcular edad automáticamente
inputFechaNacimiento.addEventListener('change', function(){
    let fechaActual = new Date();
    let fechaNacimiento = new Date(inputFechaNacimiento.value);
    fechaNacimiento.setDate(fechaNacimiento.getDate() + 1);

    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    if (fechaNacimiento.getDate() > fechaActual.getDate() && fechaNacimiento.getMonth() == fechaActual.getMonth()) {
        edad--;
    }

    if (fechaNacimiento.getMonth() > fechaActual.getMonth()) {
        edad--;
    }

    inputEdad.value = edad;
});


