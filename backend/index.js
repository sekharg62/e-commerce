//import all required package
const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require ("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors =require("cors");
import MONGODB_KEY from './.env'

app.use(express.json());
app.use(cors() );

//database connection
mongoose.connect(MONGODB_KEY);


app.listen(port,(error)=>{
    if(!error){
        console.log("server running on port:"+port);
    }
    else {
        console.log("Error:"+error);
    }
})