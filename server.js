var http = require('http');


var server = http.createServer(function(request, response){
	var messages = [];

	response.writeHead(200, {
		'Connection': 'close',
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*'
	});

	if(request.method == 'GET') {
		response.write(JSON.stringify(messages));
	}
	if(request.method == 'POST') {
		var postData = '';
		request.on('data', function(chunk) {
			postData += chunk.toString();
		});
		request.on('end', function() {
			messages.push(JSON.parse(postData));
			response.write(postData);
		});
	}
	
	response.end();
});

server.listen('9090');

