'use strict';

// Llamar al modelo 
const patrocinadorModel = require('./patrocinadores.model');

// Función registrar
module.exports.registrar = function(req, res){
    
    // Crear el nuevo registro basado en el modelo
    let nuevoPatrocinador = new patrocinadorModel({
        logo: req.body.logo,
        nombre: req.body.nombre,
        industria: req.body.industria,
        estado: 'Habilitado'
    });

    // Guardar el registro creado en MongoDB
    nuevoPatrocinador.save(function(error){
        if (error) {
            res.json({
                success: false,
                msg: 'No se pudo registrar el patrocinador',
                error: error
            });
        } else {
            res.json({
                success: true,
                msg: 'El patrocinador se registró con éxito'
            });
        }
    });
};

// Función listar
module.exports.listar = function(req, res){
    patrocinadorModel.find().sort({nombre: 'asc'}).then(function(patrocinadores){
        res.send(patrocinadores);
    });
};



