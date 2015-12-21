// boilerplate code
var express = require('express'),
		app = express(),
		bodyParser = require('body-parser'),
		methodOverride = require('method-override'),
		morgan = require("morgan"),
		postRoutes = require("./routes/posts"),
		path = require("path");

// access client assets from index view (line 32)
app.use('/css',express.static(path.join(__dirname, '../client/css')));
app.use('/js',express.static(path.join(__dirname, '../client/js')));
app.use('/templates',express.static(path.join(__dirname, '../client/js/templates')));
// set static directory to public
app.use(express.static('public'));
// use morgan
app.use(morgan("tiny"));
// use body parser
app.use(bodyParser.urlencoded({extended: true}));
// body-parser json
app.use(bodyParser.json());
// use method-override
app.use(methodOverride('_method'));

app.use('/api/posts', postRoutes);

// Set home page route
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
});

// start the server
app.listen(process.env.PORT || 3000, function () {
	console.log('Starting a server on localhost:3000');
});