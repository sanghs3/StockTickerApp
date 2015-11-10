var express = require('express');
var app = express();
var mongoose = require('mongoose');
var stocks = require('./models/stocks');
var StocksSchema = mongoose.model('stocks').schema;
var StocksModel = mongoose.model('stocks');


exports.index = function(req, res) {
	res.render('index', {
		title : 'Express'
	});
};

exports.game = function(req, res) {
	res.render('game', {
		title : 'Game'
	});
};


