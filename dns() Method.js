/*Definition and Usage
The DNS module provides a way of performing name resolutions.

Syntax
The syntax for including the DNS module in your application:

var dns = require('dns');
The node:dns module enables name resolution. For example, use it to look up IP addresses of host names.

Although named for the Domain Name System (DNS), it does not always use the DNS protocol 
for lookups. dns.lookup() uses the operating system facilities to perform name resolution. 
It may not need to perform any network communication. To perform name resolution the way other applications on the same 
system do, use dns.lookup().

Class: dns.Resolver#
Added in: v8.3.0
An independent resolver for DNS requests.

Creating a new resolver uses the default server settings. Setting the servers used for a resolver using resolver.
setServers() does not affect other resolvers: */

const { Resolver } = require('node:dns');
const resolver = new Resolver();
resolver.setServers(['4.4.4.4']);

// This request will use the server at 4.4.4.4, independent of global settings.
resolver.resolve4('example.org', (err, addresses) => {
  // ...
}); 