'use client';

import Image from 'next/image';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Riya Malhotra',
    location: 'Pune, Maharashtra',
    avatar: '/home/client1.png',
    title: 'Beautiful Transformation',
    feedback:
      'Our 3BHK flat was transformed into a modern, functional space beyond our expectations. The design team brought our vision to life with elegance and care.',
  },
  {
    name: 'Aarav',
    location: 'Ahmedabad, Gujarat',
    avatar: '/home/boyavtar.png',
    title: 'Seamless Execution',
    feedback:
      'From planning to the final execution, everything was smooth. Their professionalism, creativity, and timely delivery made the experience stress-free.',
  },
  {
    name: 'Dr. Ayesha Singh',
    location: 'Lucknow, Uttar Pradesh',
    avatar: '/home/client1.png',
    title: 'Highly Impressed',
    feedback:
      'The team redesigned my clinic’s interiors and I couldn’t be happier. Clean aesthetics, smart layout, and an inviting atmosphere — exactly what I wanted.',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const next = () => {
    setCurrent((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-[#FFD700] to-white text-transparent bg-clip-text animate-pulse">
          What Our Clients Say
        </h2>
        <p className="text-gray-400 mb-10 text-sm">
          Real feedback from families and professionals who trusted us with their dream interiors.
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
            <h3 className="font-semibold text-lg mb-2">{testimonials[current].title}</h3>
            <p className="text-sm text-gray-300 mb-6">{testimonials[current].feedback}</p>

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
                <p className="font-medium text-sm text-white">{testimonials[current].name}</p>
                <p className="text-xs text-gray-400">{testimonials[current].location}</p>
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
