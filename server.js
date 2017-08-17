var express = require('express');
var app = express();
// passing in app as srver for http
var http = require('http').Server(app);

// sending static files and just read directoory name. (__dirname) means whateve rthe fiel lives under
app.use(express.static(__dirname));

// once get to root of webpage, send the stuff to index.html    localhost:3000
app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html');
})

// we use 3000 because we go to it a lot as developers. anything over 480 is uasable
// run on port 3000.
// process.env.PORT says go to this file on the srver and give me the file youre trying to use
http.listen(process.env.PORT || 3000, function(){
	console.log('the application is listening on port 3000');
})