var express = require('express')
var path = require("path")
var stylus = require('stylus')
    var app = express()
    app.get('/home', function(req, res) {
      res.end('Hello World!')
    })
    app.use(stylus.middleware(__dirname + '/public'));
    app.use(express.static('./public'));
  //  app.use(stylus.middleware(process.argv[3] || __dirname + '/public'));
    //app.use(express.static(process.argv[3] || './public'));
   
    app.listen(process.argv[2])
    
/*
I had issius

Cannot GET /main.css

this helped!

try running

$ killall node
at the command prompt before running your program

*/
    
/*
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var express = require('express')
    var app = express()
    
    app.use(require('stylus').middleware(process.argv[3]));
    app.use(express.static(process.argv[3]));
    
    
    app.listen(process.argv[2])
*/