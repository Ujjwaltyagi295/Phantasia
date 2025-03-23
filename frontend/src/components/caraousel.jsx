import React from 'react';
import { motion } from 'framer-motion';

const HorizontalLogoCarousel = () => {
  // Placeholder for company logos
  const companies = [
    { name: 'Volkswagen', id: 1 },
    { name: 'Samsung', id: 2 },
    { name: 'Cisco', id: 3 },
    { name: 'Vimeo', id: 4 },
    { name: 'P&G', id: 5 },
    { name: 'HPEnterprise', id: 6 },
    { name: 'Citi', id: 7 },
    { name: 'Ericsson', id: 8 },
    // Duplicate the first few logos to create a seamless loop
    { name: 'Volkswagen', id: 9 },
    { name: 'Samsung', id: 10 },
    { name: 'Cisco', id: 11 },
    { name: 'Vimeo', id: 12 }
  ];

  return (
    <div className="flex flex-col items-center w-full overflow-hidden py-8">
      <h2 className="text-2xl text-gray-600 font-medium mb-8">
        Trusted by over 16,000 companies and millions of learners around the world
      </h2>
      
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }
          }}
        >
          {companies.map((company) => (
            <div key={company.id} className="flex-none mx-24 w-32 h-16 flex items-center justify-center">
              <div className="w-full h-full flex items-center    justify-center">
                <span className="text-gray-600 text-2xl font-sans  font-bold">{company.name}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HorizontalLogoCarousel;