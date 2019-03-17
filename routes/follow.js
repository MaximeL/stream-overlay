var express = require('express');
var path = require('path');
var fs = require('fs');
var router = express.Router();

const LAST_FOLLOW_PATH = path.join('C:/streamlabsLabel/most_recent_follower.txt');

router.get('/last', function(req, res, next) {
    fs.readFile(LAST_FOLLOW_PATH, {encoding: 'utf-8'}, function(err,data){
        if (!err) {
           return res.json({value: data});
        } else {
           return next(err);
        }
     });
});

module.exports = router;