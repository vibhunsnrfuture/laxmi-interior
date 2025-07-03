'use client';

import React from 'react';
import Image from 'next/image';

export default function ServicePage() {
  return (
    <main className="bg-black text-white min-h-screen pt-14 px-4 space-y-24">
      {/* --------------------- Page Header --------------------- */}
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#FFD700] to-white text-transparent bg-clip-text animate-pulse">
          Our Services
        </h1>
        <p className="text-gray-400 text-lg">
          We offer comprehensive interior design solutions tailored to your unique style and needs.
        </p>
      </section>

      {/* --------------------- Services Grid --------------------- */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {[
          {
            icon: '/service/service1.png',
            title: 'Residential Design',
            desc: 'Complete home makeovers from concept to completion, creating spaces that reflect your personality.',
            points: ['Living Room Design', 'Bedroom Styling', 'Kitchen & Dining', 'Bathroom Renovation'],
          },
          {
            icon: '/service/service2.png',
            title: 'Commercial Design',
            desc: 'Professional spaces that enhance productivity and leave lasting impressions on clients.',
            points: ['Office Spaces', 'Retail Stores', 'Restaurants', 'Hotels & Hospitality'],
          },
          {
            icon: '/service/service3.png',
            title: 'Consultation',
            desc: 'Expert advice and guidance to help you make informed design decisions for your space.',
            points: ['Design Planning', 'Color Consultation', 'Space Optimization', 'Budget Planning'],
          },
          {
            icon: '/service/service4.png',
            title: 'Custom Furniture',
            desc: 'Bespoke furniture pieces designed specifically for your space and style preferences.',
            points: ['Custom Cabinets', 'Built-in Storage', 'Unique Seating', 'Statement Pieces'],
          },
          {
            icon: '/service/service5.png',
            title: 'Styling & Staging',
            desc: 'Professional styling services to showcase your property at its absolute best.',
            points: ['Home Staging', 'Property Styling', 'Accessory Selection', 'Final Touches'],
          },
          {
            icon: '/service/service6.png',
            title: '3D Visualization',
            desc: 'See your design come to life before implementation with our advanced 3D rendering services.',
            points: ['3D Floor Plans', 'Realistic Renderings', 'Virtual Walkthroughs', 'Design Previews'],
          },
        ].map((item, index) => (
          <div key={index} className="bg-[#111111] border border-gray-700 rounded-xl p-6 shadow-lg hover:scale-105 transition duration-300">
            <div className="flex items-center gap-4 mb-4">
              <Image src={item.icon} alt={item.title} width={40} height={40} />
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
            <p className="text-sm text-gray-400 mb-3">{item.desc}</p>
            <ul className="text-sm text-gray-500 list-disc ml-5 space-y-1">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* --------------------- Interior Design Process --------------------- */}
      <section className="bg-[#111111] border border-gray-700 rounded-xl px-6 py-12 max-w-7xl mx-auto text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-[#FFD700] to-white bg-clip-text text-transparent animate-pulse">
          Our Interior Design Process
        </h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            {
              title: '1. Consultation',
              desc: 'We begin with a detailed discussion to understand your style, needs, and budget.',
              icon: '/service/consalting.png',
            },
            {
              title: '2. Design & Planning',
              desc: 'Our experts create mood boards, 3D visuals, and layouts to present your vision.',
              icon: '/service/planing.png',
            },
            {
              title: '3. Execution',
              desc: 'From civil to decor, our team executes every detail with precision and premium finish.',
              icon: '/service/execution.png',
            },
            {
              title: '4. Handover & Support',
              desc: 'We hand over your dream space and provide continued aftercare for peace of mind.',
              icon: '/service/support.png',
            },
          ].map((step, index) => (
            <div key={index} className="flex flex-col items-center hover:scale-105 transition">
              <Image src={step.icon} alt={step.title} width={60} height={60} className="mb-4" />
              <h3 className="text-xl font-semibold text-[#FFD700] mb-2">{step.title}</h3>
              <p className="text-sm text-gray-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --------------------- What Makes Us Unique --------------------- */}
      <section className="max-w-7xl mx-auto text-white px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-[#FFD700] to-white bg-clip-text text-transparent animate-pulse">
          What Makes Flourish Designs Unique?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Budget + Luxury',
              desc: 'We deliver premium looks while respecting your budget — with no compromise on quality.',
              icon: '/service/luxury.png',
            },
            {
              title: 'On-Time Delivery',
              desc: 'We stick to timelines with efficient project management and regular updates.',
              icon: '/service/ontime.png',
            },
            {
              title: 'Sustainable Design',
              desc: 'We integrate eco-conscious materials and techniques for a greener home.',
              icon: '/service/sustainable.png',
            },
          ].map((usp, index) => (
            <div key={index} className="bg-[#111111] border border-gray-700 rounded-xl p-6 text-center hover:scale-105 transition">
              <Image src={usp.icon} alt={usp.title} width={50} height={50} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#FFD700] mb-2">{usp.title}</h3>
              <p className="text-sm text-gray-400">{usp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --------------------- Spacer for Footer/CTA --------------------- */}
      <div className="h-2" />
    </main>
  );
}
