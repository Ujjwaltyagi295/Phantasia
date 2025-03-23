import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
    {
      name: "Aarti Sharma",
      text: `The Data Structures and Algorithms course was truly insightful. Every topic was explained with clarity, making complex concepts easy to understand. It was a perfect blend of theory and practical examples, which helped me gain confidence in problem-solving. #EdTech #DSA`,
      color: "bg-[#9b4de4]", // Purple
      avatar: "https://i.pravatar.cc/40?img=1",
    },
    {
      name: "Rohit Kumar",
      text: `The Machine Learning course was a game-changer. From the basics of data preprocessing to implementing advanced models, everything was covered step by step. I feel more confident now in applying machine learning algorithms to real-world problems. #EdTech #MachineLearning #AI`,
      color: "bg-[#3b82f6]", // Blue
      avatar: "https://i.pravatar.cc/40?img=2",
    },
    {
      name: "Priya Gupta",
      text: `The Web Development bootcamp was hands-on and practical. I gained experience building full-stack applications and learned how to work with various technologies like React, Node.js, and MongoDB. The course has equipped me with the skills to build my own projects. #EdTech #WebDevelopment #FullStack`,
      color: "bg-[#FF8142]", // Orange
      avatar: "https://i.pravatar.cc/40?img=3",
    },
    {
      name: "Aditya Patel",
      text: `The Cybersecurity course exceeded my expectations. The instructor broke down complex security concepts into digestible modules. The practical labs gave me hands-on experience with industry tools. I'm now confident in my ability to identify and address security vulnerabilities. #EdTech #Cybersecurity`,
      color: "bg-[#9b4de4]", // Purple
      avatar: "https://i.pravatar.cc/40?img=4",
    },
    {
      name: "Maya Desai",
      text: `The UX/UI Design course transformed my approach to digital design. I learned to create user-centered interfaces backed by proper research and testing methodologies. The feedback from industry professionals was invaluable in refining my design skills. #EdTech #UXDesign #UIDesign`,
      color: "bg-[#3b82f6]", // Blue
      avatar: "https://i.pravatar.cc/40?img=5",
    },
    {
      name: "Vikram Singh",
      text: `The Cloud Computing certification program was comprehensive and up-to-date with industry standards. From AWS to Azure, the course covered all major platforms and taught me to deploy scalable solutions. The hands-on projects made learning practical and engaging. #EdTech #CloudComputing`,
      color: "bg-[#FF8142]", // Orange
      avatar: "https://i.pravatar.cc/40?img=6",
    },
    {
      name: "Neha Verma",
      text: `The Data Science program helped me transition into analytics from a non-technical background. The curriculum was well-structured, starting with basics and gradually introducing advanced concepts. The capstone project allowed me to apply my skills to real data challenges. #EdTech #DataScience`,
      color: "bg-[#9b4de4]", // Purple
      avatar: "https://i.pravatar.cc/40?img=7",
    },
    {
      name: "Rahul Mehta",
      text: `The DevOps course gave me a thorough understanding of CI/CD pipelines and infrastructure automation. I now feel equipped to streamline development workflows and implement proper monitoring solutions. The instructors were experienced professionals with practical insights. #EdTech #DevOps`,
      color: "bg-[#3b82f6]", // Blue
      avatar: "https://i.pravatar.cc/40?img=8",
    },
    {
      name: "Sanya Khan",
      text: `The Blockchain Development course was cutting-edge and comprehensive. I learned to create smart contracts and develop decentralized applications. The instructors were knowledgeable about the latest industry trends and helped me build a strong portfolio. #EdTech #Blockchain`,
      color: "bg-[#FF8142]", // Orange
      avatar: "https://i.pravatar.cc/40?img=9",
    },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
  exit: {
    opacity: 0,
    x: -100,
    transition: {
      duration: 0.4,
    },
  },
};

const TestimonialCard = ({ name, text, color, avatar, index }) => (
  <motion.div
    custom={index}
    variants={cardVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    className={`rounded-[2rem] ${color} text-black p-[2.5rem] min-w-[22rem] sm:min-w-[26rem] md:min-w-[30rem] lg:max-w-[40rem] h-[35rem] flex flex-col justify-between shadow-lg`}
  >
    <div>
      <Quote className="w-[2.5rem] h-[2.5rem] mb-[1rem] text-black opacity-60" />
      <p className="text-2xl font-medium">{text}</p>
    </div>
    <div className="flex items-center justify-between mt-[1.5rem]">
      <div className="flex items-center gap-[0.7rem]">
        <img src={avatar} alt={name} className="w-[3rem] h-[3rem] rounded-full" />
        <span className="font-semibold text-[1.1rem]">{name}</span>
      </div>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-[2rem] h-[2rem] text-white opacity-50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 7L7 17"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 7L17 17"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </motion.div>
);

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  
  // Auto-cycle through testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    }, 5000); // Change every 5 seconds
    
    return () => clearInterval(interval);
  }, [totalPages]);

  const nextPage = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  // Get current testimonials to display
  const getCurrentTestimonials = () => {
    const start = currentPage * testimonialsPerPage;
    return testimonials.slice(start, start + testimonialsPerPage);
  };

  return (
    <section className="w-full bg-[#f5f6fa] py-[5rem] px-[3rem] overflow-hidden">
      <h2 className="text-[3rem] font-bold text-center mb-[4rem] text-black">
        Testimonials
      </h2>

      <AnimatePresence mode="wait">
        <div 
          key={currentPage} 
          className="flex justify-center flex-row gap-[3rem] w-full"
        >
          {getCurrentTestimonials().map((testimonial, index) => (
            <TestimonialCard
              key={`${currentPage}-${index}`}
              {...testimonial}
              index={index}
            />
          ))}
        </div>
      </AnimatePresence>

      {/* Optional arrows for navigation */}
      <div className="flex justify-center gap-[2rem] mt-[4rem]">
      
        
        {/* Page indicators */}
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full ${
                currentPage === index ? "bg-[#3b82f6]" : "bg-gray-300"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
        
        
      </div>
    </section>
  );
};

export default Testimonials;