var http = require('http');
var fs = require('fs');
// replace the original content with new content
fs.writeFile(
  'writeFile.txt',
  'i am writing in this file',
  function (err, data) {
    if (err) throw err;
    else {
      console.log('i am writing');
    }
  }
);
