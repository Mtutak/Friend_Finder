// Package Dependencies 
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
// Set up for Express App
var app = express();
var PORT = process.env.PORT || 3000;
// Data Parsing
// BodyParser makes it possible for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));
// Routes
//passing in (app) in module exports can export something in particular
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);
//App Listening Connection
app.listen(PORT, function () {
    console.log('App listening on Port ' + PORT);
});