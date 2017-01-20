// Package Dependencies 
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
// Set up for Express App
var app = expresss();
var PORT = 3000;
// Data Parsing
//App Listening Connection
app.listen(PORT, function () {
    console.log('App listening on Port ' + PORT);
});
// Routes