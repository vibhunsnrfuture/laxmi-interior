'use client';

import Image from 'next/image';

export default function ProcessStep() {
  return (
    <section className="bg-black py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#FFD700] to-white text-transparent bg-clip-text animate-pulse">
          How we work
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          We simplify interior design through personalized planning, expert guidance, and seamless execution tailored to you.
        </p>

        {/* Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start text-left">
          {/* Left Content */}
          <div className="flex flex-col justify-start h-full">
            <h2 className="text-3xl md:text-2xl font-semibold text-white mb-4">
              From Vision to Reality
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              At our core, we believe great design starts with understanding you. Our collaborative process is tailored to your lifestyle and style preferences. We begin by listening to your needs and inspirations, then craft a personalized plan that blends functionality with timeless beauty. From concept to execution, we handle every detail to deliver a seamless experience — turning your vision into a space that feels uniquely yours.
            </p>
          </div>

          {/* Right Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_25px_#FFD70099] transition">
              <Image src="/home/fullhome.png" alt="Design Step 1" fill className="object-cover" />
            </div>
            <div className="relative h-40 rounded-lg overflow-hidden shadow hover:shadow-[0_0_15px_#FFD70055] transition">
              <Image src="/home/luxury.png" alt="Design Step 2" fill className="object-cover" />
            </div>
            <div className="relative h-40 rounded-lg overflow-hidden shadow hover:shadow-[0_0_15px_#FFD70055] transition">
              <Image src="/home/landingimg.png" alt="Design Step 3" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
