var fs = require('fs');
//append the text in existing file
fs.appendFile(
  'createFile.txt',
  'Hello, i am appending string in existing file',
  function (error) {
    if (error) {
      throw error;
    }
    console.log('saved');
  }
);
