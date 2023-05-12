/*Definition and Usage
The String Decoder module provides a way of decoding Buffer objects into strings.

Syntax
The syntax for including the String Decoder module in your application:

var StringDecoder = require('string_decoder').StringDecoder;

String Decoder Properties and Methods
Method	Description
end()	Returns what remains of the input stored in the internal buffer
write()	Returns the specified buffer as a string

Example
Decode a stream of binary data (a buffer object) into a string:
*/
var StringDecoder = require('string_decoder').StringDecoder;
var d = new StringDecoder('utf8');
var b = Buffer('abc');

console.log(b); //write buffer
console.log(d.write(b)); // write decoded buffer;
