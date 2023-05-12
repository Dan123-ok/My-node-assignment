/*Definition and Usage
The File System module provides a way of working with the computer's file system.

Syntax
The syntax for including the File System module in your application:

var fs = require('fs');
readFile()	Reads the content of a file

Example
Open a file, and output the content:*/

var fs = require('fs');

fs.readFile('demofile.txt', 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
});