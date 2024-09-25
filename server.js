const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const app = express();
const port = 4000;

app.set('view engine', 'ejs');
app.use(expressEjsLayouts);
app.set('layout', './layouts/main');

app.get('/', (req, res) => {
    res.render('home');
});
app.get('/about', (req, res) => {
    res.render('about');

});
app.get('/contact', (req, res) => {
    const contact = {
        "name": "Jair Velazquez",
        "email": "Jairreyes689@gmail.com",
        "phone":"44444444"

    }


    res.render('contact',{contact: contact});

});
app.get('/service', (req, res) => {
    const services =
        [
            {
                "name": "web Desing",
                "descripcion": "blalalal",
                "price": "$1234"
            },
            {
                "name": "web Desing",
                "descripcion": "blalalal",
                "price": "$1234"
            },
            {
                "name": "web Desing",
                "descripcion": "blalalal",
                "price": "$1234"
            },

        ]
        res.render("service",{services:services});
});


app.listen(port, () => console.log(` Example app listening on port ${port}!`));

