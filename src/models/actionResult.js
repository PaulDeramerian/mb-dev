"use strict";

//var _ = require('underscore');
//var Joi = require('joi');

var code = 0;
var message = '';
var  isSuccess = false;
var objectId = 0;
var data = {};

function ActionResult(){
   /* this.schema = {
        code: Joi.string().max(20),
        message: Joi.string().max(255),
        isSuccess: Joi.boolean(),
        objectId: Joi.number().integer(),
        data: Joi.string().json
    };*/
};

ActionResult.prototype.setData = function (objectid, data) {
        this.data = data;
        this.isSuccess = true;
        this.objectId = objectid;
        this.code = 0;
        this.message = "Success";
    };

ActionResult.prototype.setError = function (errorCode, errorMessage){
        this.isSuccess = false;
        this.code = errorCode;
        this.message = errorMessage;
    };

module.exports = ActionResult;
