'use strict';

var Boom = require('boom');
var TasksModel = require('./../models/actionResult');

function MerchantController(database) {
    this.tasksModel = new TasksModel(database);
};

// [GET] /tasks
MerchantController.prototype.index = function(request, reply) {
    var start = request.query.start;
    var limit = request.query.limit;

    if (start == null) {
        start = 0
    }

    if (limit == null) {
        limit = start;
    }

    reply(this.tasksModel.getTasks(start, limit));
};

// [GET] /tasks/{id}
MerchantController.prototype.show = function(request, reply) {
    try {
        var id = request.params.id;

        reply(this.tasksModel.getTask(id));
    } catch (e) {
        reply(Boom.notFound(e.message));
    }
};

// [POST] /tasks
MerchantController.prototype.store = function(request, reply) {
    try {
        var value = request.payload.task;

        reply(this.tasksModel.addTask(value))
            .created();
    } catch (e) {
        reply(Boom.badRequest(e.message));
    }
};

// [PUT] /tasks/{id}
MerchantController.prototype.update = function(request, reply) {
    try {
        var id = request.params.id;
        var task = request.payload.task;

        reply(this.tasksModel.updateTask(id, task));
    } catch (e) {
        reply(Boom.notFound(e.message));
    }
};

// [DELETE] /tasks/{id}
MerchantController.prototype.destroy = function(request, reply) {
    try {
        var id = request.params.id;

        this.tasksModel.deleteTask(id);
        reply().code(204);
    } catch (e) {
        reply(Boom.notFound(e.message));
    }
};

module.exports = MerchantController;
