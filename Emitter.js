const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

class MyClass extends EventEmitter {

    constructor(name) {
        super();
        this._name = name;
    }

    getName() {
        console.log(this._name);
    }

}

Demon = new MyClass("Demon");
Demon.on("Name", () => {
    Demon.getName();
});

Demon.emit("Name");

