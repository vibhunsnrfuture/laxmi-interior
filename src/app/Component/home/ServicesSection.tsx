'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Modular Interiors',
    description: 'Functional kitchen, wardrobe and storage',
    image: '/home/modular.png',
  },
  {
    title: 'Full Home Interiors',
    description: 'Turnkey interior solutions for your home',
    image: '/home/fullhome.png',
  },
  {
    title: 'Luxury Interiors',
    description: 'Tailored interiors that redefine elegance',
    image: '/home/luxury.png',
  },
  {
    title: 'Renovations',
    description: 'Expert solutions to upgrade your home',
    image: '/home/renovations.png',
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-black py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#FFD700] to-white text-transparent bg-clip-text animate-pulse">
          One-stop shop for all things interiors
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Be it end-to-end interiors, renovation or modular solutions, we have it all for your home
          or office. With a wide range of furniture & décor, we have your back from start to finish.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link href="/service" key={index}>
              <div className="cursor-pointer bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] hover:shadow-[0_0_20px_#FFD70055] transition overflow-hidden group">
                <div className="w-full h-56 relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-left">
                  <h3 className="font-semibold text-lg text-white mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">{service.description}</p>
                  <ArrowRight className="w-5 h-5 text-[#FFD700] group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
