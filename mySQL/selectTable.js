var mySql = require('mysql');
var con = mySql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'mydb'
});

con.connect(err => {
	if(err) throw err;
    con.query("SELECT name, address FROM customers", (err, result, fields) => {
      if(err) throw err;
      console.log(fields[1].name);
    });
})