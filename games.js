var unirest = require('unirest');
var express = require('express');

// Configure router

var router = express.Router();

// Search for a game

// GET /games?q=:term

router.get('/', function(req, res) {
unirest.get("https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name&limit=10&offset=0&order=release_dates.date%3Adesc&search=zelda")
.header("X-Mashape-Key", "BV34Hfrv90mshnUrEQkqRtxqbyQep1pWcMzjsnJkU4hn1igikD")
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});
});

module.exports = router;
