'use strict';

let mongoose = require('mongoose');

let industriaModel = new mongoose.Schema({
    nombre: {type: String, unique: true, required: true},
    estado: {type: String, required: true}
});

module.exports = mongoose.model('industria', industriaModel, 'industrias');