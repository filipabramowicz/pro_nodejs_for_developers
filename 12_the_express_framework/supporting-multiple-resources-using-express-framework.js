var express = require("express");
var http = require("http");
var app = express();

// there are simmilar methods for put, post and delete
app.get("/", function(req, res, next){
	res.send("Hello <strong>home page</strong>");
});

app.get("/foo", function(req, res, next){
	res.send("Hello <strong>foo</strong>");
});

app.get("/bar", function(req, res, next){
	res.send("Hello <strong>bar</strong>");
});

http.createServer(app).listen(8000);

