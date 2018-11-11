'use strict';
const express = require('express');
const router = express.Router();
const categorias_Api = require('./categorias.api');

router.route('/registrar_categoria')
    .post(function(req , res){
        categorias_Api.registrar(req, res) 
    });

router.route('/listar_categorias')
    .get(function(req , res){
        categorias_Api.listar_categorias(req, res);
    });


module.exports = router;
