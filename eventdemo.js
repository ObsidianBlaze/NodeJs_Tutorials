const EventEmitter = require('events');
//Creating an instance of the even emitter.
const eventEmitter = new EventEmitter();

//Binding and triggering an event from an event emitter.
    eventEmitter.on('tutorial',()=>{
        console.log("Event triggered!");
    })

    //Invoking the event
    eventEmitter.emit("tutorial");
