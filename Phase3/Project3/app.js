let express = require("express");
let app = express();
let http = require("http").Server(app);
let io = require('socket.io')(http);

app.get("/",(req,res)=> {
    res.sendFile(__dirname+"\\index.html");
})

io.on("connection",(socket)=> {
    socket.on("obj",(msg)=> {
        let input = msg.toLowerCase();
        if(input.search("hello")!=-1){
            socket.emit("obj1","Hello I am a chat bot.")
        }
        else if(input.search("what is the right question")!=-1){
            socket.emit("obj1","That is the right question.")
        }
        else{
            socket.emit("obj1","I'm sorry my responses are limited. You must ask the right question.")
        }
    })
})

http.listen(9090,()=>console.log("Server running on port number 9090"));