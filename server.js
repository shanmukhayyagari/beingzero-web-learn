require('dotenv').config()
const express = require ('express');
const mongoose = require('mongoose');
const courseLib = require('./backend/lib/courseLib');


const app = express();

app.use(express.static(__dirname+"/frontend"));
var password = process.env.Mongo_atlas_password;
const connectionString = "mongodb+srv://shanmukhayyagari:"+password+"@cluster0.cbobn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
console.log(process.env.Mongo_atlas_password);
//const dbOptions = {};
 mongoose.connect(connectionString , {useUnifiedTopology: true, useNewUrlParser: true}).then(()=>console.log("db connected"));

 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/courses",courseLib.getAllCourses);
app.post("/api/courses",courseLib.createCourse);
app.put("/api/courses/:courseid",courseLib.updateCourse);
app.delete("/api/courses/:courseid",courseLib.deleteCourse);


app.get('/' , function(req,res){
    res.send("welcome to shanmukh's basic site");

});
app.get('/resume' , function(req,res){
    let fullFilePath = __dirname + "/frontend/html/resume.html";
    res.sendFile(fullFilePath);

});

app.get('/crud' , function(req,res){
    let fullFilePath = __dirname + "/frontend/html/task.html";
    res.sendFile(fullFilePath);

});


app.get('/google' , function(req,res){
    let fullFilePath = __dirname + "/frontend/html/google.html";
    res.sendFile(fullFilePath);

});

app.get('/color' , function(req,res){
    let fullFilePath = __dirname + "/frontend/html/color.html";
    res.sendFile(fullFilePath);

});

app.get('/login' , function(req,res){
    let fullFilePath = __dirname + "/frontend/html/login.html";
    res.sendFile(fullFilePath);

});
app.get('/register' , function(req,res){
    let fullFilePath = __dirname + "/frontend/html/register.html";
    res.sendFile(fullFilePath);

});

app.get('/piechart' , function(req,res){
    let fullFilePath = __dirname + "/frontend/html/pie.html";
    res.sendFile(fullFilePath);

});

app.get('/todo' , function(req,res){
    let fullFilePath = __dirname + "/frontend/html/todo.html";
    res.sendFile(fullFilePath);

});


const PORT = process.env.PORT || 3000;

app.listen (PORT, function() {
    console.log("server started");
});
