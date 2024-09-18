// yaha mongoose import karna hai
const mongoose = require("mongoose");
// require('dotenv').config();
exports.connect =()=>{
    mongoose.connect("mongodb+srv://sohamkumar123:PPfHqInh5R19pTb3@cluster0.yk0nx.mongodb.net/PortfolioDatabase",{
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