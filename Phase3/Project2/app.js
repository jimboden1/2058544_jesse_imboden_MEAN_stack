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
let fill=``;
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
    <form submit="${addTask()}">
        <label>Employee Id:</label>
        <input type="text" name="eid"/><br/>
        <label>Task Id:</label>
        <input type="date" name="id"/><br/>
        <label>Task Name:</label>
        <input type="text" name="name"/><br/>
        <label>Deadline:</label>
        <input type="date" name="deadline"/><br/>
        <input type="submit" value="Add Task"/>
        <input type="reset" value="reset"/>
    </form>
    <button onClick="${renderTasks()}">Display Tasks</button>
    ${fill}
</body>
</html> 
`

let server = http.createServer((req,res)=> {
    response.end(indexPage);

})

function renderTasks(){
    this.fill =`
    <table>
        <tr>
            <th>Employee Id</th>
            <th>Task Id</th>
            <th>Task Name</th>
            <th>Deadline</th>
    </table>`
}

server.listen(9090,()=>console.log("Server running on port number 9090"))