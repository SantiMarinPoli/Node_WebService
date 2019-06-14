const hbs = require('hbs');

//helpers hbs
hbs.registerHelper('getYear', () => {
    return new Date().getFullYear()
})

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split('')
    palabras.forEach((palabra, i) => {
        palabras[i] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
    })

    return palabras.join('')
})