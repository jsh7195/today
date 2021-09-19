const mysql = require('node-mysql');

var run = function(){

  const db = mysql.createConnection({
    host : 'localhost:3306',
    user : 'odin',
    password: 'odin',
    database: 'odin_db'
  })

  db.connect();
  db.end();
  return db;
}

module.exports.run = run;
