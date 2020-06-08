// jshint esversion:6 
// ================================ creating application routes ===================================//
module.exports = app => {
    const todo = require(`../controllers/todo.controllers`);

// create routes
    app.route(`/createTodo`)
        .post(todo.createMaterial);

//  delete routes
    app.route(`/deleteTodoById`)
        .delete(todo.deleteTodoById);

// get routes
    app.route(`/getAllTodos`)
        .get(todo.getAllTodos);
};