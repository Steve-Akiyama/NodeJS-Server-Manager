var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'USERNAME_HERE',
  password        : 'PASSWORD_HERE',
  database        : 'DATABASE_HERE'
});
module.exports.pool = pool;
