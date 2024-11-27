var http= require('http')//rem require includes a module

//creating a server object
http.createServer(function (req, res){
    res.write('Hello World!');//write response to client
    res.end();//end response
}).listen(8082);//the server object listens at port 8082