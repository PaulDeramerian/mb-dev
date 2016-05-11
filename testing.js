'use strict'
// var Boom = require('boom');

const StubHelper = require('./src/helpers/stubHelper');

let testModel = StubHelper.generateRandomMerchantModel(1);

console.log(testModel);


// var resultTest = Boom.notImplemented('testing not implemented');
// console.log(resultTest);
//
//
// {
//   [Error: ${message}]
//   data: undefined,
//   isBoom: true,
//   isServer: true,
//   output: {
//     statusCode: ${statusCode},
//     payload: {
//       statusCode: ${statusCode},
//       error: ${statusMessage},
//       message: ${message}
//     },
//     headers: {}
//   },
//   reformat: [Function]
// }
