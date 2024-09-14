import React, { useEffect, useRef } from "react";
import { FaLinkedinIn,FaFacebookF,FaInstagram } from "react-icons/fa";
import { SiLeetcode,SiCodechef,SiCodingninjas } from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Main(){

  // Reference to the element that we want to animate
  const boxRef = useRef(null);
  useEffect(() => {
    // Animate from off-screen (right) to the default position
    gsap.from(boxRef.current, {
      x: 300,            // Start 300px from the right (off-screen)
      duration: 2.5,       // Duration of 2 seconds
      ease: 'power3.out' // Easing function for a smooth motion
    });
  }, []);

  // Reference to the element that we want to animate
  const boxRef2 = useRef(null);
  useEffect(() => {
    // Animate from off-screen (right) to the default position
    gsap.from(boxRef2.current, {
      x: -300,            // Start 300px from the right (off-screen)
      duration: 2.5,       // Duration of 2 seconds
      ease: 'power3.out' // Easing function for a smooth motion
    });
  }, []);
       

    return(
        <div className="w-full" id="home">
        <div className=" flex flex-col-reverse lg:flex-row text-white  w-10/12 mx-auto justify-between">
            {/* left side content  */}
            <div  ref={boxRef2} className="  gap-[2rem] flex flex-col justify-center  pt-[70px]  ">
                {/* Welcome section  */}
                <div className="flex flex-col gap-[2rem] ">
                   <p className="text-sm font-[500]">WELCOME TO MY WORLD</p>
                   <h2 className="lg:text-[50px] md:text-[50px] text-[32px] font-[620]">Hi, I'm <span className="text-[#FF014F]">Soham Kumar </span>  
                    <br/>a Web Developer.</h2>
                </div>
                {/* Description Section  */}
                <p className="leading-7">Proficient in Web Development and
                C++, with a strong foundation in algorithm design. Eager to contribute to a dynamic team and apply problem-solving skills.
                Ability to work with C++, Java and Web Development.</p>
                {/* Resume section  */}
                <button className="bg-none outline-none bg-[#262626] relative w-fit py-[8px] px-[28px] rounded-full hover:shadow-lg hover:shadow-[#7C838E]">
                    <a className="hover:text-[#C4CFDE] text-[#FF014F] font-[500]" download="Soham-Kumar-Resume.png" href="/Resume.pdf">Resume</a>
                </button>
                
                <div className=" social-icons mt-[3%] flex gap-10 pb-10">
                    {/* Social-icons  */}
                    {/* left subdiv */}
                    <div className="flex flex-col gap-8">
                        <p className="text-[#C4CFDE] font-[500]  ">FIND WITH ME</p>
                        <div className="flex  gap-5">
                            <div className="px-[20px] py-[20px] bg-[#262626] rounded-[.3rem]">
                            <a href="https://www.linkedin.com/in/soham-kumar-557041233/" target="/blank">
                              <FaLinkedinIn className="scale-1 text-[#C4CFDE] hover:text-[#FF014F] scale-150"/>
                            </a>
                            
                            </div>
                            <div className="px-[20px] py-[20px] bg-[#262626] rounded-[.3rem]">
                            <a href="https://www.facebook.com/sohamkumar.kiku/about" target="/blank">
                              <FaFacebookF className=" text-[#C4CFDE] hover:text-[#FF014F] scale-150"/>
                            </a>
                            
                            </div>
                            <div className="px-[20px] py-[20px] bg-[#262626] rounded-[.3rem]">
                                <a href="https://www.instagram.com/sohamkumarkiku/" target="/blank">
                                 <FaInstagram className=" text-[#C4CFDE] hover:text-[#FF014F] scale-150"/>
                                </a>
                           
                            </div>
                        </div>
                    </div>
                    {/* Best Skills icons  */}
                     {/* Riight subdiv */}
                     <div className="flex flex-col gap-8">
                        <p className="text-[#C4CFDE] font-[500] ">BEST SKILLS ON</p>
                        <div className="flex gap-5">
                            <div className="px-[20px] py-[20px] bg-[#262626] rounded-[.3rem]">
                                <a href="https://leetcode.com/Soham-Kumar/" target="/blank">
                                <SiLeetcode className=" text-[#C4CFDE] hover:text-[#FF014F] scale-150"/>
                                </a>
                           
                            </div>
                            <div className="px-[20px] py-[20px] bg-[#262626] rounded-[.3rem]">
                                <a href="https://www.codechef.com/users/sohamkumar1108" target="/blank" >
                                <SiCodechef className="text-[#C4CFDE] hover:text-[#FF014F] scale-150"/>
                                </a>
                            
                            </div>
                            <div className="px-[20px] py-[20px] bg-[#262626] rounded-[.3rem]">
                                <a href="https://www.codingninjas.com/studio/profile/SohamKumar123" target="/blank" >
                                <SiCodingninjas className=" text-[#C4CFDE] hover:text-[#FF014F] scale-150"/>
                                </a>
                            
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
         
            {/* Right side content  */}
            <div ref={boxRef} className=" z-0 flex justify-center lg:pl-[60px] items-center pt-[80px] ">
                <div className="img-container pb-[10px] relative  w-[400px] h-[590px] rounded-md">
                    <img alt="Soham Kumar" src="./images/skgupta-removebg-preview.png" className=" absolute h-[100%] w-[100%]  bottom-0 rounded-md  ">
                    </img>
                </div>
                
            </div>
        </div>
        </div>

    );
}
export default Main;