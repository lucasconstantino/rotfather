var fs = require('fs'), 
		express = require('express'),
		app = express();

app.use(express.static('dist'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/dist/index.html');
});

app.get('/game', function(req, res){
	res.sendFile(__dirname + '/dist/game.html');
});

app.get('/products', function(req, res){
	res.sendFile(__dirname + '/dist/products.html');
});

app.get('/project', function(req, res){
	res.sendFile(__dirname + '/dist/project.html');
});


app.listen(3001, function(){
	console.log('listening on 3001');
});