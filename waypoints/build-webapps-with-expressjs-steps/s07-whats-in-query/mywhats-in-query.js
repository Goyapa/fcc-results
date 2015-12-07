var express = require('express')
    var app = express()
    app.get('/search', function(req, res) {
        var query = req.query;
        delete query.__proto__;
      res.send(JSON.stringify(query))
    })
    app.listen(process.argv[2])
    
    
/*
Official WHAT'S IN QUERY solution doesn't work #82
https://github.com/azat-co/expressworks/issues/82
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var express = require('express')
    var app = express()
    
    app.get('/search', function(req, res){
      var query = req.query
      res.send(query)
    })
    
    app.listen(process.argv[2])
*/