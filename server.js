'use strict';

const path = require('path')
const express = require('express');
const app = express();
const pug = require('pug');

app.set('view engine', 'pug');

app.use('/public', express.static(path.join(__dirname, 'public')));

// navigation middleware
app.use((req, res, next) => {
    res.locals.nav = {
        home: '/',
        about: '/about',
        inventory: '/inventory'
    };
    res.locals.url = req.url;
    next();
});

app.get('/', (req, res, next) => {
    res.render('default', {
        title: 'Loafing Around',
        content: 'Porta ac nec ridiculus tortor scelerisque rhoncus elementum amet platea integer et cum vel nunc tempor aliquet porttitor augue integer ridiculus, urna, vel dapibus, in vut pellentesque integer turpis et montes tempor! Porta dignissim pid urna, auctor egestas est sociis, non hac, augue rhoncus amet dictumst, porttitor scelerisque.',
        image: 'public/bread.jpg'
    });
});

app.get('/about', (req, res, next) => {
    res.render('default', {
        title: 'The Loafer',
        content: 'Porta ac nec ridiculus tortor scelerisque rhoncus elementum amet platea integer et cum vel nunc tempor aliquet porttitor augue integer ridiculus, urna, vel dapibus, in vut pellentesque integer turpis et montes tempor! Porta dignissim pid urna, auctor egestas est sociis, non hac, augue rhoncus amet dictumst, porttitor scelerisque.',
        image: 'public/bread2.jpg'
    })
});

app.get('/inventory', (req, res, next) => {
    res.render('inventory', {
        title: 'The Loaves',
        menu: {
            'baguette': '$10',
            'french bread': '$9',
            'bagel': '$12',
            'bread roll': '$13',
            'chickpea bread': '$10',
            'fougasse': '$12',
            'pandesal': '$5',
            'flatbread': '$15',
            'marraqueta': '$10'
            },
        image: 'public/bread.jpg'
    })
});

app.listen('8080', () => {
    console.log(`Listening on port 8080`);
});