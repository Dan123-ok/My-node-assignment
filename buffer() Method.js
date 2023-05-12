/*Node.js Buffer Module
Definition and Usage
The buffers module provides a way of handling streams of binary data.

The Buffer object is a global object in Node.js, and it is not necessary to import it using the require keyword.

Syntax
The syntax for creating an empty Buffer of the length 15:

var buf = Buffer.alloc(15);
Definition and Usage
The Buffer.alloc() method creates a new buffer object of the specified size.

Syntax
 Buffer.alloc(size, fill, encoding);
Parameter Values
Parameter	Description
size	Required. Specifies the size of the buffer
fill	Optional. Specifies a value to fill the buffer with if specified, otherwise the buffer is filled with 0 (zero-filled)
encoding	Optional. If the buffer values are strings, this parameter specifies the encoding, default encoding is utf8. Supported values are:
"ascii", "utf8", "utf16le", "ucs2", "base64", "latin1", "binary", "hex"
Example
Using the fill parameter:*/

var buf = Buffer.alloc(15, 'a');
console.log(buf);
