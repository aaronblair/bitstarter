var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var readFile = function(fileName) {
  return fs.readFileSync(fileName).toString();
};

app.get('/', function(request, response) {
  response.send(readFile('index.html'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
