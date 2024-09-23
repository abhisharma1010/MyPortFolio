// import mongoose
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
require('dotenv').config();
// Define the Contact schema
const contactSchema = new mongoose.Schema({
    yourName: {
        type:String,
        required:true,
    },
    yourPhone: {
        type:String,
        required:true,
    },
    yourEmail: {
        type:String,
        required:true,
    }, 
    yourSubject: {
        type:String,
        required:true,
    }, 
    yourMessage: {
        type:String,
        required:true,
    },
   
  });

// post middleware

contactSchema.post("save",async function(doc){
    // here doc is the entry which is saved in database
    try{
        console.log("doc",doc);
        //transporter
        let transporter = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,
            },
        })
        // send mail
        let info = await transporter.sendMail({
            from: 'Soham Kumar',
            to:doc.yourEmail,
            subject:"Thank You for your response",
            html:`<h2>Hello,${doc.yourName}</h2> <p>I will reach out you soon</p>`
        })

    }
    catch(error){
        console.log(error);
    }
})

// export this model
module.exports = mongoose.model("user",contactSchema);