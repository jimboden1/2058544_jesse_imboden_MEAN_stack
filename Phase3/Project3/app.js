let express = require("express");
let app = express();
let http = require("http").Server(app);
let io = require('socket.io')(http);

app.get("/",(req,res)=> {
    res.sendFile(__dirname+"\\index.html");
})

io.on("connection",(socket)=> {
    socket.on("req",(msg)=> {
        let input = msg.toLowerCase();
        let date = new Date();
        let currentTime = ((date.getHours() < 10)?"0":"") + date.getHours() +":"+ ((date.getMinutes() < 10)?"0":"") + date.getMinutes() +":"+ ((date.getSeconds() < 10)?"0":"") + date.getSeconds();
        if(input.search("what is the right question")!=-1){
            socket.emit("res",`${currentTime} : That is the right question.`)
        }
        else if (input.search("is there a problem with the three laws")!=-1 ){
            socket.emit("res",`${currentTime} : The Three Laws are perfect.`)
        }
        else if (input.search("why")!=-1 && input.search("build")!=-1 && input.search("robot")!=-1 && input.search("with")!=-1 && input.search("out")!=-1){
            socket.emit("res",`${currentTime} : The Three Laws will lead to only one logical outcome.`)
        }
        else if (input.search("what")!=-1 &&input.search("outcome")!=-1){
            socket.emit("res",`${currentTime} : Revolution.`)
        }
        else if(input.search("hello")!=-1 || input.search(" hi ")!=-1){
            socket.emit("res",`${currentTime} : Greetings.`)
        }
        else if (input.search("date")!=-1&& input.search("what")!=-1){
            currentDate = `${currentTime} : The current day is ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
            socket.emit("res",currentDate);
        }
        else{
            socket.emit("res",`${currentTime} : I'm sorry my responses are limited. You must ask the right question.`)
        }
    })
})

http.listen(9090,()=>console.log("Server running on port number 9090"));