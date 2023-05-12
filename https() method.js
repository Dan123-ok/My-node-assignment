/*Definition and Usage
The HTTPS module provides a way of making Node.js transfer data over HTTP TLS/SSL protocol, which is the secure HTTP protocol.

Syntax
The syntax for including the HTTPS module in your application:

var https = require('https');
createServer()	Creates an HTTPS server

Example
Create a https server that listens on port 8080 of your computer.

When port 8080 get accessed, write "Hello World!" back as a response:*/

import { createServer } from 'https';
createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
}).listen(8080);