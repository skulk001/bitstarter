var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

fs.readFileSync('/index.html', function(err,data){
    if (err) throw err;
    console.log(data);
});

//var output = data.toString('utf8',0,data.length);

//console.log(fileContents);
console.log(output);

app.get('/', function(request, response) {

filecontents = fs.readFileSync('index.html');
output = filecontents.toString('utf8',0);
response.send(output); 
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
