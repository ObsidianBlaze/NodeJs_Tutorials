const readline = require("readline");
const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Creating a randomizer.
num1 = Math.floor((Math.random() * 10) + 1);
num2 = Math.floor((Math.random() * 10) + 1);

answer = num1 + num2;

readlineInterface.question(`What is the sum of ${num1} + ${num2} ? \n`, (userinput) => {
    if (userinput.trim() == answer) {
        console.log("Correct Input");

        readlineInterface.close();
    }
})

//Using the event class
readlineInterface.on("close",()=>{
    console.log("Correct!");
});

