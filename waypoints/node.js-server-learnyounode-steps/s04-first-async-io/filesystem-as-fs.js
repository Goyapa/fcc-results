var fs = require('fs');
var filecontent = undefined;

function readLines(callback) {
  fs.readFile(process.argv[2], function donereading(err, filecontents) {
  filecontent = filecontents;
  callback();
  });
}

function countLines(){
//  console.log(filecontent);
  var splittedArray = filecontent.toString().split('\n').length -1;
  console.log(splittedArray)
}

readLines(countLines);


/*
Here's the official solution in case you want to compare notes:
────────────────────────────────────────────────────────────────────────────────
    var fs = require('fs')
    var file = process.argv[2]
    fs.readFile(file, function (err, contents) {
      // fs.readFile(file, 'utf8', callback) can also be used
      var lines = contents.toString().split('\n').length - 1
      console.log(lines)
    })
*/