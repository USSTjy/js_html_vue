var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send(`<h1>hello</h1>`);
});

app.get('/hello', function (req, res) {
	res.send(`<h1>hello</h1>`);
});
app.listen(3000, () => {
	console.log('start');
});
