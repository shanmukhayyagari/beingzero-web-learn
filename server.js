require('dotenv').config()
const express = require ('express');
const mongoose = require('mongoose');
const courseLib = require('./backend/lib/courseLib');
const Configure = require('./backend/config/Configure');
const dbconnect = require('./backend/lib/dbconnect');


const app = express();

app.use(express.static(__dirname+"/frontend"));

dbconnect.moongoseconnect();
 
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

app.get('/tambola' , function(req,res){
    let fullFilePath = __dirname + "/frontend/html/tambola.html";
    res.sendFile(fullFilePath);

});


app.listen (Configure.webPort, function() {
    console.log("server started");
});
