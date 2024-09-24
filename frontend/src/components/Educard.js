import React, { useEffect, useRef }  from "react";  
import edudata from "../edudata";

function Educard(props){
    let edudetail=props.edudetail;
    return (
      
        <div className="educard bg-[#1a1a1a] rounded-[.8rem] w-[520px] py-[20px] px-[25px] flex flex-col gap-[20px]  border border-[#1a1a1a] ">
            {/* for title , college name and marks */}
            <div className=" flex justify-between">
                {/* //for title and college name */}
                <div className="flex flex-col gap-[10px] pb-[15px]">
                    <h2 className="edutitle text-[21px] font-weight-200 text-[#C4CFDE] font-[620]">{edudetail.title}</h2>
                     <p className="edudetail text-[14px] text-[#C4CFDE] ">{edudetail.college}</p>
                </div>
                {/* //for marks */}
                <div className="marks flex items-center  justify-end">
                    <div className=" px-[10px] py-[4px] rounded-[.2rem] bg-[#262626]">
                        <p className="text-[#FF014F] font-[650]">{edudetail.marks}</p>
                    </div>
                </div>

            </div>
            {/* // white line */}
            <div className="break h-[0.3vh] bg-[#C4CFDE] w-full"></div>
            {/* // for description */}
            <div>
                <p className="edudescription text-[#C4CFDE] text-[16px] leading-[28px] font-medium">{edudetail.description}</p>
            </div>

            {/* <h3>{edusummary.title}</h3> */}
           </div>
       
    );
}

export default Educard;