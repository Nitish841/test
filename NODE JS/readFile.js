var http = require('http');
var fs = require('fs');

http
  .createServer(function (req, res) {
    //Open a file on the server and return its content:
    fs.readFile('demoFile1.html', function (error, data) {
      res.writeHead(200, { 'content-type': 'text/html' });
      res.write('i am using read file and showing content  ');
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
