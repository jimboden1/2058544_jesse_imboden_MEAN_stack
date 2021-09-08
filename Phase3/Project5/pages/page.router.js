let express = require("express")
let router = express.Router();
const CC = require("../course.controller");
router.get("/",(request,response)=>{response.sendFile(__dirname + '/index.html')})
router.get("/Add",(request,response)=>{response.sendFile(__dirname + '/add.html')})
router.get("/Update",(request,response)=>{response.sendFile(__dirname + '/update.html')})
router.get("/Delete",(request,response)=>{response.sendFile(__dirname + '/delete.html')})
router.get("/Fetch", CC.fetchData);
router.post("/addCourse", CC.addCourse)
router.post("/updateCourse", CC.updateCourse)
router.post("/deleteCourse", CC.deleteCourse)

module.exports= router;