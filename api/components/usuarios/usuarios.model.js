'use strict';

let mongoose = require('mongoose');

let usuarioModel = new mongoose.Schema({
    tipo_usuario: {type: String, required: true},
    identificacion: {type: String, required: true, unique: true},
    nombre: {type: String, required: true},
    segundo_nombre: {type: String},
    apellido: {type: String, required: true},
    segundo_apellido: {type: String},
    email: {type: String, required: true, unique: true},
    contrasena: {type: String, required: true},
    sexo: {type: String},
    fecha_nacimiento: {type: String},
    edad: {type: Number},
    nombre_empresa: {type: String},
    url_foto: {type: String},
    telefono: {type: String},
    direccion: {type: String}
});

module.exports = mongoose.model('usuario', usuarioModel, 'usuarios');