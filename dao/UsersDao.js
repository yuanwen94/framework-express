var db = require('../lib/db/mysql');
var table = 'myapp_users';
var dao = {
  findOne: function(params, cb) {
    if (typeof params === 'string' || typeof params === 'number') {
      db.execute(
        'SELECT * FROM ' + table + ' WHERE uid=? LIMIT 1',
        [params],
        cb
      );
    } else if (typeof params === 'object') {
      var whereParams = [], values = [];
      for(var key in params) {
        whereParams.push(key+'=?');
        values.push(params[key]);
      }
      db.execute(
        'SELECT * FROM ' + table + ' WHERE ' + whereParams.join(' AND ') + 'LIMIT 1',
        values,
        cb
      );
    }

  },
  findAll: function() {

  },
  update: function() {

  },
  delete: function() {

  }
};

module.exports = dao;
