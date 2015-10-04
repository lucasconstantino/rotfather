var fs = require('fs'), 
		express = require('express'),
		app = express();

app.use(express.static('dist'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/dist/views/en/index.html');
});

app.get('en/game', function(req, res){
	res.sendFile(__dirname + '/dist/views/en/game.html');
});

app.get('en/products', function(req, res){
	res.sendFile(__dirname + '/dist/views/en/products.html');
});

app.get('en/project', function(req, res){
	res.sendFile(__dirname + '/dist/views/en/project.html');
});

app.get('br/', function(req, res){
	res.sendFile(__dirname + '/dist/views/br/index.html');
});

app.get('br/game', function(req, res){
	res.sendFile(__dirname + '/dist/views/br/game.html');
});

app.get('br/products', function(req, res){
	res.sendFile(__dirname + '/dist/views/br/products.html');
});

app.get('br/project', function(req, res){
	res.sendFile(__dirname + '/dist/views/br/project.html');
});


app.listen(3001, function(){
	console.log('listening on 3001');
});