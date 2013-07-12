var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

//fs.readFileSync('/index.html', function(err,data){
//    if (err) throw err;
//    console.log(data);
//});
 app.get('/', function(request, response) {
    var filecontents = fs.readFileSync('index.html');
    var output = filecontents.toString('utf8',0);
    response.send(output);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
