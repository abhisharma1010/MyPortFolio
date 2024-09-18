import React from "react";
import { useState } from "react";
import { toast } from 'react-hot-toast';
import axios from 'axios';
function Contactform(){

    const [FormData,setFormData]=useState({
        yourName:"",
        yourPhone:"",
        yourEmail:"",
        yourSubject:"",
        yourMessage:"",
      })

      const [submitted, setSubmitted] = useState(false);
      function changeHandler(event){
        const{name,value,checked,type}=event.target;
        setFormData((prev) => ({...prev,[name]:type==="checkbox" ? checked : value}))
      }
      async function submitHandler(event){
        event.preventDefault();
        console.log("Finally printing the value of form Data")
        console.log(FormData);
        //  Clear form data after submission
        setFormData({
            yourName:"",
            yourPhone:"",
            yourEmail:"",
            yourSubject:"",
            yourMessage:"",
      });

      try {
        // Send form data to Express backend
        await axios.post('http://localhost:4000/form/contact', FormData);
        setSubmitted(true);
        toast.success("Message has been sent");
      } catch (error) {
        toast.error("Message has not been sent");
      }
      }
    
    return (
        <div className="px-[30px] py-[30px]">
         
            <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4">
                {/* for your name and phone number  */}
                <div className="flex flex-col gap-y-4 lg:flex-row w-full gap-x-4">
                    {/* for your name */}
                    <div className="flex flex-col w-full">
                        <label htmlFor="yourName" className="text-[#A0A8B3] text-[12px] font-medium mb-[20px]">YOUR NAME <sup className="text-[#FF014F]">*</sup></label>
                        <input type="text" name="yourName" id="yourName" placeholder='' value={FormData.yourName} onChange={changeHandler} className="bg-[#191B1E] rounded-[6px] px-[15px] text-[14px] h-[55px] tracking-[1px] focus:border focus:border-[#FF014F] bg-none outline-0" required/>
                    </div>

                    {/* for phone number */}
                    <div className="flex flex-col w-full">
                        <label htmlFor="yourPhone" className="text-[#A0A8B3] text-[12px] font-medium mb-[20px]">PHONE NUMBER <sup className="text-[#FF014F]">*</sup></label>
                        <input type="text" name="yourPhone" id="yourPhone" placeholder='' value={FormData.yourPhone} onChange={changeHandler} className="bg-[#191B1E] rounded-[6px] px-[15px] text-[14px] h-[55px] tracking-[1px] focus:border focus:border-[#FF014F] bg-none outline-0" required/>
                    </div>
                    
                </div>

                {/* for email */}
                    <div className="flex flex-col">
                        <label htmlFor="yourEmail" className="text-[#A0A8B3] text-[12px] font-medium mb-[20px]">EMAIL <sup className="text-[#FF014F]">*</sup></label>
                        <input type="text" name="yourEmail" id="yourEmail" placeholder=''  value={FormData.yourEmail}  onChange={changeHandler} className="bg-[#191B1E] rounded-[6px] px-[15px] text-[14px] h-[55px] tracking-[1px] focus:border focus:border-[#FF014F] bg-none outline-0" required/>
                    </div>

                {/* for subject */}
                    <div className="flex flex-col">
                        <label htmlFor="yourSubject" className="text-[#A0A8B3] text-[12px] font-medium mb-[20px]">SUBJECT <sup className="text-[#FF014F]">*</sup></label>
                        <input type="text" name="yourSubject" id="yourSubject" placeholder=''  value={FormData.yourSubject} onChange={changeHandler} className="bg-[#191B1E] rounded-[6px] px-[15px] text-[14px] h-[55px] tracking-[1px] focus:border focus:border-[#FF014F] bg-none outline-0" required/>
                    </div>

                {/* for message */}
                    <div className="flex flex-col">
                        <label htmlFor="yourMessage" className="text-[#A0A8B3] text-[12px] font-medium mb-[20px]">MESSAGE <sup className="text-[#FF014F]">*</sup></label>
                        <textarea name="yourMessage" id="yourMessage" cols="30" rows="10"  value={FormData.yourMessage}  onChange={changeHandler} className="bg-[#191B1E] rounded-[6px] px-[15px] text-[14px]  tracking-[1px] focus:border focus:border-[#FF014F] bg-none outline-0" required/>
                    </div>
                <button className="text-[14px] font-semibold bg-[#16181c] text-[#FF014F] rounded-[6px] py-[15px] focus:border focus:border-[#FF014F]">
                    SEND MESSAGE
                </button>
            </form>
          


    
        </div>
    )
}

export default Contactform;