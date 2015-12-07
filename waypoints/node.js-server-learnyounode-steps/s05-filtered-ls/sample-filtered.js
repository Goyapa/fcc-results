#!/usr/bin/env node


// Getting a directory listing using the fs module in Node.js
// http://nodeexamples.com/2012/09/28/getting-a-directory-listing-using-the-fs-module-in-node-js/

var fs = require("fs"),
    path = require("path");

var p = "./"
fs.readdir(p, function (err, files) {
    if (err) {
        throw err;
    }

    files.map(function (file) {
        return path.join(p, file);
    }).filter(function (file) {
        return fs.statSync(file).isFile();
    }).forEach(function (file) {
        console.log("%s (%s)", file, path.extname(file));
    });
});