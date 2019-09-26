var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useUnifiedTopology: true, useNewUrlParser: true});


var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error:'));
db.once('open', function(){
  console.log('we are connected');
});
// var animalSchema = new mongoose.Schema({ name: String, type: String });
// animalSchema.methods.findSimilarTypes = function(cb){
//      return this.model('Animal').find({ type: this.type}, cb);
// }
// var Animal = mongoose.model('Animal', animalSchema);
// var dog = new Animal({ type: 'dog'});
// dog.findSimilarTypes(function(err, dogs){
//   console.log(dogs);
// });

const userSchema = new mongoose.Schema({
  socialMediaHandles: {
    type: Map,
    of: String
  }
});
const User = mongoose.model('User', userSchema);
const person1 = new User({
  socialMediaHandles:{
    github: 'Rana53',
    twitter: '@Rana_jahid'
  }
});

console.log(person1.socialMediaHandles);
