var fs = require('fs');
var path = require('path');
var files = process.argv[2];
var fileExtension = process.argv[3];

// print process.argv
/* process.argv.forEach(function(val, index, array) {
  console.log(index + ': ' + val);
  });
*/

fs.readdir(files, function(err, lists) {
  if (err) {
        throw err;
    }
 
lists.filter(function (file) {
    // console.log(path.extname(file));
    // console.log("." + fileExtension);
   if (path.extname(file) == "." + fileExtension){
    // console.log("true");
     return true;
  
   }else{
     //console.log(file);
     return false;
   }
    }).forEach(function (file) {
        console.log(file);
    });
});

/*
Here's the official solution in case you want to compare notes:
────────────────────────────────────────────────────────────────────────────────
    var fs = require('fs')
    var path = require('path')
    fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })
*/