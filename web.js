var express = require('express');
var fs = require('fs');
var buf = require('Buffer');

var app = express.createServer(express.logger());

var readFile = function(fileName) {
  return buf.toString(fs.readFileSync(fileName));
}

app.get('/', function(request, response) {
  response.send(readFile('index.html');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
