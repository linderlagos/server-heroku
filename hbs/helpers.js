const hbs = require('hbs');


//Helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
})


hbs.registerHelper('capitalizar', (texto) => {

    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabras.charAt(0).toUpperCase() + palabras.slice(1).toLowerCase();
    });

    return palabras.join(' ');
})