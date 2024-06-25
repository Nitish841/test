var http = require('http');
var url = require('url');

http
  .createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('i want to learn node.js ');
    var q = url.parse(req.url, true).query;
    var txt = q.year + ' ' + q.month;
    res.end(txt);
  })
  .listen(8080);
