'use strict';

let mongoose = require('mongoose');

let actividadModel = new mongoose.Schema({
    nombre: {type: String, unique: true, required: true},
    patrocinadores: [{type: String}]
});

module.exports = mongoose.model('actividad', actividadModel, 'actividades');