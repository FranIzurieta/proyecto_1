'use strict';

let usuarioModel = require('./usuarios.model');

// Funcion registrar
module.exports.registrar = function(req, res){ 
    // Crear el nuevo registro basado en el modelo
    let nuevoUsuario = new usuarioModel({
        tipo_usuario: req.body.tipo_usuario,
        identificacion: req.body.identificacion,
        nombre: req.body.nombre,
        segundo_nombre: req.body.segundo_nombre,
        apellido: req.body.apellido,
        segundo_apellido: req.body.segundo_apellido,
        email: req.body.email,
        contrasena: req.body.contrasena,
        sexo: req.body.sexo,
        fecha_nacimiento: req.body.fecha_nacimiento,
        edad: req.body.edad,
        nombre_empresa: req.body.nombre_empresa,
        url_foto: req.body.url_foto,
        telefono: req.body.telefono,
        direccion: req.body.direccion 
    });

    // Guardar el registro creado en MongoDB
    nuevoUsuario.save(function(error){
        if (error) {
            res.json({
                success: false,
                msg: 'No se pudo registrar el usuario',
                error: error
            });
        } else {
            res.json({
                success: true,
                msg: 'El usuario se registró con éxito'
            });
        }
    });
};

// Función lista
module.exports.listar = function(req, res){
    usuarioModel.find().then(function(usuarios){
        res.send(usuarios);
    });
};