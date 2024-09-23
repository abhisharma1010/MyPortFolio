import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Loader from './components/Loader';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import {Toaster} from 'react-hot-toast';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate a network request
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a 2-second load time
  }, []);
  return (
    <div>
    {loading ? (
      <Loader/>):
    (
     <div>
      <div>
      <NavBar/>
      </div>
      <div>
        <Main/>
      </div>
      <div className='mt-[3%] h-[.4vh] mx-[50px] rounded-[1rem] bg-[#454545]'></div>
      <div>
        <Education/>
      </div>
      <div className='mt-[3%] h-[.4vh] mx-[50px] rounded-[1rem] bg-[#454545]'></div>
      <div>
        <Skills/>
      </div>
      
      <div>
        <Projects/>
      </div>
      <div className='mt-[3%] h-[.4vh] mx-[50px] rounded-[1rem] bg-[#454545]'></div>
      <div>
        <Contact/>
      </div>
      <Toaster/>

     </div>
    
    
    )}
    </div>
  );
}

export default App;
