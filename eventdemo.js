const EventEmitter = require('events');
//Creating an instance of the even emitter.
const eventEmitter = new EventEmitter();

//Binding and triggering an event from an event emitter.
    eventEmitter.on('tutorial',(num1, num2)=>{
        console.log(num1 + num2);
    })

    //Invoking the event
    eventEmitter.emit("tutorial",2,3);



    //Creaintg a class
    class Person extends EventEmitter{
        constructor(name){
            super();
            this._name = name;
        }
        getName(){
            return this._name;
        }
    }
 let demo = new Person("James");

 let samuel = new Person("Samuel");
 samuel.on("functionName",()=>{
     console.log("My name is " + samuel.getName());
 })

 //Triggering the event.
 samuel.emit("functionName");
 
 demo.on("name",()=>{
     console.log("My name is " + demo.getName());
 })

 demo.emit("name");


