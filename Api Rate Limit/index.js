const express = require("express");

const app = express();
const datas = require("./data");
const ratelimit = require("express-rate-limit");

const limiter = ratelimit({
    max: 5,
    windowMs: 10000,
})

app.get("/data", limiter, (req, res)=>{
    try {
        res.send({
            status: "Success",
            data: datas
        })
        console.log(req.ip)
    } catch (err) {
        console.log(err)
    }
})

app.listen(1996, ()=>{
    console.log("Listening on Port 1996");
})