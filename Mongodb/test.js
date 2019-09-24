var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useUnifiedTopology: true, useNewUrlParser: true});


var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error:'));
db.once('open', function(){
  console.log('we are connected');
})
var kittySchema = mongoose.Schema({
  name: String
});
kittySchema.methods.speak = function(){
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
    console.log(greeting);
}

var Kitten = mongoose.model('Kitten', kittySchema);

var silence1 = new Kitten({
  name: 'Silence1'
});
var silence2 = new Kitten({
  name: 'Silence2'
});
/*
silence1.save((err, data) =>{
  if(err) return console.log(err);
  console.log(data);
});
silence2.save((err, data) =>{
  if(err) return console.log(err);
  console.log(data);
});

Kitten.find((err, docs) =>{
  if(err) return console.error(err);
  console.log(docs);
});
*/
