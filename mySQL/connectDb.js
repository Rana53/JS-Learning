var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) console.log('Opps... something wrong');
  console.log("Connected!....");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });
}); 
