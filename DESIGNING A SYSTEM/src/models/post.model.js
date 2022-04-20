const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({

    body : {type:String, required:false},
    like:{type:String, required:false, default:0},
    image:{type:String, required:false},
    timestamps:{type:Date},
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "users",
        required:true
    }
},
{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model("posts", postSchema);