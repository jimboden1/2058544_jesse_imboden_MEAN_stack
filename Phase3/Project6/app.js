let express = require("express");
let app = express();
let http = require("http").Server(app);
let io = require('socket.io')(http);
let mongoose = require("mongoose");
let chatModel = require("./chat.model")

let url = "mongodb://localhost:27017/mylib";
mongoose.connect(url).
then(res=>console.log("Connected")).
catch(err=>console.log(err));


app.get("/",(req,res)=> {
    res.sendFile(__dirname+"\\index.html");
})

io.on("connection",(socket)=> {
    socket.on("req",(chat)=> {
        chatModel.insertMany(chat, (err,result)=>{
            if(!err){
                socket.emit("res","Message Logged!");
            }
            else{
                socket.emit("res",err);
            }
        })
    })
})

http.listen(9090,()=>console.log("Server running on port number 9090"));