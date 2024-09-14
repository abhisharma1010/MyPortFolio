import React from "react";
import Projectcards from "./Projectcards";
function Projects(){
   return(
    <div className="project-section w-full pb-[60px] " id="projects">
        <div className=' h-[.4vh] mx-[50px] rounded-[1rem] bg-[#454545] mb-[5%]'></div>
        <div className=" text-white  w-10/12 mx-auto ">
        <div className="flex flex-col justify-center items-center gap-[10px]">
            <p className="text-[#FF014F] font-[500]">Project</p>
            <h2 className="text-[1.8rem] md:text-[2.5rem] lg:text-[3rem] text-[#C4CFDE] font-[620] text-center">My Projects..</h2>
        </div>
           
            <Projectcards/>
        </div>
    </div>
   
   )
}

export default Projects;