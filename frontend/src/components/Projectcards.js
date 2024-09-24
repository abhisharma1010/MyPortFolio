import React,{useRef,useEffect} from "react";
import Projectcard from "./Projectcard";
import projectdata from "../projectdata";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
function Projectcards(){
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
              start: "top 90%", // When to start (when the top of the element hits 80% from the top of the viewport)
              once:true,
              end: "top 10%", // When to end (when the top of the element hits 30% from the top of the viewport)
              scrub: false, // Sync animation with scrolling
            },
          }
        );
      }, []);
   return(
    <div ref={boxRef} className=" mt-[7%] flex flex-row justify-center items-center flex-wrap gap-[30px]   ">
        {
            projectdata.map((data) => (<Projectcard projectdetail={data}/>))
        }
    </div>
   )
}
export default Projectcards;