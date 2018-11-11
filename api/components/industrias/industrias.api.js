'use strict';

// Llamar el modelo
let industriaModel = require('./industrias.model');

// Función registrar nueva industria
module.exports.registrar = function(req, res){
    let nuevaIndustria = new industriaModel({
        nombre: req.body.nombre,
        estado: 'Habilitado'
    });

    nuevaIndustria.save(function(error){
        if (error) {
            res.json({
                success: false,
                msg: 'No se pudo registrar la industria - ' + error
            });
        } else {
            res.json({
                success: true,
                msg: 'La industria fue registrada con éxito'
            });
        }
    });
};

// Función listar industrias
module.exports.listar = function(req, res){
    industriaModel.find().sort({nombre: 'asc'}).then(function(industrias){
        res.send(industrias);
    });
};