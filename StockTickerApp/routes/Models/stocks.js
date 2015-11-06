var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StockSchema = new Schema({
	name : String,
	index : Number,
	email : String,
	password : String,
	room : Number,
	cash : Number,
	portfolio : Number,
	oil : Number,
	grain : Number,
	industrial : Number,
	silver : Number,
	gold : Number,
	bonds : Number
}, {
	collections : "Stocks"
});

module.exports = mongoose.model('stocks', StockSchema);

