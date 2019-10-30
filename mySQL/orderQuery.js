var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(err => {
  if(err) throw err;
  con.query("SELECT * FROM customers ORDER BY name DESC", (err, result) => {
  	console.log(result);
  })
});