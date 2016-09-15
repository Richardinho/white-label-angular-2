var express = require('express');

var app = express();
var ejs = require('ejs');
ejs.delimiter = '$';

var port = process.env.PORT || 5000;
var isDev = process.argv[2] && process.argv[2] === 'dev';
var apiUrl = isDev ? 'http://localhost:4000' : 'https://white-label-api.herokuapp.com';

app.set('view engine', 'ejs');


var config = {
	title: 'develop environment' ,
	apiUrl : apiUrl,
	isDev : isDev
};

app.use('/')

app.get('/', function (req, res) {
  res.render('index', config);
});

function bootstrap() {
	console.log('listening on:', port);
}

app.listen(port, bootstrap);