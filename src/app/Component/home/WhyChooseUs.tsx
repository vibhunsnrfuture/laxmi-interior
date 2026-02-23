'use client';

import Image from 'next/image';

const reasons = [
  { icon: '/icons/image copy 3.png', title: 'Easy EMI Options' },
  { icon: '/icons/image copy 4.png', title: '60+ Expert In-House Designers' },
  { icon: '/icons/image.png', title: '450+ Homes Beautifully Designed' },
  { icon: '/icons/image copy 5.png', title: '10 Experience Studios' },
  { icon: '/icons/image copy 6.png', title: 'Serving 40+ Cities' },
  { icon: '/icons/image copy 7.png', title: '45-Day Guaranteed Delivery*' },
  { icon: '/icons/image copy 8.png', title: 'Transparent Pricing — No Hidden Costs' },
  { icon: '/icons/image copy 9.png', title: 'Flat 10-Year Warranty' },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-black py-16 overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Why Choose <span className="text-[#FFD700]">Yogita Interior</span>
        </h2>
      </div>

      {/* Scrolling container */}
      <div className="relative overflow-hidden">
        <div className="animate-scroll flex gap-12 items-center px-10 w-max group hover:[animation-play-state:paused]">
          {reasons.map((item, index) => (
            <div key={index} className="flex flex-col items-center min-w-[140px]">
              <div className="w-16 h-16 mb-3 relative">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-white text-center">{item.title}</p>
            </div>
          ))}

          {/* Duplicate for seamless loop */}
          {reasons.map((item, index) => (
            <div key={`dup-${index}`} className="flex flex-col items-center min-w-[140px]">
              <div className="w-16 h-16 mb-3 relative">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-white text-center">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll-left 30s linear infinite;
        }

        @keyframes scroll-left {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
