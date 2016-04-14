var express = require('express');
var app = express();
var motivations = require('motivations');
var pickone = require('pick-one');
var exphdbs = require('express-handlebars');

//declare engine
app.engine('handlebars', exphdbs({
    defaultLayout: "main" ,
    layoutsDir: "./app/views/layouts"

}));

app.set('views', './app/views');
app.set('view engine', 'handlebars');

app.get("/", function(req, res){

    //res.send("Hey !! I am watching you !(^_^)" + pickone(motivations));
    var motivation = "coucou !!";
    res.render('motivation');

});

app.get("/about", function(req, res){


});

module.exports = app;