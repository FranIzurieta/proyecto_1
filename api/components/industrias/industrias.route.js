'use strict';

// Llamar dependencias
let express = require('express');
let router = express.Router();

// Llamar al API
const industriaApi = require('./industrias.api');

// Crear rutas de las peticiones
router.route('/registrar_industria').post(function(req, res){
    industriaApi.registrar(req, res);
});

router.route('/listar_industrias').get(function(req, res){
    industriaApi.listar(req, res);
});

// Exportar rutas
module.exports = router;