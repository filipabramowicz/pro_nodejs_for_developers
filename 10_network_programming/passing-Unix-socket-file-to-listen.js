var net = require('net');
var server = net.createServer(function(socket){
	// handle connection
});

server.listen("/tmp/foo.sock");