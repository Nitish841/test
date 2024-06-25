var fs = require('fs');
//create a file named createFile.txt:
fs.appendFile(
  'createFile.txt',
  'Hello, i am creating the file name createFile.txt',
  function (error) {
    if (error) {
      throw error;
    }
    console.log('saved');
  }
);
