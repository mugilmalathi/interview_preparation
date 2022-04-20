const express = require("express");
const connect = require("./configs/db");

const userController = require("./controller/user.controller");
const postController = require("./controller/post.controller");
const commentController = require("./controller/comment.controller");

const app = express();

app.use(express.json());

app.use("/users", userController);
app.use("/posts", postController);
app.use("/comments", commentController);

app.listen(7890, async function(){

    try{
        await connect();
        console.log("My Port 7890 is running...!")
    }catch(err){
        console.log("Error Message:", err.message);
    }
})