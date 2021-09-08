let indexPage = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cousrse Platform</title>
</head>
<body>
<div>
<h1>Course Platform</h1>
<a href = "Add">Add Course</a></br>
<a href = "Update">Update Course</a></br>
<a href = "Delete">Delete Course</a></br>
<a href = "Fetch">Fetch Course</a></br>
</div>
</body>
</html>`

let addPage = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Course</title>
</head>
<body>
    <h2>Add Course</h2>
    <form action="checkLogin">
        <label>UserName</label>
        <input type="text" name="user"/><br/>
        <label>Password</label>
        <input type="password" name="pass"/><br/>
        <input type="submit" value="submit"/>
       <input type="reset" value="reset"/> <br/>
       <a href="/">Back</a>
    </form>
</body>
</html> `

let deletePage =`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delete Course</title>
</head>
<body>
    <h2>Delete Course</h2>
    <form action="checkLogin">
        <label>UserName</label>
        <input type="text" name="user"/><br/>
        <label>Password</label>
        <input type="password" name="pass"/><br/>
        <input type="submit" value="submit"/>
       <input type="reset" value="reset"/> <br/>
       <a href="/">Back</a>
    </form>
</body>
</html>`

let updatePage =`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Update Course</title>
</head>
<body>
    <h2>Update Course</h2>
    <form action="checkLogin">
        <label>UserName</label>
        <input type="text" name="user"/><br/>
        <label>Password</label>
        <input type="password" name="pass"/><br/>
        <input type="submit" value="submit"/>
       <input type="reset" value="reset"/> <br/>
       <a href="/">Back</a>
    </form>
</body>
</html>`

let displayPage =`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Display Courses</title>
</head>
<body>
    <h2>Display</h2>
    <a href="/">Back</a>
</body>
</html>`

module.exports= {indexPage,addPage,deletePage,updatePage,displayPage}