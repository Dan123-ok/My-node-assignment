/*Definition and Usage
The VM module provides a way of executing JavaScript on a virtual machine, almost like eval() in JavaScript.

Syntax
The syntax for including the VM module in your application:

var vm = require('vm');
VM Properties and Methods
Method	Description
createContext()	Prepares a virtual machine, or sandbox, where you can execute scripts
isContext()	Returns true if the specified sandbox has been created by the createContext() method
runInContext()	Executes JavaScript code in the specified context, and returns the result
runInDebug()	Executes JavaScript inside the debug context
runInNewContext()	Executes JavaScript code in a new context, and returns the result
runInThisContext()	Executes JavaScript code in the global context, and returns the result

Example
*/
import { createContext, runInContext } from 'vm';
var myObj = { name: 'John', age: 38 };
createContext(myObj);

runInContext('age += 1;', myObj);

console.log(myObj);