'use client';

import React from 'react';
import Image from 'next/image';

export default function ServicePage() {
  return (
    <main className="bg-black text-white min-h-screen pt-14 px-4 space-y-24">
      {/* --------------------- Page Header --------------------- */}
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#FFD700] to-white text-transparent bg-clip-text animate-pulse">
          Our Services – Laxmi Interior
        </h1>
        <p className="text-gray-400 text-lg">
          Laxmi Interior offers comprehensive interior design solutions tailored to your lifestyle, space, and budget.
        </p>
      </section>

      {/* --------------------- Services Grid --------------------- */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {[
          {
            icon: '/service/service1.png',
            title: 'Residential Interior Design',
            desc:
              'Complete home interiors from concept to completion, creating spaces that feel premium, warm, and uniquely yours.',
            points: ['Living Room Design', 'Bedroom Styling', 'Kitchen & Dining', 'Bathroom Renovation'],
          },
          {
            icon: '/service/service2.png',
            title: 'Commercial Interior Design',
            desc:
              'Smart, functional commercial spaces that enhance productivity and leave a strong impression on clients and visitors.',
            points: ['Office Spaces', 'Retail Stores', 'Restaurants', 'Hotels & Hospitality'],
          },
          {
            icon: '/service/service3.png',
            title: 'Design Consultation',
            desc:
              'Expert guidance from Laxmi Interior to help you plan layouts, choose materials, and align your space with your vision.',
            points: ['Design Planning', 'Color Consultation', 'Space Optimization', 'Budget Planning'],
          },
          {
            icon: '/service/service4.png',
            title: 'Custom Furniture & Carpentry',
            desc:
              'Bespoke furniture and storage solutions crafted to fit your space perfectly and complement your interior theme.',
            points: ['Custom Cabinets', 'Built-in Storage', 'Unique Seating', 'Statement Pieces'],
          },
          {
            icon: '/service/service5.png',
            title: 'Styling & Property Staging',
            desc:
              'Professional styling and staging to present your home or property at its absolute best for living or resale.',
            points: ['Home Staging', 'Property Styling', 'Accessory Selection', 'Final Touches'],
          },
          {
            icon: '/service/service6.png',
            title: '3D Interior Visualization',
            desc:
              'Experience your Laxmi Interior design virtually before execution with detailed 3D visuals and walkthroughs.',
            points: ['3D Floor Plans', 'Realistic Renderings', 'Virtual Walkthroughs', 'Design Previews'],
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#111111] border border-gray-700 rounded-xl p-6 shadow-lg hover:scale-105 transition duration-300"
          >
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
          Laxmi Interior Design Process
        </h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            {
              title: '1. Consultation',
              desc:
                'We begin with a detailed consultation to understand your lifestyle, taste, requirements, and budget.',
              icon: '/service/consalting.png',
            },
            {
              title: '2. Design & Planning',
              desc:
                'Our designers create concepts, mood boards, 3D visuals, and layouts to present a clear vision for your space.',
              icon: '/service/planing.png',
            },
            {
              title: '3. Execution',
              desc:
                'From civil work to modular units and decor, our team executes every detail with precision and premium finishing.',
              icon: '/service/execution.png',
            },
            {
              title: '4. Handover & Support',
              desc:
                'We hand over your completed space and continue to support you with aftercare for a smooth, worry-free experience.',
              icon: '/service/support.png',
            },
          ].map((step, index) => (
            <div key={index} className="flex flex-col items-center hover:scale-105 transition">
              <Image src={step.icon} alt={step.title} width={60} height={60} className="mb-4" />
              <h3 className="text-xl font-semibold text-[#FFD700] mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --------------------- What Makes Us Unique --------------------- */}
      <section className="max-w-7xl mx-auto text-white px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-[#FFD700] to-white bg-clip-text text-transparent animate-pulse">
          What Makes Laxmi Interior Unique?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Budget-Friendly Luxury',
              desc:
                'We create premium-looking interiors while respecting your budget — with smart planning and zero compromise on quality.',
              icon: '/service/luxury.png',
            },
            {
              title: 'On-Time Delivery',
              desc:
                'With efficient project management and regular updates, Laxmi Interior ensures timely delivery of your project.',
              icon: '/service/ontime.png',
            },
            {
              title: 'Sustainable Design Choices',
              desc:
                'Wherever possible, we integrate eco-conscious materials and long-lasting solutions to create healthier, sustainable spaces.',
              icon: '/service/sustainable.png',
            },
          ].map((usp, index) => (
            <div
              key={index}
              className="bg-[#111111] border border-gray-700 rounded-xl p-6 text-center hover:scale-105 transition"
            >
              <Image
                src={usp.icon}
                alt={usp.title}
                width={50}
                height={50}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-[#FFD700] mb-2">
                {usp.title}
              </h3>
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
