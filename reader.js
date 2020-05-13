const ReadLine = require("readline");
//Creating the interface.
const ReadLineInterface = ReadLine.createInterface({ input: process.stdin, output: process.stdout })

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);

let answer = num1 * num2;

ReadLineInterface.question(`What is ${num1} * ${num2} ? \n`,
    (userInput) => {
        if(userInput.trim() == answer){
            ReadLineInterface.close();
        }
        else{
            ReadLineInterface.setPrompt("Your entered an incorrect answer \n");
            ReadLineInterface.prompt();
            ReadLineInterface.on("line",(userInput)=>{
                if(userInput.trim() == answer){
                    ReadLineInterface.close();
                }
                else{
                    ReadLineInterface.setPrompt(`Incorrect answer as ${userInput} try again!`);
                    ReadLineInterface.prompt();
                }
            })
        }
    });

ReadLineInterface.on("close",()=>{
    console.log("Correct answer");
});



