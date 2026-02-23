'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

const inspirations = [
  { title: 'Living Room', image: '/home/livingroom.png' },
  { title: 'Master Bedroom', image: '/home/masterroom.png' },
  { title: 'False Ceiling', image: '/home/falseceling.png' },
  { title: 'Modern Kitchen', image: '/home/modern kitchen.png' },
  { title: 'Study Room', image: '/home/studyroom.png' },
  { title: 'Dining Area', image: '/home/diningarea.png' },
];

export default function InspirationGrid() {
  useEffect(() => {
    const revealItems = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.2 }
    );

    revealItems.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-black py-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-14 gap-4 sm:gap-3">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-[#FFD700] to-white text-transparent bg-clip-text animate-pulse">
              Yogita Interior inspirations for your dream home
            </h2>
            <p className="text-white text-sm mt-2 animate-fade-in">
              Browse handpicked Yogita Interior designs for every corner of your home – crafted to balance comfort, style, and functionality.
            </p>
          </div>

          <Link href="/design">
            <button className="text-[#FFD700] text-sm font-semibold hover:underline transition duration-300">
              View All Designs →
            </button>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {inspirations.map((item, index) => (
            <Link href="/design" key={index}>
              <div
                className="fade-up opacity-0 translate-y-10 transition-all duration-700 ease-out group relative rounded-xl overflow-hidden bg-[#1a1a1a] border border-[#2f2f2f] shadow-xl hover:shadow-[0_0_25px_#FFD70088] hover:-translate-y-3 transform cursor-pointer"
              >
                <div className="relative w-full h-60 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  {/* animated shine overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-shimmer z-10" />
                </div>
                <div className="p-4 text-sm font-semibold text-white group-hover:text-[#FFD700] transition-colors duration-300 z-20 relative">
                  {item.title}
                </div>
                {/* Animated glowing border */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#FFD700] group-hover:animate-borderGlow z-0"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Tailwind custom animation styles */}
      <style jsx>{`
        .animate-shimmer {
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes borderGlow {
          0%, 100% {
            box-shadow: 0 0 10px #FFD70066, 0 0 20px #FFD70033;
          }
          50% {
            box-shadow: 0 0 20px #FFD700aa, 0 0 40px #FFD70055;
          }
        }

        .animate-borderGlow {
          animation: borderGlow 2s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fadeIn 2s ease-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
