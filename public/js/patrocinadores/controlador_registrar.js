'use strict';

let nombre = document.querySelector('#txt_nombre');
let inputIndustria = document.querySelector('#txt_industria');
let logo = document.querySelector('#txt_logo');
let btnRegistrar = document.querySelector('#btn_registrar');
let btnCancelar = document.querySelector('#btn_cancelar');
let msgCampos = document.querySelector('#msg_campos');
let msgExiste = document.querySelector('#msg_existe');
let btnSubirFoto = document.querySelector('#btn_subirFoto');
let inputSubirFoto = document.querySelector('#input_subirFoto');
let imgLogoPatrocinador = document.querySelector('#logo_patrocinador');
const cloudName = 'dsgdh80vy';
const unsignedUploadPreset = 'proyecto1';
let archivo = '';

// Mostrar selección de imagen
btnSubirFoto.addEventListener('click', function(){
    inputSubirFoto.click();    
});

// On change
inputSubirFoto.addEventListener('change', function(){
    archivo = inputSubirFoto.files[0];
    if (archivo != null) {
        subirFoto(archivo);
    }
});

// Función para subir foto. Recibe el archivo
function subirFoto(archivo){
    let url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
    let xhr = new XMLHttpRequest();
    let fd = new FormData();

    xhr.open('POST', url, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    xhr.onreadystatechange = function(e){
        if (xhr.readyState == 4 && xhr.status == 200) {
            let res = JSON.parse(xhr.responseText);
            let url = res.secure_url;
            let logo = document.querySelector('#logo_patrocinador');
            logo.src = url;
            document.querySelector('#logo_patrocinador').style.display = 'block';
        }
    };

    fd.append('upload_preset', unsignedUploadPreset);
    fd.append('tags', 'browser_upload'); // Optional - add tag for image admin in Cloudinary
    fd.append('file', archivo);
    xhr.send(fd);
};

// Click en boton registrar
btnRegistrar.addEventListener('click', function(){
    let error = validar(nombre.value, inputIndustria.value);
    // let pUrl = 'https://pngimage.net/wp-content/uploads/2018/06/logo-placeholder-png.png';
    
    if (error) {
        // console.log('Error en la validación');
        msgCampos.classList.remove('ocultar');
    } else {
        msgCampos.classList.add('ocultar');
        let respuesta = registrar_patrocinador(imgLogoPatrocinador.src, nombre.value, inputIndustria.value);
        
        if (respuesta.success) {
            swal({
                title: 'Registro éxitoso',
                type: 'success',
                showConfirmButton: false,
                text: 'Volviendo a la lista de patrocinadores...',
                timer: 3000,
                position: 'top',
                customClass: 'modal'
            })
    
            setTimeout(function(){
                location.href = 'patrocinadores.html';                
            }, 3000);
        } else {
            let error_code = respuesta.error.errmsg;
        
            if (error_code.toLowerCase().includes('e11000') && error_code.toLowerCase().includes('nombre')) {
                msgExiste.innerHTML = 'Este patrocinador ya está registrado';
                msgExiste.classList.remove('ocultar');
                nombre.classList.add('border_error');
            }
        }
    }
});

// Validar los campos
function validar(pNombre, pIndustria){
    // let regLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü ]+$/;
    let error = false;

    if (pNombre == '') {
        error = true;
        nombre.classList.add('border_error');
    } else {
        nombre.classList.remove('border_error');
    }

    if (pIndustria == '') {
        error = true;
        inputIndustria.classList.add('border_error');
    } else {
        inputIndustria.classList.remove('border_error');
    }

    return error;
};

// Click en boton cancelar
btnCancelar.addEventListener('click', function(){
    window.location.href = 'patrocinadores.html';
});

// Llenar select de industrias
let listaIndustrias = obtener_industrias();

for (let i = 0; i < listaIndustrias.length; i++) {
    let industria = listaIndustrias[i].nombre;
    let option = document.createElement('option');
    option.innerHTML = industria;
    option.value = industria;
    // console.log(option);
    inputIndustria.appendChild(option);
}

