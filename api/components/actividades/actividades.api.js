'use strict';

let actividadModel = require('./actividades.model');

module.exports.registrar = function(req, res){
    let nuevaActividad = new actividadModel({
        nombre: req.body.nombre,
        patrocinadores: req.body.patrocinadores
    });

    nuevaActividad.save(function(error){
        if (error) {
            res.json({
                success: false,
                msg: 'No se pudo registrar la actividad - ' + error
            });
        } else {
            res.json({
                success: true,
                msg: 'La actividad fue registrada con éxito'
            });
        }
    });
};

module.exports.listar = function(req, res){
    actividadModel.find().then(function(actividades){
        res.send(actividades);
    });
};

module.exports.listar_uno = function(req, res){
    // console.log(req.query.id);
    let id = req.query.id;
    actividadModel.find({_id: id}).then(function(actividad){
        res.send(actividad);
    });
};