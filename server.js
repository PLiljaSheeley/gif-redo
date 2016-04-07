var express = require('express'),
    app = express();
var path = require('path');
var portDecision = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname + '/public')));

app.get('/', function(req,res){
	res.sendFile(path.join(__dirname + '/index.html'));
})

var server = app.listen(portDecision, function(){
	var port = server.address().port;
	console.log("listening on port", port);
})
