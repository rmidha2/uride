var express = require('express')
var app = express()
app.use(express.static(__dirname + './../app/'));

app.listen(80, function(){
console.log("Listening on Port 80, Stop with Ctrl+C");
});