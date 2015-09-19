/**
 * @author 404989
 */
var express = require('express'), 
	mongoose = require('mongoose'), 
	cors = require('cors'), 
	bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/bookAPI');

var app = express();
app.use(cors());

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
	extended : true
}));
app.use(bodyParser.json());

var Book = require('./models/bookModel');
bookRouter = require('./Routes/bookRoutes')(Book);

app.use('/api/Books', bookRouter);

app.get('/', function(req, res) {
	res.send("Welcome to ReST API");
});

app.listen(port, function() {
	console.log("Gulp is running my app on port : " + port);
});