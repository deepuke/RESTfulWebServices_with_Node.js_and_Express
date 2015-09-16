/**
 * @author 404989
 */
var express = require('express'),
    mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/bookAPI');
var book = require('./models/bookModel');

var app = express();

var port = process.env.PORT || 3000;

var bookRouter = express.Router();

bookRouter.route('/Books').get(function(req, res) {
	/*
	 var responseJSON  = {
	 hello : 'This is my API'
	 };
		res.json(responseJSON);
	* */
	Book.find(function(err, books){
		if(err){
			res.status(500).send(err);
		} else {
			res.json(books);
		}
	});
	
});

app.use('/api', bookRouter);

app.get('/', function(req, res) {
	res.send("Welcome to ReST API");
});

app.listen(port, function() {
	console.log("Gulp is running my app on port : " + port);
});
