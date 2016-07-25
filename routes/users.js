var express = require('express');
var UsersDao = require('../dao/UsersDao');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  UserDao.findAll();
});



module.exports = router;
