// yaha mongoose import karna hai
const mongoose = require("mongoose");
require('dotenv').config();
exports.connect =()=>{
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log("DB connected successfully")
    })
    .catch((err)=>{
        console.log("DB CONNECTION NHI HO RHA");
        console.error(err);
        process.exit(1);
    });
}