var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(err => {
  if(err) throw err;
  con.query("DELETE FROM customers WHERE address = 'Mountain 21'", (err, result) => {
  	console.log(result.affectedRows + ' Row deleted');
  })
});