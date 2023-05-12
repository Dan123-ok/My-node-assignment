/*Definition and Usage
The Readline module provides a way of reading a datastream, one line at a time.

Syntax
The syntax for including the Readline module in your application:

var readline = require('readline');

createInterface()	Creates an Interface object

Example
Open a file and return the content line by line:
*/
var readline = require('readline');
var fs = require('fs');

var myInterface = readline.createInterface({
  input: fs.createReadStream('demofile1.html')
});

var lineno = 0;
myInterface.on('line', function (line) {
  lineno++;
  console.log('Line number ' + lineno + ': ' + line);
});