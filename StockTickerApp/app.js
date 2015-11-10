
// Tell app.js all needed modules for this file ======================================================================
var user = require('./routes/user');
var stocks = require('./routes/models/stocks'); // Exports the Schema used in our MongoDB 
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 3000;
var mongoose = require('mongoose');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var routes = require('./routes/routes');
var handlers = require('./routes/handlers');
var path = require('path');


// Set up our express application  ======================================================================
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms
app.set('view engine', 'ejs'); // set up ejs for templating
app.use(express.static(path.join(__dirname, 'public')));
routes(app, handlers);

// Start MongoDB ======================================================================

mongoose.connect("mongodb://admin:admin@ds049754.mongolab.com:49754/mongodb-sss"); // connect to our database
var db = mongoose.connection; //Instance of db (Can be used later)
var NewEntry = new stocks({ //Creating a new entry
	name : "Shan",
	index : 1,
	email : "sangha5@ca.ibm.com",
	password : "password",
	room : 1,
	cash : 30,
	portfolio : 30,
	oil : 0,
	grain : 0,
	industrial : 0,
	silver : 0,
	gold : 0,
	bonds : 0
 });

NewEntry.save(); //Saving to DB


//launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);



