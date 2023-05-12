/*Definition and Usage
The cluster module provides a way of creating child processes that runs simultaneously and share the same server port.

Node.js runs single threaded programming, which is very memory efficient, but to take advantage of computers multi-core systems, the Cluster module allows you to easily create child processes that each runs on their own single thread, to handle the load.

Syntax
The syntax for including the cluster module in your application:

var cluster = require('cluster');

cluster.isWorker() method :	Returns true if the current process is worker, otherwise false*/
var cluster = require('cluster');

if (cluster.isWorker) {
  console.log('I am a worker');
} else {
  console.log('I am a master');
  cluster.fork();
  cluster.fork();
}