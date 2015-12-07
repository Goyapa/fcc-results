var http = require('http');
var fs = require('fs');
var map = require('through2-map');

var port = process.argv[2];
var file = process.argv[3]

var server = http.createServer(function (req, res) {
  if (req.method != 'POST')
        return res.end('send POST request\n');
  
  req.pipe(map(function (chunk) {
     return chunk.toString().toUpperCase();
  })).pipe(res);
/*  
  var readStream = fs.createReadStream(file);
  readStream.on('open', function () {
    // This just pipes the read stream to the response object (which goes to the client)
    readStream.pipe(res);
  });
  readStream.on('error', function(err) {
    res.end(err);
  });
 */
});
server.listen(port);

/*
Here's the official solution in case you want to compare notes:
────────────────────────────────────────────────────────────────────────────────
    var http = require('http')
    var map = require('through2-map')
    var server = http.createServer(function (req, res) {
      if (req.method != 'POST')
        return res.end('send me a POST\n')
      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })
    server.listen(Number(process.argv[2]))
*/