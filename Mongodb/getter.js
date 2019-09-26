var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useUnifiedTopology: true, useNewUrlParser: true});


var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error:'));
db.once('open', function(){
  console.log('we are connected');
});
const root = 'https://s3.amazonaws.com/mybucket';
var userSchema = new mongoose.Schema({
  name: String,
  picture: {
    type: String,
    get: v => `${root}${v}`
  }
});

const User = mongoose.model('User', userSchema);
const doc = new User({ name: 'Val', picture: '/123.png'});
console.log(userSchema.path('name'));
//console.log(doc.toObject());
