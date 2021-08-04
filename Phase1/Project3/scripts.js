var projects = [];

function project(client, name, budget){
    this.client=client;
    this.name=name;
    this.budget=budget;
}

function addProject(client, name, budget){
    projects.push(new project(client,name,budget))
    JsonSave()
}

function checkScreen(){
    document.getElementById("main").innerHTML= backButton+"<br>"+printTable(projects)
}

function printTable(){
    document.write("<table><tr><th>Client</th><th>Project Name</th><th>Budget</th></tr>");
    for(project in projects) {
        document.write("<tr><th>"+project.client+"</th><th>"+project.name+"</th><th>"+project.budget+"</th></tr>");
    };
    document.write("</table>");
}

function JsonSave(){
    sessionStorage.setItem("JesseImbodenJSONProjects",JSON.parse(JSON.stringify(projects)))
}