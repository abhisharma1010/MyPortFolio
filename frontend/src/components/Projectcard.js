import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
function Projectcard(props){
    let projectdetail=props.projectdetail;


    const boxRef = useRef(null); // Create a ref for the element

    useEffect(() => {
        gsap.fromTo(
          boxRef.current,
          { opacity: 0, y: 100 }, // Start state: fully transparent and moved down 100px
          {
            opacity: 1, // End state: fully visible
            y:0, // End state: moved to original position
            duration:.9,
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

    return(
        <div ref={boxRef} className="projectcard w-[520px] bg-[#1a1a1a]  px-6 py-6 flex flex-col gap-[20px] rounded-xl ">
            <div className="  overflow-hidden rounded-[.6rem]">
                <img src={projectdetail.image} className="p-img h-[100%] w-[100%] transition-transform duration-[1s] "/>
            </div>
            <p className="p-title text-[#C4CFDE] text-[16px] leading-[28px] font-[700]">{projectdetail.title}</p>
            <div className="flex justify-center items-center  w-fit mx-auto bg-white rounded">
                <button className=" py-[3px] px-[25px] text-[18px] font-medium text-black hover:bg-[#FF014F] rounded"> <a href={projectdetail.url} target="/blank">Visit...</a> </button>
            </div>
        </div>
    )

}
export default Projectcard;