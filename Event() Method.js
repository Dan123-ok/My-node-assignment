/*Definition and Usage
The Events module provides a way of working with events.

In Node.js, all events are an instance of the EventEmitter object

Syntax
The syntax for including the Events module, and creating an EventEmitter in your application:

var events = require('events');
var eventEmitter = new events.EventEmitter();

When an error occurs within an EventEmitter instance, the typical action is for an 'error' event to be emitted. 
These are treated as special cases within Node.js.

If an EventEmitter does not have at least one listener registered for the 'error' event, and an 'error' event is emitted, 
the error is thrown, a stack trace is printed, and the Node.js process exits.*/

// import { EventEmitter } from 'node:events';
// class MyEmitter extends EventEmitter {}
// const myEmitter = new MyEmitter();
// myEmitter.emit('error', new Error('whoops!'));
// Throws and crashes Node.jsCOPY
//To guard against crashing the Node.js process the domain module can be used. (Note, however, that the node:domain module is deprecated.)

//As a best practice, listeners should always be added for the 'error' events.

import { EventEmitter } from 'node:events';
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('error', (err) => {
  console.error('whoops! there was an error');
});
myEmitter.emit('error', new Error('whoops!'));
// Prints: whoops! there was an error