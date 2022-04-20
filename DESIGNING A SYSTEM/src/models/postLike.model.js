const mongoose = require("mongoose");

const postLikeSchema = new mongoose.Schema({

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

module.exports = mongoose.model("postLikes", postLikeSchema);