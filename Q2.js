var event = require('events');
var eventEmitter  =new event.EventEmitter();

var listner1 = function listner1(){
    console.log("This is Listner1");
}
var listner2 = function listner2(){
    console.log("This is Listner2");
}

eventEmitter.on('myevent',listner1);
eventEmitter.on('myevent',listner2);

eventEmitter.emit('myevent');

console.log(eventEmitter.eventNames());