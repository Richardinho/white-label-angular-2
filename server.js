var express = require('express');

var app = express();
var ejs = require('ejs');
ejs.delimiter = '$';

var port = process.env.PORT || 5000;
var isDev = process.argv[2] && process.argv[2] === 'dev';
var apiUrl = isDev ? 'http://localhost:4000' : 'https://white-label-api.herokuapp.com';

app.set('view engine', 'ejs');

if(isDev) {
	app.use('/system.js', express.static('./jspm_packages/system.js'));
	app.use('/jspm_packages', express.static('./jspm_packages'));
	app.use('/js', express.static('js'));
	app.use('/config.js', express.static('./config.js'));
} else {
	app.use('/app.js', express.static('./app.js'));
}


var config = {
	title: 'develop environment' ,
	apiUrl : apiUrl,
	isDev : isDev
};

app.get('/', function (req, res) {
  res.render('index', config);
});

function bootstrap() {
	console.log('listening on:', port);
}

app.listen(port, bootstrap);