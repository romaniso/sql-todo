const {db, client} = require("./utils/db");
const {TodoRepository} = require("./repositories/todo.repository");
const {TodoRecord} = require("./records/todo.record");
(async() => {
    try {
        const todo = await TodoRepository.find('655b8d5bebf79a9ef80f5fe8');


        todo.title = 'A ja tam wieeem co mam robić...huj wieee';

        await TodoRepository.update(todo);

        console.log(await TodoRepository.find('655b8d5bebf79a9ef80f5fe8'));
    } finally {
        await client.close();
    }
})();