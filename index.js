const express = require("express");
const {join} = require("path");
const {engine} = require('express-handlebars');
const {homeRouter} = require("./routes/home")
const {pool} = require("./utils/db");
const {TodoRecord} = require("./records/todo.record");

// (async() => {
//     const foundTodo = await TodoRecord.find('a56546bb-064c-42de-b85a-dcb4715697ef');
//     foundTodo.title = 'A może coś innego porobimy, co?';
//     await foundTodo.update();
//     console.log(foundTodo);
//     await pool.end();
// })()

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', join(__dirname,'/views'));

app.use('/', homeRouter);

app.listen(3000, 'localhost', () => {
    console.log("Listening on http://localhost:3000");
});