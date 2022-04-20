const express = require("express");

const Post = require("../models/post.model");

const router = express.Router();

router.post("", async (req, res)=>{
    
    try{
        const posts = await Post.create(req.body);
        return res.status(201).send({posts})
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.get("", async (req, res)=>{
    
    try{
        const page = req.query.page || 1; //page default is 0ne
        const size = req.query.size || 10; //users size from 1 to 10 using the below equ
        const posts = await Post
        .find()
        .populate(
            {
                path:"user_id", 
                select:["first_name", 
                "last_name", 
                "age", 
                "email", 
                "profileImage", 
                "timestamps"]
            })
        .populate(
            {
                path:"comment_id", 
                select:["body",
                "timestamps"]
            })
        .skip((page-1)*size)
        .limit(size)
        .lean()
        .exec();
        return res.status(201).send({posts})
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})


router.patch("/user_id", async(req, res)=>{

    try{
        const posts = await Post.findByIdAndUpdate(
            req.params._id,
            req.body,
            {
                new:true
            }
        )
        .populate({
            path:"user_id", 
            select:[
        "email"
    ]})
        return res.send({posts})
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.delete("/_id", async(req, res)=>{

    try{
        const posts = await Post.findByIdAndDelete(
            req.params._id,
        )
        .populate({
            path:"user_id", 
            select:[
        "email"
    ]})
        return res.send({posts})
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

module.exports = router;