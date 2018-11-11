'use strict';

let mongoose = require('mongoose');

let lugaresSchema = new mongoose.Schema({
    nombre : {type: String, required: true},
    descripcion : {type: String, required: true},
    categoria : {type: String, required: true},
    etiquetas : [{type: String, required: true}],
    // ubicacion : {type: String, unique: true, required: true},
    provincia : {type: String, required: true},
    canton : {type: String, required: true},
    distrito : {type: String, required: true},
    senas : {type: String, required: true},
    // foto : {type: String, required: true},
});

module.exports = mongoose.model('Lugar', lugaresSchema, 'lugares');