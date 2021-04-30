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

const PORT = process.env.PORT || 3000;

app.listen (PORT, function() {
    console.log("server started");
});
