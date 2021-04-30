const mongoose = require('mongoose');

const todoList = mongoose.Schema({

    name: String,
    priority: String,
    dateCreated: {
        type: Date,
        default: Date.now
    },
    dueDate: Date,
    status: String
});


const TodoList = new mongoose.model("TodoList", todoList);


module.exports = {
    TodoList
}