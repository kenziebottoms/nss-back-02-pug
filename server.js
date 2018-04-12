"use strict";

const pug = require("pug");
const express = require("express");
const app = express();

app.set("view engine", "pug");

app.get("/", (req, res, next) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.get("/about", (req, res, next) => {
    // about page
});

app.get("/inventory", (req, res, next) => {

});

app.listen("8080", () => {
    console.log(`Listening on port 8080`);
});