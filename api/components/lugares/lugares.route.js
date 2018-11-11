'use strict';

const express = require('express');
const router = express.Router();
const lugaresApi = require('./lugares.api');

router.route('/registrar_lugar').post(function(req , res){ 
    lugaresApi.registrar_lugares(req , res);
});

router.route('/listar_lugar').get(function(req, res){
    lugaresApi.listar_lugares(req, res);
});

module.exports = router;