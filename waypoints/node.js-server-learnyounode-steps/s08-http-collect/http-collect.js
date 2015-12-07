var http = require("http");
var url = process.argv[2];
var bl = require('bl')
var numberOfCharacters = '';
//console.log(url);
http.get(url, function(res) {
  //console.log("Got response: " + res.statusCode);
  var str = '';
  res.setEncoding('utf8');
  res.pipe(bl(function (err, data){
    numberOfCharacters = data.toString()
    
  }));
  res.on('data', function(chunk) {
  str += chunk;
  //console.log(chunk);
  });
  res.on('end',function(){
  //console.log(str);
    console.log(numberOfCharacters.length);
    console.log(numberOfCharacters);
  })
}).on('error', function(e) {
  console.log("Got error: " + e.message);
}).end();

/*
# PASS
Your solution to HTTP COLLECT passed!
Here's the official solution in case you want to compare notes:
────────────────────────────────────────────────────────────────────────────────
    var http = require('http')
    var bl = require('bl')
    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err)
          return console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })
*/