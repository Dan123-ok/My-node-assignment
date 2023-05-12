/*Definition and Usage
The dgram module provides a way of working with Datagram sockets.

It can be used to send messages from one computer/server to another.

Syntax
The syntax for including the dgram module in your application:

var dgram = require('dgram');
createSocket()	Creates a Socket object

Example
Make a file ("demo_dgram.js") that listens for messages on port 8080:*/

var dgram = require('dgram');
var s = dgram.createSocket('udp4');
s.on('message', function(msg, rinfo) {
  console.log('I got this message: ' + msg.toString());
});
s.bind(8080);
/*Remember to initiate the file: C:\Users\Your Name>node demo_dgram.js */