let mongoose = require("mongoose")
let courseModel = require("./course.model")

let fetchData = (req,res)=>{
    courseModel.find({},(err,data)=>{
        if(!err){
            console.log(data)
            let displayPage = `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Display Courses</title>
            </head>
            <body>
                <h2>Display</h2>
                <table border = 1>
                <tr>
                    <th>Course Id</th>
                    <th>Course Name</th>
                    <th>Description</th>
                    <th>Cost</th>
                <tr>`
            data.forEach(course=>{
                displayPage+=`<tr>
                <th>${course.id}</th>
                <th>${course.name}</th>
                <th>${course.description}</th>
                <th>${course.amount}</th>
            <tr>`
            })
            displayPage+=`
            </table>
                <a href="/">Back</a>
            </body>
            </html>`
            res.send(displayPage)
        }
        else{
            res.json(err);
        }
    })
}

let addCourse = (req,res)=>{
    let course = req.body;
    courseModel.insertMany(course, (err,result)=>{
        if(!err){
            res.send("Course Added!");
        }
        else{
            res.send("ID must be Unique");
        }
    })
}

let updateCourse= (req,res)=>{
    let course = req.body;
    courseModel.updateOne({_id:course._id},{$set:{name:course.name, description:course.description, amount:course.amount}},(err,result)=> {
        if(!err){
            res.send("Course Updated");
        }else {
            res.send(err);
        }
    })
}

let deleteCourse= (req,res)=>{
    let id = req.body;
    console.log(id)
    courseModel.deleteOne({_id:id.cid},(err,result)=> {
        if(!err){
            res.send("Course Deleted")
            console.log(result)
        }else {
            res.send(err);
        }
    })
}

module.exports={fetchData, addCourse, updateCourse,deleteCourse}