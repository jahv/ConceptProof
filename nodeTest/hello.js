/**
	Install nodejs
	open terminal and write: $ node hello.js
	this cause the server start working under port 8080
	Open a browser and go to localhost:8080
*/


//Importing modules
var http = require("http");

/**
	Starting http server
	Code in this function will be invoked in every request
*/
var server = http.createServer(function(request, response){
	console.log("Hello world!");
	response.end("Hello world!");
});

//Port to serve
server.listen(8080);