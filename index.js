const express = require ('express');
const axios = require ('axios');
const bodyParser = require ('body-parser');

const app = express();

// support parsing of application/json type post data
app.use(bodyParser.json());

// support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({extended: true}));

app.listen(8001,()=>{
    console.log("Server started")
})

app.post("/postToPage", (req,res)=>{
    
})