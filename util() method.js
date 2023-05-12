/*Definition and Usage
The Util module provides access to some utility functions.

Syntax
The syntax for including the Util module in your application:

var util = require('util');
Util Properties and Methods
Method	    Description
debuglog()	Writes debug messages to the error object
deprecate()	Marks the specified function as deprecated
format()	Formats the specified string, using the specified arguments
inherits()	Inherits methods from one function into another
inspect()	Inspects the specified object and returns the object as a string

Example
Format a string using the arguments "Linus" and "6":
*/
import { format } from 'util';
var txt = 'Congratulate %s on his %dth birthday!';
var result = format(txt, 'Linus', 6);

console.log(result);
