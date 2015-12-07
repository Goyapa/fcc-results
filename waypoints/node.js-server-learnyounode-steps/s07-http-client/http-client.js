var http = require("http");
var url = process.argv[2];
//console.log(url);
http.get(url, function(res) {
  //console.log("Got response: " + res.statusCode);
  var str = '';
  res.setEncoding('utf8');
  res.on('data', function(chunk) {
  str += chunk;
  console.log(chunk);
  });
  res.on('end',function(){
  //console.log(str);
  })
}).on('error', function(e) {
  console.log("Got error: " + e.message);
}).end();


/*
Your solution to HTTP CLIENT passed!
Here's the official solution in case you want to compare notes:
────────────────────────────────────────────────────────────────────────────────
    var http = require('http')
    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    })
*/
