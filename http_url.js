var http= require('http');
http.createServer(function (req, res){//req represents the request from the client
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.write(req.url);
   res.end();
}).listen(8083);
