var http = require('http');
var url = require('url');

var port = process.argv[2];

var server = http.createServer(function (req, res) {
  if (req.method != 'GET'){
    res.writeHead(404);
    return res.end('send GET request\n');
  } else {
  var parsedUrl = url.parse(req.url, true);
  var time = new Date(parsedUrl.query.iso)
  
  if(parsedUrl.pathname === '/api/parsetime') {
        var iso = {
            hour: time.getHours(),
            minute: time.getMinutes(),
            second: time.getSeconds()
        };
        return res.end(JSON.stringify(iso));
    };
    
   if(parsedUrl.pathname === '/api/unixtime') {
       var unix = {
           unixtime: time.getTime()
       };
       return res.end(JSON.stringify(unix));
    };
    
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end();
  }
});
server.listen(port);

/*
Here's the official solution in case you want to compare notes:
────────────────────────────────────────────────────────────────────────────────
    var http = require('http')
    var url = require('url')
    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }
    function unixtime (time) {
      return { unixtime : time.getTime() }
    }
    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result
      if (/^\/api\/parsetime/.test(req.url))
        result = parsetime(time)
      else if (/^\/api\/unixtime/.test(req.url))
        result = unixtime(time)
      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))
*/