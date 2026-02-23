'use client';

import Image from 'next/image';

export default function ProcessStep() {
  return (
    <section className="bg-black py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#FFD700] to-white text-transparent bg-clip-text animate-pulse">
          How Yogita Interior Works
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          At Yogita Interior, we make interior design simple and stress-free with a clear process, expert guidance, and end-to-end execution tailored to your home and lifestyle.
        </p>

        {/* Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start text-left">
          {/* Left Content */}
          <div className="flex flex-col justify-start h-full">
            <h2 className="text-3xl md:text-2xl font-semibold text-white mb-4">
              From Your Vision to a Yogita Interior Signature Space
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Every Yogita Interior project begins with understanding you — your routine, taste, and aspirations for your space. We start with a detailed consultation where we listen to your ideas and explore suitable design directions. Our team then creates a customized plan that balances practicality with elegant design. From layouts and material selection to on-site execution, we manage every step with care, ensuring your home is delivered on time, with the quality and finish Yogita Interior stands for.
            </p>
          </div>

          {/* Right Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_25px_#FFD70099] transition">
              <Image
                src="/home/fullhome.png"
                alt="Yogita Interior full home design"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-40 rounded-lg overflow-hidden shadow hover:shadow-[0_0_15px_#FFD70055] transition">
              <Image
                src="/home/luxury.png"
                alt="Yogita Interior luxury interior concept"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-40 rounded-lg overflow-hidden shadow hover:shadow-[0_0_15px_#FFD70055] transition">
              <Image
                src="/home/landingimg.png"
                alt="Yogita Interior modern living space"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
