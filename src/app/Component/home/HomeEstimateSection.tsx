'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const estimateOptions = [
  {
    title: 'Full Home Interior',
    description: 'Complete 1BHK interiors from ₹2.6L and 2BHK from ₹3.7L only.',
    image: '/icons/image.png',
  },
  {
    title: 'Kitchen',
    description: 'Premium kitchen interiors starting at an affordable price of ₹45,000.',
    image: '/icons/image copy.png',
  },
  {
    title: 'Wardrobe',
    description: 'Custom wardrobe designs available; pricing based on size and materials.',
    image: '/icons/image copy 2.png',
  },
];

const changingWords = ['Full Home', 'Wardrobe', 'Kitchen'];

export default function HomeEstimateSection() {
  const [activeWordIndex, setActiveWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWordIndex((prev) => (prev + 1) % changingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black py-20 px-4 md:px-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Get the estimate for your{' '}
          <span className="bg-gradient-to-r from-[#FFD700] to-white text-transparent bg-clip-text transition-all duration-500 animate-pulse">
            {changingWords[activeWordIndex]}
          </span>
        </h2>
        <p className="text-gray-300 mt-2 text-base">
          Calculate the approximate cost of doing up your home interiors
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {estimateOptions.map((option, index) => (
          <div
            key={index}
            className="bg-[#121212] border border-[#FFD70033] rounded-2xl p-6 flex flex-col justify-between hover:shadow-[0_0_25px_#FFD70066] transition duration-300 group"
          >
            <div>
              <Image
                src={option.image}
                alt={option.title}
                width={50}
                height={50}
                className="mb-4"
              />
              <h3 className="text-lg font-semibold text-white group-hover:text-[#FFD700] transition">
                {option.title}
              </h3>
              <p className="text-sm text-gray-400 mt-2">{option.description}</p>
            </div>

            {/* ✅ Link to Contact Page */}
            <Link href="/contactus" className="mt-6">
              <button className="w-full bg-gradient-to-r from-[#FFD700] to-[#d4af37] hover:brightness-110 text-black font-bold py-2 rounded-full transition text-sm">
                Estimate &nbsp; →
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
