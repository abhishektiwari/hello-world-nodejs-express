var express = require('express');
var index = express();

index.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = index.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});