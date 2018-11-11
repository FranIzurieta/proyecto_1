'use strict';

// Llamar dependencias requeridas
const express = require('express');
const router = express.Router();

// Llamar el API
const patrocinadorApi = require('./patrocinadores.api');

// Crear rutas de peticiones
router.route('/registrar_patrocinador') // Endpoint de la petición
    .post(function(req, res){
        patrocinadorApi.registrar(req, res); // Función en el archivo API que se quiere ejecutar
    });

router.route('/listar_patrocinadores').get(function(req, res){
    patrocinadorApi.listar(req, res);
});

// Exportar rutas
module.exports = router;

