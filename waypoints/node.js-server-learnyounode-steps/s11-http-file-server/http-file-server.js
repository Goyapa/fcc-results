var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var file = process.argv[3]

var server = http.createServer(function (req, res) {
  var readStream = fs.createReadStream(file);
  readStream.on('open', function () {
    // This just pipes the read stream to the response object (which goes to the client)
    readStream.pipe(res);
  });
  readStream.on('error', function(err) {
    res.end(err);
  });
});
server.listen(port);

/*
Here's the official solution in case you want to compare notes:
────────────────────────────────────────────────────────────────────────────────
    var http = require('http')
    var fs = require('fs')
    var server = http.createServer(function (req, res) {
      res.writeHead(200, { 'content-type': 'text/plain' })
      fs.createReadStream(process.argv[3]).pipe(res)
    })
    server.listen(Number(process.argv[2]))
*/