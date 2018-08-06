var express = require('express'),
    app = express();

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

// var port = process.env.PORT || 8080;

var io = require('socket.io').listen(app.listen(server_port, server_ip_address));

require('./config')(app, io);
require('./routes')(app, io);

console.log('Your application is running on http://localhost:' + server_port);