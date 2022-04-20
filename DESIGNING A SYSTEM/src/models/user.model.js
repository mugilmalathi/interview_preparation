const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    first_name : {type:String, length:30, required:true},
    last_name:{type:String, length:30, required:true},
    age:{type:Number, required:true},
    email:{type:String, required:true},
    profileImage:[{type:String}],
    timestamps:{type:Date}
},
{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model("users", userSchema);