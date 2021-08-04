


function addProject(){
    var c = document.getElementById("client").value;
    var n = document.getElementById("name").value;
    var b = document.getElementById("budget").value;
    var project= {
        client:c,
        name:n,
        budget:b
    }
    try {
        if(sessionStorage.getItem("JesseImbodenJSONProjects")!=null){
            var projects = JSON.parse(sessionStorage.getItem("JesseImbodenJSONProjects"));
        }
        else{
            var projects = [];
        }
    } catch (error) {
        var projects = [];
    }
    projects.push(project);
    JsonSave(projects);
}

function checkScreen(){
    document.getElementById("main").innerHTML= backButton+"<br>"+printTable(projects)
}

function printTable(){
    document.write("<table><tr><th>Client</th><th>Project Name</th><th>Budget</th></tr>");
    try{
        var projects=JSON.parse(sessionStorage.getItem("JesseImbodenJSONProjects"))
        var total = 0;
        for(project in projects) {
            document.write("<tr><th>"+projects[project].client+"</th><th>"+projects[project].name+"</th><th>"+projects[project].budget+"</th></tr>");
            total+=Number(projects[project].budget);
        };
        document.write("<tr><th>total</th><th>--------></th><th>"+total+"</th></tr></table>");
    }
    catch(error){
        console.log("An error has occured")
    }
}

function JsonSave(projects){
    sessionStorage.setItem("JesseImbodenJSONProjects",JSON.stringify(projects));
}