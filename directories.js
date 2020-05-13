const fs = require("fs");

// Creating a folder
fs.mkdir("tutorial",(error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("Folder created.");
        fs.writeFile("./tutorial/demo.txt","This is within the folder",(error)=>{
            if(error){
                console.log(error);
            }
            else{
                console.log("File created");
            }
        })
    }
});

//Deleting a folder
// fs.rmdir("tutorial",(error)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log("Folder deleted.");
//     }
// });