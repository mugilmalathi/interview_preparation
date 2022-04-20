const express = require("express");
const { default: mongoose } = require("mongoose");

const User = require("../models/user.model");

const router = express.Router();

router.post("", async (req, res)=>{
    
    try{
        const users = await User.create(req.body);
        return res.status(201).send({users})
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.get("", async (req, res)=>{
    
    try{
        const page = req.query.page || 1; //page default is 0ne
        const size = req.query.size || 10; //users size from 1 to 10 using the below equ
        const users = await User
        .find()
        .skip((page-1)*size)
        .limit(size)
        .lean()
        .exec();
        return res.status(201).send({users})
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

//get one user by using id
router.get("/_id", async (req, res)=>{
    
    try{
        const id = mongoose.Schema.Types.ObjectId;
        const users = await User
        .find(req.params.id)
        .lean()
        .exec();
        return res.status(201).send({users})
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.patch("/_id", async (req, res)=>{
    
    try{
        const users = await User.findByIdAndUpdate(
            req.params.Types.ObjectId,
            req.body,{
               new:true
            });
        return res.send({users})
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.delete("/id", async (req, res)=>{
    
    try{
        const users = await User.findByIdAndDelete(
            req.params.Types.ObjectId
            );
        return res.send({users})
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

module.exports = router;