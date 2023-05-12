/*Definition and Usage
The assert module provides a way of testing expressions. If the expression evaluates to 0, or false, an assertion failure is being caused, and the program is terminated.

This module was built to be used internally by Node.js.

Syntax
The syntax for including the assert module in your application:

var assert = require('assert');


Node.js assert() Method
Definition and Usage
The assert.equal() method tests if two values are equal, using the == operator.

If the two values are not equal, an assertion failure is being caused, and the program is terminated.

To compare the values using the === operator, use the assert.strictEqual() method.

Syntax
assert.equal(actual, expected, message)*/
/*Example 
If two values are not equal, an error is thrown and the program is terminated:*/

var assert = require('assert');
assert.equal(50, 50); //OK
assert.equal(50, "50"); //OK
assert.equal(50, 70); /*AssertionError: 50 == 70 */
