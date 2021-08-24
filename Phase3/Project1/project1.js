var readline = require("readline-sync");
var fs = require("fs");
var name = ""
var names = [];
var currentDate = "";
function logData(){
    debugger;
    try {
        if(fs.readFileSync("names.json")!=undefined){
            names = JSON.parse(fs.readFileSync("names.json").toString());
        }
    } catch (error) {

    }
    while(name!=="0"){
        debugger;
        console.log("Enter a name to save or enter 0 for name to end program.");
        name = readline.question("Enter Name: ");
        if(name!=="0"){
            let age = readline.questionInt("Enter Age: ");
            let email =readline.question("Enter Email: ");
            let date = new Date();
            currentDate = `Logged on ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
            names.push({name: name, age: age,email: email, logged: currentDate});
            fs.writeFileSync("names.json",JSON.stringify(names));
        }
    }
    debugger;
}
logData();