
var mysql = require('mysql');
var conf = require('../../conf/database');

var client = mysql.createPool(conf);
var db = {
  execute: function(sql, values, cb) {
    client.getConnection(function(err, connection) {
      if(arguments.length == 2) {
        connection.query(sql, function(err, result, fields) {
          connection.release();
          cb = values; cb(result);
        });
      } else if (arguments.length == 3) {
        connection.query(sql, values, function(err, result, fields) {
          connection.release();
          cb(result);
        });
      }
    });
  },
};

module.exports = db;
