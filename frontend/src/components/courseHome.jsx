import { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Star, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CourseCarousel() {
  const [activeTab, setActiveTab] = useState('IT Certifications');
  const [activeTopic, setActiveTopic] = useState('ChatGPT');
  const [visibleCourses, setVisibleCourses] = useState([0, 1, 2, 3]);
  const [displayedCourses, setDisplayedCourses] = useState([]);

  const categories = [
    'Data Science', 
    'IT Certifications', 
    'Leadership', 
    'Web Development', 
    'Communication', 
    'Business Analytics & Intelligence'
  ];
  
  const popularTopics = [
    { name: 'ChatGPT', learners: '4M+' },
    { name: 'Data Science', learners: '7M+' },
    { name: 'Python', learners: '477M+' },
    { name: 'Machine Learning', learners: '8M+' },
    { name: 'Deep Learning', learners: '2M+' },
    { name: 'Artificial Intelligence (AI)', learners: '4M+' },
    { name: 'Statistics', learners: '1M+' },
    { name: 'Natural Language Processing', learners: '806k+' }
  ];
  
  // Base courses (initial courses)
  const baseCourses = [
    {
      id: 1,
      title: 'The Complete AI Guide: Learn ChatGPT, Generative AI & More',
      instructors: 'Julian Melanson, Benza Maman, Leap Digital',
      rating: 4.5,
      reviews: 45494,
      price: '₹2,699',
      premium: true,
      bestseller: true,
      category: 'IT Certifications',
      imageUrl: 'https://i.imgur.com/nlTI23M.png' // Image for first card
    },
    {
      id: 2,
      title: 'The Complete AI-Powered Copywriting Course & ChatGPT Guide',
      instructors: 'Ing. Tomas Moravek, Learn Digital Academy',
      rating: 4.3,
      reviews: 1801,
      price: '₹3,099',
      premium: true,
      bestseller: false,
      category: 'IT Certifications',
      imageUrl: 'https://i.imgur.com/BO7jmoG.jpeg' // Image for second card
    },
    {
      id: 3,
      title: 'ChatGPT, DeepSeek, Grok and 30+ More AI Marketing Assistants',
      instructors: 'Anton Voroniuk, Anton Voroniuk Support',
      rating: 4.4,
      reviews: 526,
      price: '₹799',
      premium: true,
      bestseller: false,
      category: 'IT Certifications',
      imageUrl: 'https://i.imgur.com/pOHV3NB.jpeg' // Image for third card
    },
    {
      id: 4,
      title: 'The Complete ChatGPT Guide From Zero to Hero - 2025',
      instructors: 'A.M.A.M Mubeen (Expert In Tally & GST)',
      rating: 4.1,
      reviews: 478, 
      price: '₹799',
      premium: false,
      bestseller: false,
      category: 'IT Certifications',
      imageUrl: 'https://i.imgur.com/DUzsJiw.jpeg' // Image for fourth card
    }
  ];
  
  // Initialize with base courses
  useEffect(() => {
    setDisplayedCourses(baseCourses);
  }, []);

  const handleTopicClick = (topicName) => {
    setActiveTopic(topicName);
  };

  const handleTabClick = (category) => {
    setActiveTab(category);
    
    // Set courses based on the selected category
    if (category === 'IT Certifications') {
      setDisplayedCourses(baseCourses);
    } else if (additionalCoursesByCategory[category]) {
      // Add category-specific courses plus appropriate base courses
      const relevantBaseCourses = baseCourses.filter(course => 
        course.title.toLowerCase().includes(category.toLowerCase()) || 
        course.title.toLowerCase().includes('ai') || 
        course.title.toLowerCase().includes('chatgpt')
      );
      
      setDisplayedCourses([ 
        ...additionalCoursesByCategory[category],
        ...relevantBaseCourses.slice(0, 2) // Add 1-2 relevant base courses
      ]);
    }
  };

  const scrollTopics = (direction) => {
    const container = document.getElementById('topics-container');
    if (container) {
      container.scrollBy({ left: direction === 'right' ? 300 : -300, behavior: 'smooth' });
    }
  };

  const scrollCourses = (direction) => {
    const container = document.getElementById('courses-container');
    if (container) {
      container.scrollBy({ left: direction === 'right' ? 400 : -400, behavior: 'smooth' });
    }
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const stars = [];
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} size={24} fill="#FFCE00" color="#FFCE00" />);
      } else if (i === fullStars && halfStar) {
        stars.push(<Star key={i} size={24} fill="#FFCE00" color="#FFCE00" className="opacity-50" />);
      } else {
        stars.push(<Star key={i} size={24} color="#FFCE00" className="opacity-30" />);
      }
    }
    
    return stars;
  };

  return (
    <div className="max-w-full py-8 bg-gray-50">
      {/* Category Navigation */}
      <div className="border-b border-gray-200 mx-8 mb-8">
        <ul className="flex space-x-12 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <li 
              key={category} 
              className="relative cursor-pointer whitespace-nowrap pb-6"
              onClick={() => handleTabClick(category)}
            >
              <span className={`${activeTab === category ? 'text-black font-bold text-2xl' : 'text-gray-600 text-xl'}`}>
                {category}
              </span>
              {activeTab === category && (
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-1.5 bg-black"
                  layoutId="activeTab"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Course Cards with Animation */}
      <div className="relative mx-8 mt-12">
        <motion.button 
          className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg z-10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollCourses('left')}
        >
          <ChevronLeft size={24} />
        </motion.button>
        
        <div id="courses-container" className="grid grid-cols-3 gap-8 overflow-x-auto scrollbar-hide">
          <AnimatePresence>
            {displayedCourses.map((course) => (
              <motion.div 
                key={course.id}
                className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <img src={course.imageUrl} alt={course.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 leading-tight">{course.title}</h3>
                  <p className="text-base text-gray-500 mb-4">{course.instructors}</p>
                  <div className="flex items-center mb-3">
                    <span className="font-bold text-xl mr-2">{course.rating}</span>
                    <div className="flex">
                      {renderStars(course.rating)}
                    </div>
                    <span className="text-base text-gray-500 ml-2">({course.reviews.toLocaleString()})</span>
                  </div>
                  <div className="font-bold text-2xl mt-6">{course.price}</div>
                  <div className="flex mt-4 space-x-4">
                    {course.premium && (
                      <motion.span 
                        className="bg-purple-100 text-purple-800 text-base px-4 py-2 rounded-md flex items-center"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Award size={20} className="mr-2" />
                        Premium
                      </motion.span>
                    )}
                    {course.bestseller && (
                      <motion.span 
                        className="bg-yellow-100 text-yellow-800 text-base px-4 py-2 rounded-md"
                        whileHover={{ scale: 1.05 }}
                      >
                        Bestseller
                      </motion.span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <motion.button 
          className="absolute -right-8 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg z-10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollCourses('right')}
        >
          <ChevronRight size={24} />
        </motion.button>
      </div>
    </div>
  );
}
