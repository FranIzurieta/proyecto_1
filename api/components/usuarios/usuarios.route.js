'use strict';

// Llamar dependencias requeridas
const express = require('express');
const router = express.Router();

// Llamar el API
const usuarioApi = require('./usuarios.api');

// Crear rutas de peticiones
router.route('/registrar_usuario') // Endpoint de la petición
    .post(function(req, res){
        usuarioApi.registrar(req, res); // Función en el archivo API que se quiere ejecutar
    });

router.route('/listar_usuarios').get(function(req, res){
    usuarioApi.listar(req, res);
});

// Exportar rutas
module.exports = router;

