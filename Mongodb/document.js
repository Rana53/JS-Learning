var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useUnifiedTopology: true, useNewUrlParser: true});


var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error:'));
db.once('open', function(){
  console.log('we are connected');

const MyModel = mongoose.model('Test', new Schema({ name: String }));
const doc = new MyModel();

var a = doc instanceof MyModel; // true
var b = doc instanceof mongoose.Model; // true
//var c = doc instanceof mongoose.Document; // true
