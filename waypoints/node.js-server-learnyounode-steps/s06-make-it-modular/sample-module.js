// Difference between a module and a package in Node?
// https://stackoverflow.com/questions/20008442/difference-between-a-module-and-a-package-in-node/20008966#20008966

//What's the difference between 'function foo (callback)' and 'foo(arg1, arg2, function(err,data))'?
// http://stackoverflow.com/questions/25825109/whats-the-difference-between-function-foo-callback-and-fooarg1-arg2-fun

var fs = require('fs')
var path = require('path')
 

module.exports = function (directory, extention, callback) {
  fs.readdir(directory, function (err, list) {
      if (err){
        return callback(err);
      } 
      var filter_list = [];
      list.forEach(function (file) {
        if (path.extname(file) === '.' + extention){
          filter_list.push(file);
        }
      })
       return callback(null, filter_list);
    })
}

/*
    filterFn(dir, filterStr, function (err, list) {
      if (err)
        return console.error('There was an error:', err)
      list.forEach(function (file) {
        console.log(file)
      })
    })
────────────────────────────────────────────────────────────────────────────────
solution_filter.js:
    var fs = require('fs')
    var path = require('path')
    module.exports = function (dir, filterStr, callback) {
      fs.readdir(dir, function (err, list) {
        if (err)
          return callback(err)
        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })
        callback(null, list)
      })
    }
*/
