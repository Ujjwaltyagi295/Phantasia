import React from 'react';
import HorizontalLogoCarousel from '@/components/caraousel';
import { Container } from '@/components/Container';
import ServicesSection from '@/components/features';
import { HeroSec } from '@/components/hero';
import Navbar from '@/components/navbar';
import Testimonials from '@/components/features';
import CourseCarousel from '@/components/courseHome';

export const Home = () => {
  return (
    <div className="bg-white">
     
      <Navbar />

      
      <HeroSec />
      <CourseCarousel/>
      <HorizontalLogoCarousel />
   
    <Testimonials/>
  

    </div>
  );
};
