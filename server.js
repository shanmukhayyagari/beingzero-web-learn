const express = require ('express');

const app = express();

app.use(express.static(__dirname+"/frontend"));

app.get('/' , function(req,res){
    res.send("welcome to shanmukh's basic site");

});
app.get('/resume' , function(req,res){
    let fullFilePath = __dirname + "/frontend/html/resume.html";
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


const PORT = process.env.PORT || 3000;

app.listen (PORT, function() {
    console.log("server started");
});
