var http= require('http');//to include a module we use require() function

//my app is able to access HTTP module and is able to create a server
http.createServer(function (req, res) {//createServer() method creates an HTTP server
    res.writeHead(200, {'Content-Type': 'text/html'});//adding HTTP header, 200 means all is OK
    res.end('Hello World!');//end response
}).listen(8080);