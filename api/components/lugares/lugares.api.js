'use strict';
const lugarModel = require('./lugares.model'); 

module.exports.registrar_lugares = function(req, res){
    let nuevoLugar = new lugarModel({
        nombre : req.body.nombre,
        descripcion : req.body.descripcion,
        categoria : req.body.categoria,
        etiquetas : req.body.etiquetas,
        // ubicacion : req.body.ubicacion,
        provincia : req.body.provincia,
        canton : req.body.canton,
        distrito : req.body.distrito,
        senas : req.body.senas
        // foto : req.body.foto,
    });

    nuevoLugar.save(function(error){
        if(error){
            res.json({success : false, msg: 'No se pudo registrar el lugar, ocurrió el siguiente error ' + error});
        }else{
            res.json({success : true, msg: 'El lugar se registró con éxito'});
        }
    }); 
};

module.exports.listar_lugares = function(req, res){
    lugarModel.find().sort({nombre: 'asc'}).then(
        function(lugares){
            res.send(lugares);
        }
    )
};