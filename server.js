// Get the dependencies

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var cookieParser = require('cookie-parser');
var session = require('express-session');
const secret = !!process.env.SESSION_SECRET ? process.env.SESSION_SECRET : 'local_secret'
app.use(cookieParser());
app.use(session({secret: secret}));

var passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

// Point static path to dist -- For building -- REMOVE
//TODO: Change to public folder with index.html
app.use(express.static(path.join(__dirname, 'dist/test-project')));

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

const port = process.env.PORT || '3200';
app.set('port', port);


// Create HTTP server
const server = http.createServer(app);
server.listen( port , () => console.log('Running on port 3200'));

//require('./assignment/app')(app);

require('./assignment/app')(app);

// var dbUrl = 'mongodb://127.0.0.1:27017/webdev';
var dbUrl = 'mongodb://heroku_gzllqk94:pte2i4krui750evbh14es83ics@ds121406.mlab.com:21406/heroku_gzllqk94';
var mongoose = require('mongoose');
var db = mongoose.connect(dbUrl, {
  useNewUrlParser: true});

