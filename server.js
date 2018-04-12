'use strict';

const path = require('path')
const express = require('express');
const app = express();
const pug = require('pug');

app.set('view engine', 'pug');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    res.render('index', {
        title: 'Loafing Around',
        bio: 'Porta ac nec ridiculus tortor scelerisque rhoncus elementum amet platea integer et cum vel nunc tempor aliquet porttitor augue integer ridiculus, urna, vel dapibus, in vut pellentesque integer turpis et montes tempor! Porta dignissim pid urna, auctor egestas est sociis, non hac, augue rhoncus amet dictumst, porttitor scelerisque.',
        image: 'public/bread.jpg'
    });
});

app.get('/about', (req, res, next) => {
    // about page
});

app.get('/inventory', (req, res, next) => {
    
});

app.listen('8080', () => {
    console.log(`Listening on port 8080`);
});