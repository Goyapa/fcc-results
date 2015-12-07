// About callback functions
// http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/

var http = require("http");
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var bl = require('bl')
var numberOfCharacters = '';
//console.log(url);

var jugglingAsync = function(url, callback){
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
      return callback(null, numberOfCharacters);
   //   console.log(numberOfCharacters);
   //   console.log(numberOfCharacters);
   //   console.log(numberOfCharacters);
    })
  }).on('error', function(e) {
    return callback(e.message);
    //console.log("Got error: " + e.message);
  }).end();
}

jugglingAsync(url1, function(err, list){
  if(err) throw err;
  console.log(list);
    jugglingAsync(url2, function(err, list){
    if(err) throw err;
    console.log(list);
      jugglingAsync(url3, function(err, list){
      if(err) throw err;
      console.log(list);
    });
  });
});

/*
Here's the official solution in case you want to compare notes:
────────────────────────────────────────────────────────────────────────────────
    var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0
    function printResults () {
      for (var i = 0; i < 3; i++)
        console.log(results[i])
    }
    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err)
            return console.error(err)
          results[index] = data.toString()
          count++
          if (count == 3)
            printResults()
        }))
      })
    }
    for (var i = 0; i < 3; i++)
      httpGet(i)
*/