var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  
    var fileContents = fs.readFileSync('index.html');
    var output = fileContents.toString(0,fileContents.length);

response.send(output);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
