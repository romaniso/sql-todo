const express = require('express');
const homeRouter = express.Router();
const {pool} = require("../utils/db");
const {TodoRecord} = require("../records/todo.record");
const {TodoRepository} = require("../repositories/todo.repository");


// (async() => {
//     const foundTodo = await TodoRecord.find('a56546bb-064c-42de-b85a-dcb4715697ef');
//     foundTodo.title = 'A może coś innego porobimy, co?';
//     await foundTodo.update();
//     console.log(foundTodo);
//     await pool.end();
// })()

// Here must be REST logics
homeRouter
    .get('/', async (req, res) => {
        const foundTodos = await TodoRepository.findAll();
        console.log(foundTodos);
        // await pool.end();
        res.render('home', {
            todos: foundTodos,
        });
    })
    .delete('/todo:id', async (req, res) => {
        const {id} = req.params;
        const todoItemToRemove = await TodoRepository.find(id);
        await TodoRepository.delete(todoItemToRemove);
        res.render('delete');
    })

module.exports = {
    homeRouter,
}