let express = require("express");
let bodyParser = require("body-parser");
let mongoose =require("mongoose");
let cors = require("cors");
let app = express();
let pageRouter = require("./pages/page.router")
app.use(cors());
app.use(bodyParser.json());

let url = "mongodb://localhost:27017/mylib";
app.use(express.urlencoded({ extended: true }))
mongoose.connect(url).
then(res=>console.log("Connected")).
catch(err=>console.log(err));

app.use("", pageRouter)
app.listen(9090,()=>console.log("Server running on port number 9090"))
