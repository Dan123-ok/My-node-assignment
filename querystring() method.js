/*Definition and Usage
The Query String module provides a way of parsing the URL query string.

Syntax
The syntax for including the Query String module in your application:

var querystring = require('querystring');

parse()	Parses the querystring and returns an object

Example
Parse a query string into an object, and extract the year property:
*/
var querystring = require('querystring');
var q = querystring.parse('year=2017&month=february');
console.log(q.year);