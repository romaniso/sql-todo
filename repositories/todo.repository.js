const {v4: uuid} = require("uuid");
const {TodoRecord} = require("../records/todo.record");
const {todos} = require("../utils/db");
const {ObjectId} = require("mongodb");

class TodoRepository {
}

module.exports = {
    TodoRepository,
};