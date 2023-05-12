/*Definition and Usage
The URL module provides a way of parsing the URL string.

Syntax
The syntax for including the url module in your application:

var url = require('url');

URL Methods
Method	        Description
url.format()	Returns a formatted URL string
url.parse() 	Returns a URL object
url.resolve()	Resolves a URL

url.parse()	Returns a URL object

Example
Parse the url string into a URL object and extract the href property:
*/
var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var q = url.parse(req.url, true);
  res.write(q.href);
  res.end();
}).listen(8080);