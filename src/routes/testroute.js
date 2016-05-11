module.exports.routes = [
    {
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply('Under Construction.');
        },
        config : {
            description: 'Empty Endpoint',
            notes: 'dummy',
            tags : ['app']
        }
    },
    {
        method: 'GET',
        path: '/test/{name}',
        handler: function (request, reply) {
            reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
        },
        config : {
            description: 'Test API',
            notes: 'test api',
            tags : ['app']
        }
    }
];
