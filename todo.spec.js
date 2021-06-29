const nock = require('nock');
const got = require('got');
const expect = require('chai').expect;

describe('todo-app-barkend mocked tests', () => {
    it.only('can get todos', async () => {
        const todoObject = {
            todos: [
                { task: "Two", _id: 9, "completed": false },
                { task: "three", _id: 84, "completed": false }]
        }
        nock('https://todo-app-barkend.herokuapp.com/todos/')
            .get('/')
            .reply(200,
                todoObject
            )
        const res = await got('https://todo-app-barkend.herokuapp.com/todos/')
        expect(res.body).to.eq(JSON.stringify(todoObject))
        expect(res.statusCode).to.equal(200)
    })

    it('can create todos', async () => {
        const createdTodo = {
            todos: [
                { task: "Cook Dinner", _id: 9, completed: false }]
        }
        nock('https://todo-app-barkend.herokuapp.com/todos/')
            .post('/')
            .reply(200,
                createdTodo
            )
        const res = await got.post('https://todo-app-barkend.herokuapp.com/todos/', { task: 'Cook Breakfast', })
        expect(res.body).to.eq(JSON.stringify(createdTodo));
        expect(res.statusCode).to.equal(200);
    })
})
