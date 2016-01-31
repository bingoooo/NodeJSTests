var http = require('http');
var fs = require('fs');
http.createServer(function(req, res){
	var content = '';
	var type = '';
	if (req.url === '/'){
		content = fs.readFileSync('./public/index.html');
		type = 'text/html';
	}
	res.writeHead(200, {'Content-Type' : type});
	res.end(content + '\n');
}).listen(1337, '127.0.0.1');
console.log('server running at http://127.0.0.1:1337');