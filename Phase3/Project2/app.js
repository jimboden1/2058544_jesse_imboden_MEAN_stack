let http = require("http");
let url = require("url");
let fs = require("fs");
let tasks = [];
try {
    if(fs.readFileSync("tasks.json")!=undefined){
        tasks = JSON.parse(fs.readFileSync("tasks.json").toString());
    }
} catch (error) {
    
}
let fill=`<table border="1">
<tr>
    <th>Employee Id</th>
    <th>Task Id</th>
    <th>Task Name</th>
    <th>Deadline</th>
</tr>
</table>`;
let indexPage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Planner</title>
</head>
<body>
    <h2>Task Tracker</h2>
    <form action="addTask">
        <fieldset>
            <legend>Add Task:</legend>
            <label>Employee Id:</label>
            <input type="number" name="eid"/><br/>
            <label>Task Id:</label>
            <input type="number" name="id"/><br/>
            <label>Task Name:</label>
            <input type="text" name="name"/><br/>
            <label>Deadline:</label>
            <input type="date" name="deadline"/><br/>
            <input type="submit" value="Add Task"/>
            <input type="reset" value="reset"/>
        </fieldset>
    </form><br/>
    <form action="deleteTask">
        <fieldset>
            <legend>Delete Task:</legend>
            <label>Task Id:</label>
            <input type="number" name="deleteId"/>
            <input type="submit" value="Delete Task"/>
        </fieldset>
    </form><br>
    <br>
    <form action="renderTasks">
        <input type="submit" value="Display Tasks"/>
    </form>
</body>
</html> 
`

let server = http.createServer((req,res)=> {
    let urlInfo = url.parse(req.url,true);
    if(urlInfo.path != "/favicon.ico"){
        
    
        if(urlInfo.pathname == "/addTask"){
            let task = urlInfo.query;
            let result = tasks.find(t=>t.id==task.id)
            if(result!=undefined){
                res.write(indexPage);
                res.write("The Task Id you entered already exists, please enter a different Id");
            }
            else{
                addTask(task);
                res.write("The Task added Successfully");
            }
        }
        else if(urlInfo.pathname =="/renderTasks"){
            renderTasks();
            res.write(indexPage);
            res.write(fill);
        }
        else if(urlInfo.pathname == "/deleteTask"){
        }
        else{
            res.write(indexPage);
        }
    }
    else{
        res.write(indexPage);
    }

})

function deleteTask(){
}

function addTask(task){
    tasks.push(task.toString());
    fs.writeFileSync("tasks.json",JSON.stringify(tasks));
}

function renderTasks(){
    fill +=`
    <p>It Works!</p>
    `
    console.log("add Line")
}

server.listen(9090,()=>console.log("Server running on port number 9090"))