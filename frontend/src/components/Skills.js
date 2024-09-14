import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Skills(){

    // Reference to the element that we want to animate
  const boxRef = useRef(null);
  useEffect(() => {
    const element = boxRef.current;

    gsap.fromTo(
      element,
      { opacity: 0, x: -200 },  // Start state: hidden and moved left
      {
        opacity: 1, 
        x: 0,         // End state: visible and at its original position
        duration: 1.5,
        scrollTrigger: {
          trigger: element,      // Element to watch for triggering the animation
          start: 'top 80%',      // When the top of the element hits 80% from the top of the viewport
          once: true,            // Ensure the animation runs only once
        },
      }
    );
  }, []);

  // Reference to the element that we want to animate
  const boxRef2 = useRef(null);
  useEffect(() => {
    const elementId = boxRef2.current;

    gsap.fromTo(
      elementId,
      { opacity: 0, x: 200 },  // Start state: hidden and moved right
      {
        opacity: 1, 
        x: 0,         // End state: visible and at its original position
        duration: 1.5,
        scrollTrigger: {
          trigger: elementId,      // Element to watch for triggering the animation
          start: 'top 80%',      // When the top of the element hits 80% from the top of the viewport
          once: true,            // Ensure the animation runs only once
        },
      }
    );
  }, []);
  
       


    return(
        <div className="w-full mt-[5%]" id="skills">
        <div className=" text-white  w-10/12 mx-auto pb-[10%] ">
        <div className="flex flex-col justify-center items-center gap-[10px]">
             <p className="text-[#FF014F] font-[500]">Skills</p>
             <h2 className="text-[1.8rem] md:text-[2.5rem] lg:text-[3rem] text-[#C4CFDE] font-[620] text-center">My Skills..</h2>
        </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[5%] mt-[5%]  ">
                {/* Programming Languages Skills  */}
                <div ref={boxRef2} className="flex flex-col w-[100%] gap-[20px]">
                    <h2 className="text-[1.5rem] text-[#FF014F] font-medium">Programming Languages</h2>
                    {/* skills-bar content  */}
                    <div className="flex flex-col gap-[20px]">
                        {/* c Languages content  */}
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[#878E99] text-[1.3rem] font-[700]">C</p>
                            <div className="h-[.8rem] rounded-[6px] bg-[#131313]">
                                    <div className="skill-per1 h-[.8rem] rounded-[6px] bg-blue w-[80%]"></div>
                            </div>
                        </div>

                        {/* c++ Languages content  */}
                    
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[#878E99] text-[1.3rem] font-[700]">C++</p>
                            <div className="h-[.8rem] rounded-[6px] bg-[#131313]">
                            <div className="skill-per2 h-[.8rem] rounded-[6px] bg-blue  w-[90%]"></div>
                            </div>
                        </div>

                        {/* Java Languages content  */}
                    
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[#878E99] text-[1.3rem] font-[700]">Java</p>
                            <div className="h-[.8rem] rounded-[6px] bg-[#131313]">
                            <div className="skill-per3 h-[.8rem] rounded-[6px] bg-blue w-[75%]"></div>
                            </div>
                        </div>

                        {/* Python Languages content  */}
                    
                        <div className="flex flex-col gap-[10px]">
                        <p className="text-[#878E99] text-[1.3rem] font-[700]">Python</p>
                            <div className="h-[.8rem] rounded-[6px] bg-[#131313]">
                            <div className="skill-per4 h-[.8rem] rounded-[6px] bg-blue w-[78%]">
                            </div>
                            </div>
                        </div>
                            
                       
                </div>
                    
                </div>
                {/* Front End Skills  */}
                <div className=" flex flex-col w-[100%] gap-[20px]">
                <h2 className="text-[1.5rem] text-[#FF014F] font-medium">Front-End Technologies</h2>
                    {/* skills-bar content  */}
                    <div className="flex flex-col gap-[20px]">
                        {/* Html content  */}
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[#878E99] text-[1.3rem] font-[700]">HTML</p>
                            <div className="h-[.8rem] rounded-[6px] bg-[#131313]">
                                    <div className="skill-per6 h-[.8rem] rounded-[6px] bg-blue w-[98%]"></div>
                            </div>
                        </div>

                        {/* CSS  content  */}
                    
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[#878E99] text-[1.3rem] font-[700]">CSS</p>
                            <div className="h-[.8rem] rounded-[6px] bg-[#131313]">
                            <div className="skill-per7 h-[.8rem] rounded-[6px] bg-blue w-[95%]" ></div>
                            </div>
                        </div>

                        {/* Tailwind content  */}
                    
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[#878E99] text-[1.3rem] font-[700]">Tailwind CSS</p>
                            <div className="h-[.8rem] rounded-[6px] bg-[#131313]">
                            <div className="skill-per8 h-[.8rem] rounded-[6px] bg-blue w-[90%]" ></div>
                            </div>
                        </div>

                        {/* Javascript  content  */}
                    
                        <div className="flex flex-col gap-[10px]">
                        <p className="text-[#878E99] text-[1.3rem] font-[700]">Javascript</p>
                            <div className="h-[.8rem] rounded-[6px] bg-[#131313]">
                            <div className="skill-per9 h-[.8rem] rounded-[6px] bg-blue w-[70%]">
                            </div>
                            </div>
                        </div>
                            
                        {/* React  content  */}

                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[#878E99] text-[1.3rem] font-[700]">React Js</p>
                            <div className="h-[.8rem] rounded-[6px] bg-[#131313]">
                            <div className="skill-per10 h-[.8rem] rounded-[6px] bg-blue w-[75%]"></div>
                            </div>
                        </div>
                </div>
                </div>
                {/* Backend Skills  */}
                <div ref={boxRef}className=" flex flex-col w-[100%] gap-[20px]">
                <h2 className="text-[1.5rem] text-[#FF014F] font-medium">Back-End Technologies</h2>
                    {/* skills-bar content  */}
                    <div className="flex flex-col gap-[20px]">
                        {/* mysql content  */}
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[#878E99] text-[1.3rem] font-[700]">MySQL</p>
                            <div className="h-[.8rem] rounded-[6px] bg-[#131313]">
                                    <div className="skill-per11 h-[.8rem] rounded-[6px] bg-blue w-[70%]"></div>
                            </div>
                        </div>

                        {/* Node content  */}
                    
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[#878E99] text-[1.3rem] font-[700]">Node.js</p>
                            <div className="h-[.8rem] rounded-[6px] bg-[#131313]">
                            <div className="skill-per12 h-[.8rem] rounded-[6px] bg-blue w-[75%]"></div>
                            </div>
                        </div>

                        {/* Express content  */}
                    
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[#878E99] text-[1.3rem] font-[700]">Express.js</p>
                            <div className="h-[.8rem] rounded-[6px] bg-[#131313]">
                            <div className="skill-per13 h-[.8rem] rounded-[6px] bg-blue w-[80%]"></div>
                            </div>
                        </div>

                        {/* MongoDB content  */}
                    
                        <div className="flex flex-col gap-[10px]">
                        <p className="text-[#878E99] text-[1.3rem] font-[700]">MongoDB</p>
                            <div className="h-[.8rem] rounded-[6px] bg-[#131313]">
                            <div className="skill-per14 h-[.8rem] rounded-[6px] bg-blue w-[85%]">
                            </div>
                            </div>
                        </div>
                            
                        {/* PHP content  */}

                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[#878E99] text-[1.3rem] font-[700]">PHP</p>
                            <div className="h-[.8rem] rounded-[6px] bg-[#131313]">
                            <div className="skill-per15 h-[.8rem] rounded-[6px] bg-blue w-[45%]"></div>
                            </div>
                        </div>
                </div>
                </div>

            </div>
        </div>
        </div>
    );
}
export default Skills;