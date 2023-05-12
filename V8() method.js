/*The node:v8 module exposes APIs that are specific to the version of V8 built into the Node.js binary. It can be accessed using:

const v8 = require('node:v8'); 

v8.cachedDataVersionTag()
Added in: v8.0.0
Returns: <integer>
Returns an integer representing a version tag derived from the V8 version, command-line flags, and detected CPU features. This is useful for determining whether a vm.Script cachedData buffer is compatible with this instance of V8.
*/
console.log(v8.cachedDataVersionTag()); // 3947234607
// The value returned by v8.cachedDataVersionTag() is derived from the V8
// version, command-line flags, and detected CPU features. Test that the value
// does indeed update when flags are toggled.
v8.setFlagsFromString('--allow_natives_syntax');
console.log(v8.cachedDataVersionTag()); // 183726201 
