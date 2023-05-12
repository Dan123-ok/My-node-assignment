/*Definition and Usage
The HTTP module provides a way of making Node.js transfer data over HTTP (Hyper Text Transfer Protocol).

Syntax
The syntax for including the HTTP module in your application:

var http = require('http');
Definition and Usage
The http.createServer() method turns your computer into an HTTP server.

The http.createServer() method creates an HTTP Server object.

The HTTP Server object can listen to ports on your computer and execute a function, a requestListener, each time a request is made.

Syntax
http.createServer(requestListener);

ExampleGet your own Node.js Server
Create a server that listens on port 8080 of your computer.

When port 8080 get accessed, write "Hello World!" back as a response:*/

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
}).listen(8080);
