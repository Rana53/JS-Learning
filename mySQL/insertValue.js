var mySql = require('mysql');
var con = mySql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'mydb'
})

con.connect(err => {
	if(err) throw err;
	console.log('Connect...');
	var sql = "INSERT INTO customers (name, address) VALUES ('Company Incs','Highway 37')";
	con.query(sql, (err, res) => {
		console.log('1 record inserted', res);
	})
})