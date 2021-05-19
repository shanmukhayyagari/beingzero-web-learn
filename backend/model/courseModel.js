const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
username : String,
dateOfBirth : Date,
age : Number,
isDeleted : Boolean

});


var userModel = mongoose.model('userTable' , userSchema);


module.exports = userModel;