var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost/test';

MongoClient.connect(url, function(err, db){
  if(err) throw err;
  var dbo =
})
