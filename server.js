const express = require('express')
const hbs = require('hbs');
const app = express()

require('./hbs/helpers')

//SE MUESTRA LA PAGINA PUBLUCA DE HTML
app.use(express.static(__dirname + '/public'))

//Express hbs
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

//Controlador del server
app.get('/', (req, res) => {
    res.render('home', {
        name: 'Santiago',
    })

})

app.get('/about', (req, res) => {
    res.render('about', {})

})

//Al final lo llama en el servidor para crear el puerto 3000
app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000')
})