/*Definition and Usage
The Stream module provides a way of handling streaming data.

There are two types of streams: readable and writeable.

An example of a readable stream is the response object you get when working with the http.createServer() method.

An example of a writable stream is the request object you get when working with the http.createServer() method.

Syntax
Some methods returns a readable/writable stream object, like http.createServer(), and if that is the case, you do not have to include the stream module.

Otherwise, the syntax for including the Stream module in your application:

var stream = require('stream');

write()	Writes data to the stream


Example
Write to a writeable stream:*/

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  res.end();
}).listen(8080);
