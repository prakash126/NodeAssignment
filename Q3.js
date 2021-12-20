var event = require('events');
var eventEmitter  =new event.EventEmitter();

var listner1 = function listner1(){
    console.log("This is Listner1");
}
var listner2 = function listner2(){
    console.log("This is Listner2");
}

eventEmitter.addListener('myevent',listner1);
eventEmitter.addListener('myevent',listner2);

eventEmitter.emit('myevent');

console.log("The total listners in myevent : ",eventEmitter.listenerCount('myevent'));

eventEmitter.removeListener('myevent',listner1);

console.log("The total listners after removing in myevent : ",eventEmitter.listenerCount('myevent'));