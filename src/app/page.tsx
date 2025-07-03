'use client';

import React from 'react';
import HeroSection from './Component/home/HeroSection';
import ServicesSection from './Component/home/ServicesSection';
import ProcessStep from './Component/home/ProcessStep';
import InspirationSlider from './Component/home/InspirationSlider';
import Testimonials from './Component/home/Testimonials';
import HomeEstimateSection from './Component/home/HomeEstimateSection';
import WhyChooseUs from './Component/home/WhyChooseUs';




export default function HomePage() {
  return (
    <main className="bg-[#e9edc9] text-[#0a1d37] font-sans">
    <HeroSection/>
    <HomeEstimateSection/>
    <ServicesSection/>
    <ProcessStep/>
    <InspirationSlider/>
    <Testimonials/>
    <WhyChooseUs/>
      
    </main>
  );
}
