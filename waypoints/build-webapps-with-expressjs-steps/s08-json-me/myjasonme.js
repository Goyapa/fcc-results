var fs = require("fs")
var express = require('express')
var books = "";
fs.readFile(process.argv[3], function(err, data){
    if (err) throw err;
    books = JSON.parse(data)
 //   console.log(object);
})

var app = express()
    app.get('/books', function(req, res) {
      res.send(JSON.stringify(books))
    })
    app.listen(process.argv[2])
    
    

/*
Forum:
Hi try to use
response.send(JSON.stringify(JSON.parse(data)));

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var express = require('express')
    var app = express()
    var fs = require('fs')
    
    app.get('/books', function(req, res){
      var filename = process.argv[3]
      fs.readFile(filename, function(e, data) {
        if (e) return res.send(500)
        try {
          books = JSON.parse(data)
        } catch (e) {
          res.send(500)
        }
        res.json(books)
      })
    })
    
    app.listen(process.argv[2])

*/