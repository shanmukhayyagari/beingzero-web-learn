require('dotenv').config()
const express = require ('express');
const mongoose = require('mongoose');
const courseLib = require('./backend/lib/courseLib');
const Configure = require('./backend/config/Configure');
const dbconnect = require('./backend/lib/dbconnect');
const webrouter = require('./backend/routes/webroutes');
const users= require('./backend/model/user');
const { request } = require('express');




const app = express();



var cookieParser=require("cookie-parser")
var session = require("express-session");
const MongoStore = require('connect-mongo');




app.use(express.static(__dirname+"/frontend"));

dbconnect.moongoseconnect();
 
app.use(session({
    secret:"thi is secret!!!!",
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:60*60*1000
    },
    store:  MongoStore.create({ mongoUrl:process.env.MONGO_CONNECTION_STRING })

}))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use(cookieParser());



app.get("/api/courses",courseLib.getAllCourses);
app.post("/api/courses",courseLib.createCourse);
app.put("/api/courses/:courseid",courseLib.updateCourse);
app.delete("/api/courses/:courseid",courseLib.deleteCourse);




app.post('/api/register', function(req,res){
    users.find({email : req.body.email }, function (err, data) {
        if(err){ res.status(400).json({msg:"Failed"}); }
        else {//console.log(data);
              if(data.length>0)
              res.status(200).json({msg:"Saved Successful", result : data});
              else
              { 
                
                var add= new users(req.body);
                add.save(function(err,record) {
                if(err){
                    res.redirect("/register");
                }
                else {
                    res.redirect("/login");
                   }
                });
              }
             }
    });
})



app.post('/api/login', function(req,res){
    users.find(req.body , function (err, data) {
        if(err){ res.status(400).json({msg:"Failed"}); }
        else if(data.length==1)
        {
            res.redirect("/");
              
             }
             else{
                req.session.userid=data._id
                req.session.username=data.username
                 res.redirect("/login");

             }
    });
})






app.get('/' , function(req,res){
    console.log(req.session);
    res.send("welcome ");


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
