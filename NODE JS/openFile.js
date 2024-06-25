var fs = require('fs');
//create a empty file
fs.open('openFile.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('saved');
});
