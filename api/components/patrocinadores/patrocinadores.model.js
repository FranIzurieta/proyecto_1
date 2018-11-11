'use strict';

// Llamar a Mongoose
let mongoose = require('mongoose');

// Crear Schema
let patrocinadorSchema = new mongoose.Schema({
    logo: {type: String, required: true},
    nombre: {type: String, unique: true, required: true},
    industria: {type: String, required: true},
    estado: {type: String, required: true}
});

// Exportar Schema
module.exports = mongoose.model('patrocinador', patrocinadorSchema, 'patrocinadores');
