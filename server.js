//Plugin Import
var express = require('express'),
    ejs = require('ejs'),
    low = require('lowdb'),
    uuid = require('uuid'),
    bodyParser = require('body-parser'),
    // Flickr = require("node-flickr"), // For gallery https://www.npmjs.com/package/node-flickr
    // TweetTweet = require('tweet-tweet'), // To be implemented later, for autotweeting - https://www.npmjs.com/package/tweet-tweet
    // RSS = require('rss'), // To be implemented later, for rss feeds - https://www.npmjs.com/package/rss
    app = express();


// Variables and Misc Setup
var PORT = 3000
var db = low('db.json')

// Express Setup
app.use(express.static(__dirname + '/public/'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routes
// Basic Routes
app.get('/', function(req, res){
  res.render('index.ejs', {
    page: "Home"
  })
});

app.listen(PORT)