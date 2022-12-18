const mongoose = require('mongoose');

//Creating Schema using mongoose
const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    repeatPassword:{
        type:String,
        required:true,
    },
   personalInformation:{
        userName:String,
       phoneNumber:String,
       addressLine:String,
       city:String,
       country:String,
       postCode:String,
       securityQuestion:String,
       height:String,
       weight:String,

   },
    token:{
        type:String
    }
})

//Creating models
const userModel = mongoose.model('UserService',userSchema);
module.exports = userModel;