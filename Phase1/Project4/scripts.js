var defaultBlogs= [{
    title:"Lorem ipsum 1",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie justo arcu, eget viverra mi egestas a. Nulla eget lorem vel dolor eleifend congue vitae non enim. Praesent lacinia urna vestibulum felis aliquet, sit amet fringilla ligula vehicula. Mauris egestas urna non lectus sollicitudin bibendum sit amet eu arcu. Aliquam condimentum velit est, sed cursus dui finibus ac. Etiam molestie ligula non suscipit rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec nisi est, volutpat ut fermentum vel, bibendum vel elit. ",
    picURL:"https://artbreeder.b-cdn.net/imgs/64290a168f1577e9398b9650d851.jpeg"
},
{
    title:"Lorem ipsum 2",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie justo arcu, eget viverra mi egestas a. Nulla eget lorem vel dolor eleifend congue vitae non enim. Praesent lacinia urna vestibulum felis aliquet, sit amet fringilla ligula vehicula. Mauris egestas urna non lectus sollicitudin bibendum sit amet eu arcu. Aliquam condimentum velit est, sed cursus dui finibus ac. Etiam molestie ligula non suscipit rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec nisi est, volutpat ut fermentum vel, bibendum vel elit. ",
    picURL:"https://s3.amazonaws.com/ganbreederpublic/imgs/67f5c9237fea7388e942152ea09b.jpeg"
},
{
    title:"Lorem ipsum 3",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie justo arcu, eget viverra mi egestas a. Nulla eget lorem vel dolor eleifend congue vitae non enim. Praesent lacinia urna vestibulum felis aliquet, sit amet fringilla ligula vehicula. Mauris egestas urna non lectus sollicitudin bibendum sit amet eu arcu. Aliquam condimentum velit est, sed cursus dui finibus ac. Etiam molestie ligula non suscipit rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec nisi est, volutpat ut fermentum vel, bibendum vel elit. ",
    picURL:"https://artbreeder.b-cdn.net/imgs/e9dacfb71da3b944eda4d5083557.jpeg"
}]

function displayBlogs(){
    try {
        if(localStorage.getItem("JesseImbodenJSONBlogs")!=null){
            var blogs = JSON.parse(localStorage.getItem("JesseImbodenJSONBlogs"));
        }
        else{
            var blogs = defaultBlogs;
        }
    } 
    catch (error) {
        var blogs = defaultBlogs;
    }
    var result = "<div class=\"row mg-5 text-center bg-info\"><div class=\"col-1\"></div><div class=\"row col-10 text-center bg-white border rounded\">"
    for(b in blogs){
        result += displayBlogPart(blogs[b]);
    }
    document.getElementById("main").innerHTML = result+"<div class=\"col-1\"></div></div>"
}

function displayBlogPart(blog){
    let img = "<img src="+ blog.picURL+" class=\"img-thumbnail\">"
    if(blog.picURL!==""){
        return "<div class=\"col-4 mg-2 bg-white\">"+img+
        "<h3>"+blog.title+"</h3><br/>"+
        "<p>"+blog.content+"</p>"+
        "</div>"
    }
    else{
        return "<div class=\"col-4 mg-2 bg-white\">"+
        "<h3>"+blog.title+"</h3><br/>"+
        "<p>"+blog.content+"</p>"+
        "</div>"
    }
}

function changeImg(){
    document.getElementById("linkedImage").src = document.getElementById("picUrl").value
}

function addBlog(){
    try {
        if(localStorage.getItem("JesseImbodenJSONBlogs")!=null){
            var blogs = JSON.parse(localStorage.getItem("JesseImbodenJSONBlogs"));
        }
        else{
            var blogs = defaultBlogs;
        }
    } 
    catch (error) {
        var blogs = defaultBlogs;
    }
    let t = document.getElementById("title").value;
    let c = document.getElementById("content").value;
    let p = document.getElementById("picUrl").value;
    let blog ={
        title:t,
        content:c,
        picURL:p
    }
    blogs.push(blog);
    localStorage.setItem("JesseImbodenJSONBlogs", JSON.stringify(blogs));
}