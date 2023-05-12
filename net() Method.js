/*Definition and Usage
The Net module provides a way of creating TCP servers and TCP clients.

Syntax
The syntax for including the Net module in your application:

var net = require('net');

The node:net module provides an asynchronous network API for creating stream-based TCP or IPC servers (net.createServer()) and clients (net.createConnection()).

It can be accessed using:

const net = require('node:net'); COPY
IPC support#
The node:net module supports IPC with named pipes on Windows, and Unix domain sockets on other operating systems.

Identifying paths for IPC connections#
net.connect(), net.createConnection(), server.listen(), and socket.connect() take a path parameter to identify IPC endpoints.

On Unix, the local domain is also known as the Unix domain. The path is a file system pathname. It gets truncated to an OS-dependent length of sizeof(sockaddr_un.sun_path) - 1. Typical values are 107 bytes on Linux and 103 bytes on macOS. If a Node.js API abstraction creates the Unix domain socket, it will unlink the Unix domain socket as well. For example, net.createServer() may create a Unix domain socket and server.close() will unlink it. But if a user creates the Unix domain socket outside of these abstractions, the user will need to remove it. The same applies when a Node.js API creates a Unix domain socket but the program then crashes. In short, a Unix domain socket will be visible in the file system and will persist until unlinked.

On Windows, the local domain is implemented using a named pipe. The path must refer to an entry in \\?\pipe\ or \\.\pipe\. Any characters are permitted, but the latter may do some processing of pipe names, such as resolving .. sequences. Despite how it might look, the pipe namespace is flat. Pipes will not persist. They are removed when the last reference to them is closed. Unlike Unix domain sockets, Windows will close and remove the pipe when the owning process exits.

JavaScript string escaping requires paths to be specified with extra backslash escaping such as:*/

net.createServer().listen(
  path.join('\\\\?\\pipe', process.cwd(), 'myctl')); 