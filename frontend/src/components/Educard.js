import React, { useEffect, useRef }  from "react";  
import edudata from "../edudata";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);


function Educard(props){
    let edudetail=props.edudetail;
    const boxRef = useRef(null); // Create a ref for the element

    useEffect(() => {
        gsap.fromTo(
          boxRef.current,
          { opacity: 0, y: 100 }, // Start state: fully transparent and moved down 100px
          {
            opacity: 1, // End state: fully visible
            y: 0, // End state: moved to original position
            duration: 0.9,
            scrollTrigger: {
              trigger: boxRef.current, // What element should trigger the animation
              start: "top 80%", // When to start (when the top of the element hits 80% from the top of the viewport)
              once:true,
              end: "top 30%", // When to end (when the top of the element hits 30% from the top of the viewport)
              scrub: false, // Sync animation with scrolling
            },
          }
        );
      }, []);
    
    return (
      
        <div ref={boxRef} className="educard bg-[#1a1a1a] rounded-[.8rem] w-[520px] py-[20px] px-[25px] flex flex-col gap-[20px]  border border-[#1a1a1a] ">
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