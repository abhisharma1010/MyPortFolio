import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLinkedinIn,FaFacebookF,FaInstagram } from "react-icons/fa";
import Contactform from "./Contactform";
gsap.registerPlugin(ScrollTrigger);
function Contact(){
  const boxRef = useRef(null);
  const boxRef2 = useRef(null);

  useEffect(() => {
    const element = boxRef.current;
    
    gsap.fromTo(
      element,
      { opacity: 0, y: -100 },  // Start state: hidden and moved up
      {
        opacity: 1, 
        y: 0,         // End state: visible and at its original position
        duration: 1.5,
        scrollTrigger: {
          trigger: element,      // Element to watch for triggering the animation
          start: 'top 80%',      // When the top of the element hits 80% from the top of the viewport
          once: true,            // This ensures it runs only once
        },
      }
    );
  }, []);

  useEffect(() => {
    const elementId = boxRef2.current;
    
    gsap.fromTo(
      elementId,
      { opacity: 0, y: 100 },  // Start state: hidden and moved down
      {
        opacity: 1, 
        y: 0,         // End state: visible and at its original position
        duration: 1.5,
        scrollTrigger: {
          trigger: elementId,      // Element to watch for triggering the animation
          start: 'top 80%',      // When the top of the element hits 80% from the top of the viewport
          once: true,            // This ensures it runs only once
        },
      }
    );
  }, []);
    return(
      <div className="w-full   pb-[60px] mt-[5%]" id="contact">
      <div className=" text-white  w-10/12 mx-auto ">
        <div className="flex flex-col justify-center items-center gap-[10px]">
          <p className="text-[#FF014F] font-[500]">CONTACT</p>
          <h2 className="text-[1.8rem] md:text-[2.5rem] lg:text-[3rem] text-[#C4CFDE] font-[600] text-center">Contact With Me..</h2>
        </div>
            
            {/* Top level container  */}
            <div className="flex flex-col lg:flex-row  pb-[30px] mt-[5%] gap-[50px]">
                {/* left side contact details  */}
                <div ref={boxRef}  className=" flex flex-col lg:w-[35vw] py-[30px] px-[30px] bg-[#131313] rounded-xl  ">
                    <div className=" rounded-lg overflow-hidden ">
                        <img src="images/contact1.png" className="w-[100%] h-[100%] transition-transform duration-[.7s] hover:scale-[1.2]" />
                    </div>
                    <div className="mt-[10%] flex flex-col gap-[10px]">
                    <h2 className="text-[29px] text-[#E4E6EA] font-bold">Soham Kumar</h2>
                    <p className="text-[#878E99] text-[16px] md:text-[19px] lg:text-[19px] ">Web Developer</p> 
                    <p className="text-[#878E99] text-[16px] md:text-[19px] lg:text-[19px] leading-[30px]">I am available for freelance work.Connect with me via and call in to my account.</p>
                    <p className="text-[#878E99] text-[16px] md:text-[19px] lg:text-[19px]">Phone: <span className="text-[#C4CFDE]">+91 9667143990</span></p>
                    <p className="text-[#878E99] text-[16px] md:text-[19px] lg:text-[19px] ">Email: <span className="text-[#C4CFDE]">sohamkumar9667@gmail.com</span></p>
                    <div className="flex flex-col gap-[30px] pb-[30px]">
                        <p className="text-[#878E99] text-[19px]">FIND WITH ME</p>
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
                    </div>
                    
                </div>
                {/* Right side contact details  */}
                <div ref={boxRef2} className=" lg:w-[45vw] bg-[#131313] rounded-xl">
                {/* Yha par contact form ka component add krna hai  */}
                <Contactform />
              </div>
              </div>
               
            </div>
        

      </div>
        
    )
}

export default Contact;