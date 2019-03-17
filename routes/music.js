var express = require('express');
var path = require('path');
var fs = require('fs');
var router = express.Router();

const NOW_PLAYING_PATH = path.join('C:/Program Files (x86)/SMG Music Display/current_song.txt');

router.get('/now', function(req, res, next) {
    fs.readFile(NOW_PLAYING_PATH, {encoding: 'utf-8'}, function(err,data){
        if (!err) {
           return res.json({value: data});
        } else {
           return next(err);
        }
     });
});

module.exports = router;