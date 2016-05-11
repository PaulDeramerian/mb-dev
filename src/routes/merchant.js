'use strict'

const incrnum = require('incrnum');
const actionResultWrapper = require('./../models/actionResult');
const Boom = require('boom');
const Joi = require('joi');
const merchantModel = require('./../models/merchantModel.js');
const merchantModelSchema = merchantModel.schema();
const StubHelper = require('./../helpers/stubHelper');

const responseModel = Joi.object({
  id: Joi.number(),
}).label('Result');

let routes = [];

function randomIntFromInterval(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

routes.push({
  method: 'GET',
  path: '/v1/merchant/{id}',
  handler: function(request, reply) {
    let _id = request.params.id;
    let stubModel = StubHelper.generateRandomMerchantModel(_id);
    Joi.validate(stubModel, merchantModelSchema, (err, value) => {
      if (err) {
        let errors = [];
        for (let x = 0; err.details.length > x; x++) {
          errors.push(err.details[x].message);
        }
        reply(Boom.badRequest(errors.join('. '), value));
      } else {
        reply(value);
      }
    });
  },
  config: {
    description: 'Merchant Get Endpoint',
    notes: 'Merchant Get Endpoint',
    tags: ['app', 'api'],
    validate: {
      params: {
        id: Joi.number()
          .required()
          .description('merchant data id'),
      }
    },
    response: {
      schema: merchantModelSchema
    }
  }
});

routes.push({
  method: ['POST', 'PUT'],
  path: '/v1/merchant',
  handler: function(request, reply) {
    var payload = request.payload;
    Joi.validate(payload, merchantModel.schema, (err, value) => {
      if (err) {
        var errors = [];
        for (var x = 0; err.details.length > x; x++) {
          errors.push(err.details[x].message);
        }
        reply(Boom.badRequest(errors.join('. '), value));
      } else {
        value.id = (value.id || randomIntFromInterval(0, 999));
        reply(value);
      }
    });
  },
  config: {
    description: 'Merchant Signup Endpoint',
    notes: 'Merchant Post/Put Endpoint',
    tags: ['app', 'api'],
    validate: {
      params: {
        body: merchantModel.schema
      }
    },
    response: {
      schema: merchantModelSchema
    }
  }
});

routes.push({
  method: 'delete',
  path: '/v1/merchant/{id}',
  handler: function(request, reply) {
    var _id = request.params.id;
    if (!_id) { Boom.badRequest('invalid request id'); }

    reply(Boom.notImplemented('/v1/merchant/signup has not been implemented'));
  },
  config: {
    description: 'Merchant Delete Endpoint',
    notes: 'Merchant Delete Endpoint',
    tags: ['app', 'api'],
    validate: {
      params: {
        id: Joi.number()
          .required()
          .description('merchant data id'),
      }
    },
    response: {
      schema: merchantModelSchema
    }
  }
});

module.exports.routes = routes;
