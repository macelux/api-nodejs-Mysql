'use strict';
module.exports = function(app) {
    var todoList = require('../controllers/appController');

    // todoList Routes
    app.route('/tasks')
        .get(todoList.list_all_tasks)
        .post(todoList.check_a_task);

    app.route('/check_task').post(todoList.check_a_task);

    app.route('/tasks/:taskId')
        .get(todoList.read_a_task)
        .put(todoList.update_a_task)
        .delete(todoList.delete_a_task);
};