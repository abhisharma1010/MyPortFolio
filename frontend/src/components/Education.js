import React from "react";
import Educards from "./Educards";
function Education(props){
    let edudata=props.edudata;
    return(
        <div className="w-full  pb-[60px] mt-[5%]" id="education">
            <div className=" text-white  w-10/12 mx-auto ">
               <div className="flex flex-col justify-center items-center gap-[10px]">
                  <p className="text-[#FF014F] font-[500]">Education</p>
                  <h2 className="text-[1.8rem] md:text-[2.5rem] lg:text-[3rem] text-[#C4CFDE] font-[620] text-center">My Education..</h2>
               </div>
            
            <Educards exeducation={edudata}/>
            </div>
        </div>
    );
}

export default Education;