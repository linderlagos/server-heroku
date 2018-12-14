const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'appliacion/json' });

        let salida = {
            nombre: 'Linder',
            edad: 24,
            url: req.url
        }

        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8084);

console.log('Escuchando puerto 8084');