var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var fileContents = fs.readFileSync('index.html');
var output = fileContents.toString('utf8',0,fileContents.length);
console.log(fileContents);
console.log(output);

app.get('/', function(request, response,output) {
       response.send(output);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
