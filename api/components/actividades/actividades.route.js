'use strict';

// Llamar dependencias
let express = require('express');
let router = express.Router();

// Llamar al API
const actividadApi = require('./actividades.api');

// Crear rutas de las peticiones
router.route('/registrar_actividad').post(function(req, res){
    actividadApi.registrar(req, res);
});

router.route('/listar_actividades').get(function(req, res){
    actividadApi.listar(req, res);
});

router.route('/listar_actividad').get(function(req, res){
    actividadApi.listar_uno(req, res);
});

// Exportar rutas
module.exports = router;