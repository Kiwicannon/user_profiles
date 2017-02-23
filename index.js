var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var config = require('./config.js')

var app = express();
var port = 9666;
var corsOptions = {
    origin: 'http://localhost:9666'
}


app.use(cors(corsOptions))
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({ secret: config.sessionSecret,resave: true,saveUninitialized: true}));


app.listen(port, function () {
    console.log('Listening on port', port);
});