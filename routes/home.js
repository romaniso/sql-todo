const express = require('express');
const homeRouter = express.Router();
const bodyParser = require('body-parser');
const {TodoRecord} = require("../records/todo.record");
const {TodoRepository} = require("../repositories/todo.repository");

// Middlewares
homeRouter.use(bodyParser.urlencoded({ extended: false }));

// Here must be REST logics
homeRouter
    .get('/', async (req, res) => {
        const foundTodos = await TodoRepository.findAll();
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
    .post('/added', async (req, res) => {
        const newTodo = new TodoRecord({title: req.body.title});
        await TodoRepository.insert(newTodo);
        res.render('added');
    })
    // .put('/edit:id', async (req, res) => {
    //     res.render('edited')
    // })

module.exports = {
    homeRouter,
}