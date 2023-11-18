const {pool} = require("./utils/db");
const {TodoRecord} = require("./records/todo.record");

(async() => {
    const foundTodo = await TodoRecord.find('a56546bb-064c-42de-b85a-dcb4715697ef');
    foundTodo.title = 'A może coś innego porobimy, co?';
    await foundTodo.update();
    console.log(foundTodo);
    await pool.end();
})()