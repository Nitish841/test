var http = require('http');
var fs = require('fs');
var url = require('url');

http
  .createServer(function (req, res) {
    var q = url.parse(req.url, true); // url into readable form
    console.log(q);
    var fileName = '.' + q.pathname; // path of the file in url
    console.log(fileName);

    fs.readFile(fileName, function (err, data) {
      if (err) {
        res.writeHead(200, { 'content-type': 'text/html' });
        return res.end('404 not found');
      }
      res.writeHead(200, { 'content-type': 'text/html' });
      res.write(data); // showing the file to client
      return res.end();
    });
  })
  .listen(8080);
