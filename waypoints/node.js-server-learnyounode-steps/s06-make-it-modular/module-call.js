var mymodule = require('./michas-module.js');
var fs = require('fs');

mymodule(process.argv[2], process.argv[3], function(err, list){
  if(err)throw err;
    console.log(list.join("\n"));
  
});