const express = require ('express');

const app = express();

app.get('/' , function(req,res){
    res.send("welcome to shanmukh's basic site");

});
app.get('/resume' , function(req,res){
    let indexFilePath= __dirname + "/resume.html";
    res.sendFile(indexFilePath);

});

const PORT = process.env.PORT || 3000;

app.listen (PORT, function() {
    console.log("server started");
});
