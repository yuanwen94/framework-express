
var express = require('express');
var router = express.Router();

var _ = require('lodash');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sample', function(req, res) {
  // console.log(_.chunk(['a','b','c','d'], 2));
  var data = _.map({'a': 1, 'b': 2}, function(n){
    return n * n;
  });
  console.log(data);
  res.end();
});

module.exports = router;
