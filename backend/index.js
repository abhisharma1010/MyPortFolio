// server instantiate
const express = require('express');
const app = express();
const cors = require('cors');
// import port number from .env file
// require('dotenv').config();
// const PORT = process.env.PORT || 3000;

// middleware to parse json request body
app.use(cors());
app.use(express.json());



// connect to the database
require("./config/database").connect();

//route import and mount
const user = require("./routes/contact");
app.use("/form",user);
// activate server
app.listen(4000,()=>{
    try{
        console.log(`Server is running on port 4000`);
    }catch(err){
        console.log("Server issue");   
    }
   
    
});
app.get('/',(req,res)=>{
    res.send("Hello from server");
})


