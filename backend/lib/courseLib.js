const coursemodel = require('../model/courseModel');

module.exports.createCourse = function(req,res){
    var course = new courseModel(req.body);
    course.save()
        .then(item => {
            res.send("item saved to database");
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
}

module.exports.getAllCourses = function(req,res){
    var query ={};
    courseModel.find(query,function(err,courseobjarr){
        if(err){
            res.json({error:err});
        }
        else{
          res.json(courseobjarr);
        }

    })
};