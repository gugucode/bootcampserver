var http = require("http");
var good_PORT = 7000;
var bad_PORT = 7500;

function handleRequest(request, response){
    response.end("I am good at driving");
}

function handleBadRequest(request, response){
    response.end("I cannot swim");
}

var server1 = http.createServer(handleRequest);
server1.listen(good_PORT,function(){
    console.log("Server is listening on: http://localhost:"+good_PORT);
})


var server2 = http.createServer(handleBadRequest);
server2.listen(bad_PORT,function(){
    console.log("Server is listening on: http://localhost:"+bad_PORT);
})