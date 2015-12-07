var net = require('net');
var strftime = require('strftime');
// console.log(strftime('%F %H:%M', new Date())) // => 2011-06-07 18:51:45
var port = process.argv[2];

var server = net.createServer(function (socket) {
      // socket handling logic
//  console.log("opened server on %j", socket);
  
  socket.write(strftime('%F %H:%M', new Date()).toString());
  socket.end();
  
    })
    server.listen(port);
   // console.log("opened server on %j", port);


/*
Here's the official solution in case you want to compare notes:
────────────────────────────────────────────────────────────────────────────────
    var net = require('net')
    function zeroFill(i) {
      return (i < 10 ? '0' : '') + i
    }
    function now () {
      var d = new Date()
      return d.getFullYear() + '-'
        + zeroFill(d.getMonth() + 1) + '-'
        + zeroFill(d.getDate()) + ' '
        + zeroFill(d.getHours()) + ':'
        + zeroFill(d.getMinutes())
    }
    var server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })
    server.listen(Number(process.argv[2]))
*/