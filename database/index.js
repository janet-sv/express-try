var mysql = require('mysql');

var con = mysql.createConnection({
  host: '127.0.0.1',
  user: 'homestead',
  password: 'secret',
  database: 'example',
  port: '33060',
});

con.connect(function(err) {
  if (err) throw err;
  console.log('Connected!');
});