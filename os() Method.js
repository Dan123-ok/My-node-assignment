/*Definition and Usage
The OS module provides information about the computer's operating system.

Syntax
The syntax for including the OS module in your application:

var os = require('os');

platform()	Returns information about the operating system's platform

Example

Get information about the computer's operating system:*/

import { platform, arch } from 'os';
console.log("Platform: " + platform());
console.log("Architecture: " + arch())