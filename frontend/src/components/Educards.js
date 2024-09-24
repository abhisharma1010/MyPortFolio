import React, { useEffect, useRef } from "react";
import Educard from "./Educard";
import edudata from "../edudata";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
function Educards(){
    const boxRef = useRef(null); // Create a ref for the element
    useEffect(() => {
        gsap.fromTo(
          boxRef.current,
          { opacity: 0, y: 100 }, // Start state: fully transparent and moved down 100px
          {
            opacity: 1, // End state: fully visible
            y: 0, // End state: moved to original position
            duration: 1,
            scrollTrigger: {
              trigger: boxRef.current, // What element should trigger the animation
              start: "top 90%", // When to start (when the top of the element hits 80% from the top of the viewport)
              once:true,
              end: "top 10%", // When to end (when the top of the element hits 30% from the top of the viewport)
              scrub: false, // Sync animation with scrolling
            },
          }
        );
      }, []);
    return (
        <div ref={boxRef} className="mt-[7%] flex justify-center items-center flex-wrap gap-[50px] ">
           {
            edudata.map((data) => (<Educard edudetail={data}/>))
           }
        </div>
    );
}
export default Educards;