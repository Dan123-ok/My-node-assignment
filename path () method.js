/*Definition and Usage
The Path module provides a way of working with directories and file paths.

Syntax
The syntax for including the Path module in your application:

var path = require('path');

Definition and Usage
The path.basename() method returns the filename part of a file path.

Syntax
path.basename(path, extension);
Example
Extract the filename from a file path:*/

import { basename } from 'path';
var filename = basename('/Users/Refsnes/demo_path.js');
console.log(filename);