var express = require('express');
var app = express();
var HTTP_PORT = 8080;
var path = require("path");

function onHttpStart() {
    console.log('Express http server listening on: ' + HTTP_PORT);
}

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.use(function(req, res) {
  res.status(404).send("Page Not Found");
});

app.listen(HTTP_PORT, onHttpStart);