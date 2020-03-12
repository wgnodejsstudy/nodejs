const mysql = require('sync-mysql');
const config = require('./mysqlInfo.js').local;

module.exports = function () {
  return {
    init: function () {
      return new mysql({
        host: config.host,
        port: config.port,
        user: config.user,
        password: config.password,
        database: config.database
      })
    },

    test_open: function (con) {
      con.connect(function (err) {
        if (err) {
          console.error('mysql connection error :' + err);
        } else {
          console.info('mysql is connected successfully.');
        }
      })
    }
  }
};