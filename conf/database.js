var express = require('express');
var app = express();
var env = app.get('env'), conf = {};

if (env == 'development') {

  conf = {
    connectTimeout  : 30000,
    connectionLimit : 10,
    host            : '127.0.0.1',
    port            : 3306,
    user            : 'root',
    password        : 'root',
    database        : 'myapp'
  };

} else if (env == 'test') {

  conf = {
    connectTimeout  : 30000,
    connectionLimit : 10,
    host            : '',
    port            : 3306,
    user            : '',
    password        : '',
    database        : ''
  };

} else if (env == 'production') {

  conf = {
    connectTimeout  : 30000,
    connectionLimit : 10,
    host            : '',
    port            : 3306,
    user            : '',
    password        : '',
    database        : ''
  };
}

module.exports = conf;
