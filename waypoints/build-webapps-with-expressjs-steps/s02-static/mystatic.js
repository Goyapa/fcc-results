var path = require("path")
var express = require('express')
    var app = express()
    app.get('/home', function(req, res) {
      res.end('Hello World!')
    })
    app.use(express.static(process.argv[3] || './html'));
    app.listen(process.argv[2])
    
    
/*
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var path = require('path')
    var express = require('express')
    var app = express()
    
    app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));
    
    app.listen(process.argv[2])
*/