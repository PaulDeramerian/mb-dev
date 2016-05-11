var incrnum = require('incrnum');

module.exports.routes = [
    {
        method : 'POST',
        path : '/v1/deal/add',
        handler : function (request, reply) {
            var js = JSON.parse(request.payload);
            js.id = incrnum();
            if (js.id == 0){
                js.id = incrnum();
            }
            reply(js);
        },
        config : {
            description: 'Deal Save Endpoint',
            notes: 'Deal Save Endpoint',
            tags : ['app']
        }
    }
];