var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useUnifiedTopology: true, useNewUrlParser: true});


var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error:'));
db.once('open', function(){
  console.log('we are connected');
});
const schema = new Schema({ name: String, age: { type: Number, min: 0 } });
const Person = mongoose.model('Person', schema);

let p = new Person({ name: 'foo', age: 'bar' });
// Cast to Number failed for value "bar" at path "age"
await p.validate();

let p2 = new Person({ name: 'foo', age: -1 });
// Path `age` (-1) is less than minimum allowed value (0).
await p2.validate();
let p1 = new Person({ name: 'food ', age: -1});
let p2 = new Person({ name: 'food', age: -2})
#include<stdio.h>
int main(){
    int i, j;
    for(int i = 0; i < n ; i++){
        for(int j = 0; j < n; j++){

        }
    }

  return 0;
}
