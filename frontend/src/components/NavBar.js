import React, { useState, useEffect,useRef } from "react";
import { LuMenu } from "react-icons/lu";
import { HiOutlineXMark } from "react-icons/hi2";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
function NavBar(){
  
  // State to control navbar background change on scroll
  const [isScrolled, setIsScrolled] = useState(false);
  
   // Effect to detect scroll position and update state
   useEffect(() => {
    const handleScroll = () => {
      // Add or remove the class based on the scroll position
      const offset = window.scrollY;
      if (offset > 50) { // Change 100 to any offset you want
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const boxRef2 = useRef(null);
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

  const [isMenuOpen,setIsMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

    return(
        <div className="">
            <nav ref={boxRef2} className={`flex justify-between  items-center pt-[10px] pb-[10px] ${
        isScrolled ? 'bg-[#262626] fixed w-full z-20' : 'bg-[#191B1E]'
      }`} >
                <div className="w-[40%] lg:w-[20%] pl-[30px]">
                  <img src="./images/skg.jpg" alt="Soham Kumar" className="w-[65px] h-[60px] rounded-full "/>
                </div>
                <div className="w-[70%]">
                    <ul className="md:flex lg:flex text-white gap-[4rem] text-[1.1rem] justify-end pr-[60px] hidden ">
                        <a href="#home">
                            <li className="hover:text-[#FF014F] ">Home</li>
                        </a>
                        <a href="#education">
                          <li className="hover:text-[#FF014F] ">Education</li>
                        </a>
                        <a href="#skills">
                         <li className="hover:text-[#FF014F] ">Skills</li>
                        </a>
                        <a href="#projects">
                          <li className="hover:text-[#FF014F] ">Projects</li>
                        </a>
                        <a href="#contact">
                          <li className="hover:text-[#FF014F] ">Contact</li>
                        </a>
                    </ul>
                </div>
                
              

                 {/* Hamburger Menu Icon / Close Icon */}
                <button onClick={toggleMenu} className="text-white focus:outline-none md:hidden">
                  {menuOpen ? (
                    <HiOutlineXMark className=" text-[#FF014F] mr-[30px] md:hidden lg:hidden scale-150 font-medium text-3xl" onClick={()=>setIsMenuOpen(!isMenuOpen)}/>
                  ) : (  <LuMenu className=" text-[#FF014F] mr-[30px] md:hidden lg:hidden scale-150 font-medium text-3xl" onClick={()=>setIsMenuOpen(!isMenuOpen)} />
                    
                  )}
                </button>
                  <ul className={`absolute  z-1000 lg:hidden top-20 left-0 pt-6 pb-6 w-full bg-[#1a1a1a] flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100":"opacity-0"}`} style={{transition:"transform 0.3s ease, opacity 0.3s ease"}} >
                      
                        <a href="#home">
                            <li className="hover:text-[#FF014F] text-[#C4CFDE]">Home</li>
                        </a>
                        <a href="#education">
                          <li className="hover:text-[#FF014F] text-[#C4CFDE]">Education</li>
                        </a>
                        <a href="#skills">
                         <li className="hover:text-[#FF014F] text-[#C4CFDE]">Skills</li>
                        </a>
                        <a href="#projects">
                          <li className="hover:text-[#FF014F] text-[#C4CFDE]">Projects</li>
                        </a>
                        <a href="#contact">
                          <li className="hover:text-[#FF014F] text-[#C4CFDE]">Contact</li>
                        </a>
                     
                  </ul>
            </nav>
        </div>
    );
}
export default NavBar;