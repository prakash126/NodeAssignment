var event = require('events');
var eventEmitter  =new event.EventEmitter();

//Listner 1
var listner1 = function listner1(){
    console.log("This is Listner1");
}

//Listner2
var listner2 = function listner2(){
    console.log("This is Listner2");
}

//Connecting Listner with Event
eventEmitter.on('myevent',listner1);
eventEmitter.on('myevent',listner2);

//Event emit
eventEmitter.emit('myevent');
