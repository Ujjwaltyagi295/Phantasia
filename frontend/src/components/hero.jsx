import React, { useState, useEffect } from 'react';
import { FaJs, FaHtml5 } from "react-icons/fa";
import { DiPython } from "react-icons/di";
import { motion } from "motion/react"
export const HeroTitle = ({children}) => {
  return (
    <h1 className='text-6xl my-6 md:text-8xl'>{children}</h1>
  )
}

export const HeroSubtitle = ({children}) => {
  return (
    <h2 className='mb-12 md:text-xl text-lg'>{children}</h2>
  )
}

export const Hero = ({children}) => {
  return (
    <div className='text-center'>{children}</div>
  )
}

export const HeroOrbit = () => {
  return (
    <section className='h-screen relative flex flex-col items-center justify-center overflow-hidden bg-[#f4f5f7]'>
      {/* Container that helps center everything */}
      <div className='relative w-full h-full flex items-center justify-center'>
        
        {/* Inner orbit circle (static) */}
        <div className='absolute h-[544px] w-[544px] border-2 border-gray-300 rounded-full opacity-80 border-dashed'>
          {/* Icons rotating around inner orbit */}
          <motion.div 
            className='absolute w-full h-full'
            animate={{ rotate: "-360deg" }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            <div className='absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2'>
              <FaJs className='text-yellow-400 bg-black text-3xl' />
            </div>
            <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'>
              <FaHtml5 className='text-orange-600 text-4xl' /> 
            </div>
            <div className='absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2'>
              <DiPython className='text-blue-500 text-4xl'/> 
            </div>
          </motion.div>
        </div>
        
        {/* Middle orbit circle (static) */}
        <div className='absolute h-[744px] w-[744px] border-2 border-gray-300 rounded-full opacity-80 border-dashed'>
          {/* Dots rotating around middle orbit */}
          <motion.div
            className='absolute w-full h-full'
            animate={{ rotate: "360deg" }}
            transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
          >
            <div className='absolute  top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 shadow-glow'></div>
            <div className='absolute  top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-glow'></div>
            <div className='absolute h-4 w-4 rounded-full bg-blue-500 top-1/2 right-0 translate-x-1/2 -translate-y-1/2 shadow-glow'></div>
            <div className='absolute  bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 shadow-glow'></div>
          </motion.div>
        </div>
        
        {/* Outer orbit circle (static) */}
        <div className='absolute h-[944px] w-[944px] border-2 border-gray-300 rounded-full opacity-80 border-dashed'>
          {/* Dots rotating around outer orbit */}
          <motion.div
            className='absolute w-full h-full' 
            animate={{ rotate: "-360deg" }}
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          >
            <div className='absolute  top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 shadow-glow'></div>
            <div className='absolute  top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-glow'></div>
            <div className='absolute  top-1/2 right-0 translate-x-1/2 -translate-y-1/2 shadow-glow'></div>
            <div className='absolute  bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 shadow-glow'></div>
          </motion.div>
        </div>
      </div>
      
      {/* Text content with centered positioning */}
      <div className='z-10 container px-4 text-center max-w-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='bg-white py-2 px-4 rounded-full border border-gray-200 text-gray-700 inline-flex items-center mb-6 text-sm'>
          
        </div>
        
        <h1 className='text-5xl md:text-7xl font-bold tracking-tight text-gray-800 mb-6'>
          Empowering Education,<br />transforming learning.
        </h1>
        
        <p className='text-lg text-gray-600 mb-8 max-w-2xl mx-auto'>
          Equip students and educators with innovative tools, personalized learning paths, and seamless collaboration.
        </p>
        
       
        
      
      </div>
      
      <style>{`
        .shadow-glow {
          box-shadow: 0 0 10px 2px rgba(59, 130, 246, 0.4);
        }
      `}</style>
    </section>
  )
}
export const HeroSec = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  
  const texts = ["Beginners", "Innovators", "Dreamers"];
  const colors = ['bg-purple-300', 'bg-blue-300', 'bg-green-300'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex(prevIndex => (prevIndex + 1) % texts.length);
      setCurrentColorIndex(prevIndex => (prevIndex + 1) % colors.length);
    }, 2000); // Change text every 2 seconds
    
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Pill buttons at the top */}
        <div className="flex justify-center gap-4 mb-12">
          <div className="bg-orange-200 text-black px-6 py-2 rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-medium text-base">
            Learn
          </div>
          <div className="bg-green-300 text-black px-6 py-2 rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-medium text-base">
            Grow
          </div>
          <div className="bg-purple-200 text-black px-6 py-2 rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-medium text-base">
            Excel
          </div>
        </div>

        {/* Updated heading for EdTech */}
        <h1 className="text-6xl md:text-[7rem] flex gap-4 flex-col font-bold mb-10 text-black font-sans">
        Courses & Bootcamps For{" "}
        <motion.span
      className="inline-block"
      initial={{ rotate: -5,y:6 ,opacity:40 }}
      animate={{ y:0 ,opacity:100 }}
      transition={{ duration: 0.3 }}
      
      
      key={currentTextIndex} // Add key to force re-animation
    >
      <span className={`${colors[currentColorIndex]} text-[6rem] px-4 py-1 rounded-lg text-black`}>
        {texts[currentTextIndex]}
      </span>
    </motion.span>
</h1>

<p className="text-sm md:text-2xl text-black font-sans max-w-6xl mx-auto mb-16">
  Discover a world of possibilities with our online learning platform. 
  From coding to creativity, we help you grow through hands-on, practical education.
</p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-4xl mx-auto">
          <a 
            href="#join" 
            className="bg-blue-600 text-white text-xl font-semibold py-4 px-12 rounded-md hover:bg-blue-700 transition-colors"
          >
            Start Learning
          </a>
          <a 
            href="#courses" 
            className="bg-white text-gray-800 text-xl font-semibold py-4 px-14 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            Browse Courses
          </a>
        </div>
      </div>
    </div>
  )
}

