const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({

    body : {type:String, required:true},
    timestamps:{type:Date},
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "users",
        required:true
    },
    post_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "posts",
        required:true
    }
},
{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model("comments", commentSchema);