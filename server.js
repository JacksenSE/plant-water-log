const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
const path = require('path');
require('dotenv').config()


//MIDDLEWARE

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'ui/build')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'ui/build', 'index.html'));
})

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


app.listen(4005, () => {
    console.log('Server is running on port 4005');
})