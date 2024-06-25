var http = require('http');
var dt = require('./myFirstModule');

// create a server
http
  .createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('The date and time :' + dt.myDateTime()); //write response to client
    res.write('i want to learn node.js');
    res.write(req.url); // url hold the query that come after domain name
    res.end(); // end of the response
  })
  .listen(8080); // response will be listen on port 8080
