var fs = require('fs'), 
		express = require('express'),
		app = express();

app.use(express.static('dist'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/dist/views/home.html');
});

app.get('/game', function(req, res){
	res.sendFile(__dirname + '/dist/views/game.html');
});

app.get('/products', function(req, res){
	res.sendFile(__dirname + '/dist/views/products.html');
});

app.get('/project', function(req, res){
	res.sendFile(__dirname + '/dist/views/project.html');
});


app.listen(3001, function(){
	process.on('uncaughtException', function(err){
		process.exit(1);
	})
	console.log('listening on 3001');
});