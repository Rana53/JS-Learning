var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

var name = 'Ben';
var addr =  'Mountain 21';
var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
con.query(sql,[name,addr], function (err, result) {
  if (err) throw err;
  console.log(result);
});