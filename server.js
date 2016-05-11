var hapi = require('hapi');
var incrnum = require('incrnum');
var routes = require('./src/routes');
var config = require('./src/config/config.json');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');

// creating the hapi server instance
var server = new hapi.Server();

const logoptions = {
    opsInterval: 1000,
    filter:{
        access_token: 'censor'
    },
    reporters: [{
        reporter: require('good-console'),
        events: { log: '*', response: '*' }
    }, {
        reporter: require('good-file'),
        events: { ops: '*' },
        config: config.logpath
    }/*, {
        reporter: 'good-http',
        events: { error: '*' },
        config: {
            endpoint: 'http://prod.logs:3000',
            wreck: {
                headers: { 'x-api-key' : 12345 }
            }
        }
    }*/]
};

// adding a new connection that can be listened on
server.connection({
  port: 3000,
  labels: ['web']
});

// defining our routes
server.route(routes.routes);

// Register alive plugin
server.register({
    register: require('hapi-alive'),
    options: {
        path: '/health', //Health route path
        tags: ['health', 'monitor'],
        healthCheck: function(server, callback) {
            //Here you should preform your health checks
            //If something went wrong provide the callback with an error
            callback();
        }
    }
}, function (err) {

    if(err){
        console.log(err);
    }
});

server.register({
    register: require('good'),
    options: logoptions
}, function (err) {

    if (err) {
        console.error(err);
    }
});

server.register({
    register: require('blipp'),
    options: {}
}, function (err) {

    if (err) {
        console.error(err);
    }
});



const swaggerOptions = {
  info: {
    'title': 'Test API Documentation',
    'version': '0.0.1',
  },
  payloadType: 'json'
};


server.register([
  Inert,
  Vision, {
    'register': HapiSwagger,
    'options': swaggerOptions
  }
], (err) => {
  // starting the server
  server.start((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Server running at:', server.info.uri);
    }
  });
});
