/**
 * Created by JohnWu on 2016-10-26.
 */

// set up ======================================================================
var express = require('express');
var app = express();
var port  	 = process.env.PORT || 5000;

var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// configuration ===============================================================

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

// routes ======================================================================
require('./app/routes.js')(app);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listing on port " + port);