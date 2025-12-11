'use client';

import Image from 'next/image';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Riya Malhotra',
    location: 'Hyderabad',
    avatar: '/home/client1.png',
    title: 'Beautiful Transformation by Laxmi Interior',
    feedback:
      'Laxmi Interior transformed our 3BHK into a modern, functional home. The team understood our taste perfectly and delivered a design that feels premium yet homely.',
  },
  {
    name: 'Aarav',
    location: 'Hyderabad',
    avatar: '/home/boyavtar.png',
    title: 'Smooth & Hassle-Free Experience',
    feedback:
      'From the first design discussion to final installation, the Laxmi Interior team handled everything professionally. Their creativity, regular updates, and on-time delivery made the entire journey stress-free.',
  },
  {
    name: 'Dr. Ayesha Singh',
    location: 'Hyderabad',
    avatar: '/home/client1.png',
    title: 'Perfect Space for My Practice',
    feedback:
      'Laxmi Interior redesigned my clinic with a clean, calming look and a smart layout. Patients love the new ambience, and it reflects exactly the professional yet warm feel I wanted.',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrent((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-[#FFD700] to-white text-transparent bg-clip-text animate-pulse">
          What Our Laxmi Interior Clients Say
        </h2>
        <p className="text-gray-400 mb-10 text-sm">
          Hear from homeowners and professionals who trusted Laxmi Interior to design and execute their dream spaces.
        </p>

        {/* Carousel Container */}
        <div className="relative">
          <div className="bg-[#1a1a1a] text-white p-6 rounded-xl border border-[#FFD70055] shadow-lg hover:shadow-[0_0_30px_#FFD70066] transition duration-500 ease-in-out">
            {/* Stars */}
            <div className="flex justify-center text-[#FFD700] mb-4">
              {Array(5)
                .fill(0)
                .map((_, idx) => (
                  <span key={idx}>★</span>
                ))}
            </div>

            {/* Content */}
            <h3 className="font-semibold text-lg mb-2">
              {testimonials[current].title}
            </h3>
            <p className="text-sm text-gray-300 mb-6">
              {testimonials[current].feedback}
            </p>

            {/* Avatar + Info */}
            <div className="flex items-center justify-center gap-4">
              <Image
                src={testimonials[current].avatar}
                alt={testimonials[current].name}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-sm text-white">
                  {testimonials[current].name}
                </p>
                <p className="text-xs text-gray-400">
                  {testimonials[current].location}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="bg-[#FFD700] text-black px-4 py-2 rounded-full hover:bg-white transition font-semibold"
            >
              ←
            </button>
            <button
              onClick={next}
              className="bg-[#FFD700] text-black px-4 py-2 rounded-full hover:bg-white transition font-semibold"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
