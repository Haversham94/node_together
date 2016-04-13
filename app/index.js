var express = require('express');
var app = express();

app.get("/", function(req, res){

    res.send("Hey !! I am watching you !(^_^)");

});

app.get("/about", function(req, res){

    res.send("Hey !! I am steal watching you !(*_^)");

});

module.exports = app;