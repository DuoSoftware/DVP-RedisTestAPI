var restify = require('restify');
var config = require('config');
var port = config.Host.port || 3000;
var redisHandler = require("./redisHandler");




var server = restify.createServer({
    name: "Redis Test Service"
});


server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.fullResponse());


server.post('/RedisTest/Item/:item/Value/:val', redisHandler.setValue);
server.get('/RedisTest/Item/:item', redisHandler.getValue);



server.listen(port, function () {
    console.log("Server is running at : "+port);
});