console.log("First Node App, Again.");

//Destructure methond
// const {john, peter} = require('./4-names');

//Reference method
const name = require('./4-names');

const sayHi = require('./5-utils');

// console.log(names);

sayHi("danny")
sayHi(name.john)
sayHi(name.peter)
