var events = require('events');
var util = require('util');

// var eventEmitter = new events.EventEmitter();
// eventEmitter.on('Click', (btn) => {
//     console.log(btn + ' Button Clicked');
// });
// eventEmitter.emit('Click', 'button 1');
var Student = function(name) {
    this.name = name;
}
util.inherits(Student, events.EventEmitter);
var max = new Student('maxi');
max.on('Click', (marks) => {
    console.log(max.name + ' marks is : ' + marks);
});
max.on('Cli', (marks) => {
    console.log(max.name + ' mks is : ' + marks);
});
max.emit('Cli', 99);