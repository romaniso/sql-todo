const express = require("express");
const {join} = require("path");
const {engine} = require('express-handlebars');
const methodOverride = require('method-override');
const {homeRouter} = require("./routes/home")

const app = express();
//Middlewares
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.static('public'));

// HBS Config
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', join(__dirname,'/views'));

// Middlewares for routing
app.use('/', homeRouter);

// Listening on a port
app.listen(3000, 'localhost', () => {
    console.log("Listening on http://localhost:3000");
});