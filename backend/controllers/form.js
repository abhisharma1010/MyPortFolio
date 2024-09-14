// import form model or schema
const User = require("../models/formModel");
require('dotenv').config();



exports.handleform = async(req,res) =>{
    try {
        // get data
        const { yourName,  yourPhone, yourEmail, yourSubject, yourMessage } = req.body;
        // const newContact = new Contact({ yourName, yourPhone, yourEmail,yourSubject,yourMessage});
        // await newContact.save();
        // res.status(201).json({ message: 'Contact saved successfully!' });

         // create entry for user
        const user = await User.create({
            yourName,yourPhone,yourEmail,yourSubject,yourMessage
        });

    return res.status(200).json({
        success:true,
        message:'Data submitted successfully',
    });

      } 
      catch (error) {
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"Error in data submission",
        });
      }
    
}