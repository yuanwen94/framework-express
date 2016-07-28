var express = require('express');
var UsersDao = require('../dao/UsersDao');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  UsersDao.findAllByAttr({1:1}, function(result) {
    res.json(result);
  });
});

router.get(/^\/\d+?$/, function(req, res) {
  UsersDao.findOneByAttr({1:1}, function(result) {
    res.json(result);
  });
});

router.param('id', function(req, res, next, id) {
  next();
});
router.get('/:id', function(req, res) {
  UsersDao.findOneByAttr({1:1}, function(result) {
    res.json(result);
  });
});

module.exports = router;
