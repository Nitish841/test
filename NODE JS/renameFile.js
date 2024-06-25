var fs = require('fs');
// rename the file
fs.rename('original.txt', 'renamed.txt', function (err) {
  if (err) throw err;
  console.log('successful');
});
