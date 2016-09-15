var express, app, ejs, port, config;

express = require('express');
app = express();
ejs = require('ejs');
ejs.delimiter = '$';
port = process.env.PORT || 5000;

app.use('/node_modules', express.static('./node_modules'));
app.set('view engine', 'ejs');

config = {
	title: 'Angular 2' ,
};


app.get('/', function (req, res) {
  res.render('index', config);
});

app.listen(port, bootstrap);

function bootstrap() {
	console.log('listening on:', port);
}

