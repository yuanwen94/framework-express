var db = require('../lib/db/mysql');
var _ = require('lodash');
var table = 'myapp_user';
var dao = {

  insert: function(data) {
    var _data = this._json2insert(data);
    db.execute(
      'INSERT ' + table + '(' + _data.fields + ') VALUES (' + _.repeat('?', _data.values.length) + ')',
      _data.values,
      cb
    );
  },

  delete: function() {

  },

  update: function(data, where, cb) {
    var _data = this._json2update(data);
    var _where = this._json2where(where);
    db.execute(
      'UPDATE ' + table + ' SET ' + _data.fields + ' WHERE ' + _where.condition,
      _data.values.concat(_where.params),
      cb
    );
  },

  findOneByAttr: function(where, cb) {
    var _where = this._json2where(where);
    db.execute(
      'SELECT * FROM ' + table + ' WHERE ' + _where.condition + ' LIMIT 1',
      _where.params,
      cb
    );
  },

  findAllByAttr: function(where, cb) {
    var _where = this._json2where(where);
    db.execute(
      'SELECT * FROM ' + table + ' WHERE ' + _where.condition,
      _where.params,
      cb
    );
  },

  _json2insert: function(data) {
    var fields = [], values = [];
    for(var key in data) {
      fields.push(key);
      values.push(data[key]);
    }
    return {
      fields: condition.join(','),
      values: values
    };
  },

  _json2update: function(data) {
    var fields = [], values = [];
    for(var key in data) {
      fields.push(key+'=?');
      values.push(data[key]);
    }
    return {
      fields: fields.join(','),
      values: values
    };
  },

  _json2where: function(data) {
    var condition = [], params = [];
    for(var key in data) {
      condition.push(key+'=?');
      params.push(data[key]);
    }
    return {
      condition: condition.join(' AND '),
      params: params
    };
  },


};

module.exports = dao;
