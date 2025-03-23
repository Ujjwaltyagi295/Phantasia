import React, { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScroll, setIsScroll] = useState(false);
  const prevYref = useRef(0);
  
  useMotionValueEvent(scrollY, "change", (y) => {
    const diff = y - prevYref.current;
   
    if (Math.abs(diff) > 50) {
      setIsScroll(diff > 0);
      prevYref.current = y;
    }
    
    // Set isScroll to true when scrolling down (for bg color change)
    if (y > 10) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  });
  
  const menuItems = [
    {
      title: "Home",
      link:"/"
    },
    {
      title: "Courses",
      link:"/Courses"
    },
    
  ];
  
  return (
    <header className='fixed z-[999] py-6 flex justify-center w-full lg:h-auto'>
      <motion.nav 
        animate={{
         
          backgroundColor: isScroll ? "rgba(255, 255, 255, 0.95)" : "transparent",
          boxShadow: isScroll ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "none"
        }}
        transition={{
          duration: 0.2,
          ease: "easeInOut"
        }}
        className="z-20 border border-white/10 backdrop-blur drop-shadow-sm relative w-11/12  rounded-lg px-6 h-16"
      >
        <div className='flex justify-between p-3 text-black items-center'>
          <a href='/' className='text-[3rem] font-sans font-bold text-blue-700'>LearnHub</a>
          
          <ul className='flex-row flex space-x-5 text-[3rem] justify-center'>
            {menuItems.map((menu, index) => (
           
              <a href={`${menu.link}`}
                    
                    key={index}
                    className='cursor-pointer hidden lg:block hover:bg-gray-200 p-2 px-2 rounded-full'
                  >
                    {menu.title}
                  </a>
              
            ))}
            <Link to="/dashboard" className='cursor-pointer hidden lg:block hover:bg-gray-200 p-2 px-2 rounded-full'>
                Dasboard
            </Link>
          </ul>
          
          <div className="relative">
            <a
              href="/login"
              className="bg-blue-600 border border-white/20 text-white px-5 py-2 rounded-full text-lg font-medium hover:bg-gray-900 transition"
            >
              Get started for free →
            </a>
          </div>
        </div>
      </motion.nav>
    </header>
  );
}

export default Navbar;