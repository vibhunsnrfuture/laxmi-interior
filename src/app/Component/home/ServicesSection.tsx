'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Modular Interiors',
    description: 'Premium modular kitchens, wardrobes, and smart storage by Laxmi Interior.',
    image: '/home/modular.png',
  },
  {
    title: 'Full Home Interiors',
    description: 'Complete turnkey interior solutions crafted for your dream home.',
    image: '/home/fullhome.png',
  },
  {
    title: 'Luxury Interiors',
    description: 'Bespoke luxury interiors designed with elegance and precision.',
    image: '/home/luxury.png',
  },
  {
    title: 'Renovations',
    description: 'Expert renovation services to refresh, upgrade, and modernize your space.',
    image: '/home/renovations.png',
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-black py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#FFD700] to-white text-transparent bg-clip-text animate-pulse">
          Laxmi Interior – Your Complete Interior Solutions Partner
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          From modular kitchens to full home interiors, luxury designs, and professional renovations —
          Laxmi Interior delivers end-to-end solutions with exceptional craftsmanship and timeless style.
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
