'use strict';
const categoriasModel = require('./categorias.model');

module.exports.registrar = function(req, res) {
   
    let nuevaCategoria = new categoriasModel({
        nombre : req.body.nombre,
        descripcion : req.body.descripcion
    });

    nuevaCategoria.save(function(error){
        if(error){
            res.json({success : false, msg: 'No se pudo registrar la categoría, ocurrió el siguiente error ' + error});
        }else{
            res.json({success : true, msg: 'La categoría se registró con éxito'}); 
        }
    });
};

module.exports.listar_categorias = function(req , res){
    categoriasModel.find().sort({titulo: 'asc'}).then(
        function(categorias){
            res.send(categorias);
        }
    );
};