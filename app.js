var express = require('express'),
    app = express();

var server_port = process.env.OPENSHIFT_NODEJS_PORT || process.env.OPENSHIFT_INTERNAL_PORT || process.env.PORT || 3000;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || process.env.OPENSHIFT_INTERNAL_IP || 'localhost';

// var port = process.env.PORT || 8080;

var io = require('socket.io').listen(app.listen(server_port, server_ip_address));

require('./config')(app, io);
require('./routes')(app, io);

console.log('application is running on ' + server_ip_address + ':' + server_port);