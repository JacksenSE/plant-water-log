const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
const morgan = require("morgan")
require('dotenv').config()


//MIDDLEWARE
app.use(express.json())



//get all plants
app.get("/api/v1/plants", (req,res) => {
    console.log("route ran")
    res.status(200).json({
        status:"Sucess",
        data:{
        plant:["Alo Vera","Spider Plant"]
        },
    });
});

//get a plant
app.get("/api/v1/plants/:id",(req, res) => {
    console.log(req.params);
});

//Create a plant
app.post("/api/v1/plants",(req, res) => {
    console.log(req.body);
});

//Update plants
app.put("/api/v1/plants/:id",(req, res) => {
    console.log(req.params.id);
    console.log(req.body);
});


//listen for sever
app.listen(process.env.PORT , () => { //
    console.log(`Connected to port: ${process.env.PORT}`) //
});