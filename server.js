// Se exporta http dentro de la arquitectura
const http = require('http');

// Se establece el puerto 3000 como punto de origen para acceder a la aplicación (localhost:3000)
const port = 3000; 

// Es la dependencia que permite crear un servidor
const serveStatic = require('serve-static'); 

// Se exporta la conexión de NodeJS
const connect = require('connect');
const nodemon = require('nodemon');

connect().use(serveStatic(__dirname)).listen(port, () => {
  console.log('Servidor levantado dentro del puerto ' + port);
  nodemon({
    script: 'api/index.js',
    ext: 'js'
  });
});