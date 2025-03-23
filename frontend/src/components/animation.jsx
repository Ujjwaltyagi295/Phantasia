import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useMotionTemplate, animate } from "framer-motion";

export const ButtonAnim = () => {
  const xPer = useMotionValue(0);
  const yPer = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);
  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPer}% ${yPer}%, black, transparent)`;

  useEffect(() => {
    // Only run the automatic animation when not hovering
    if (!isHovering) {
      // Animation options
      const options = {
        duration: 8,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      };
      
      // Start the animations
      const xAnimation = animate(xPer, [0, 100, 100, 0, 0], options);
      const yAnimation = animate(yPer, [0, 0, 100, 100, 0], options);
      
      // Clean up animations when component unmounts
      return () => {
        xAnimation.stop();
        yAnimation.stop();
      };
    }
  }, [xPer, yPer, isHovering]);

  // Handle mouse events
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  
  const handleMouseMove = (e) => {
    if (!isHovering) return;
    
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    
    const x = ((clientX - left) / width) * 100;
    const y = ((clientY - top) / height) * 100;
    
    // Use animate for smoother transitions on hover
    animate(xPer, x, { duration: 0.3, ease: "easeOut" });
    animate(yPer, y, { duration: 0.3, ease: "easeOut" });
  };

  return (
    <div 
      className='relative border border-white/15 flex p-10 rounded-xl gap-2 lg:flex-1 items-center button-container'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        style={{ maskImage }}
        className='absolute -m-px inset-0 border rounded-xl border-[#A369FF]'
      />
      <div className='h-12 w-48 text-lg bg-white/15 border rounded-lg inline-flex items-center justify-center'>
        Hover me
      </div>
    </div>
  );
};