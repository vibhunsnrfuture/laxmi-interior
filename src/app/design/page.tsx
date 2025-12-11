'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function DesignPage() {
  const sections = [
    { title: 'Kitchen', subtitle: '500+ Laxmi Interior Designs', image: '/design/kitchendesign.png' },
    { title: 'Living Room', subtitle: '500+ Laxmi Interior Designs', image: '/design/livingroom.png' },
    { title: 'Master Bedroom', subtitle: '500+ Laxmi Interior Designs', image: '/design/bedroom.png' },
    { title: 'Wardrobe', subtitle: '500+ Laxmi Interior Designs', image: '/design/wardrore.png' },
    { title: 'Dining Room', subtitle: '500+ Laxmi Interior Designs', image: '/design/dining.png' },
    { title: "Kid's Bedroom", subtitle: '500+ Laxmi Interior Designs', image: '/design/kid room.png' },
    { title: 'Bathroom', subtitle: '500+ Laxmi Interior Designs', image: '/design/bathroom.png' },
    { title: 'Balcony', subtitle: '500+ Laxmi Interior Designs', image: '/design/balcony.png' },
    { title: 'Pooja Room', subtitle: '500+ Laxmi Interior Designs', image: '/design/poojaroom.png' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-show');
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll('.fade-up');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-black w-full px-4 md:px-12 py-12 pt-14">
      {/* Heading */}
      <div className="mb-12 text-left">
        <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-[#FFD700] to-white bg-clip-text border-l-4 border-[#FFD700] pl-4 inline-block">
          Laxmi Interior – Home Design Gallery
        </h2>
        <p className="mt-4 text-gray-300 max-w-3xl text-base md:text-lg text-left">
          Explore a curated collection of home interior designs by Laxmi Interior. From kitchens and
          bedrooms to balconies and pooja rooms, each concept is crafted to balance beauty and
          practicality. Find inspiration for your dream home and let our expert team bring it to life
          with precise execution and premium finishes.
        </p>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sections.map((item, index) => (
          <Link href="/contactus" key={index}>
            <div
              className={`fade-up opacity-0 translate-y-6 transition-all duration-700 ease-out delay-[${index * 100}ms] bg-[#1a1a1a] border border-[#FFD70022] rounded-xl overflow-hidden shadow-md hover:shadow-[0_0_30px_#FFD70088] hover:scale-[1.03] hover:-rotate-1 transform cursor-pointer`}
            >
              <div className="w-full h-56 relative group overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-[#FFD700]">{item.subtitle}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* --- Section 2: Turnkey Interior Solutions --- */}
      <section className="mt-24 bg-[#111] rounded-xl p-8 border border-[#333]">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FFD700] to-white bg-clip-text text-transparent">
            Laxmi Interior Turnkey Solutions
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            With Laxmi Interior, you get complete end-to-end interior solutions — from layout
            planning and 3D visualizations to material selection, execution, installation, and final
            styling. Sit back and relax while we manage every detail and deliver a move-in-ready home.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {['/design/turnkey1.png', '/design/turnkey2.png', '/design/turnkey3.png'].map((img, i) => (
            <Link href="/contactus" key={i}>
              <div className="relative h-64 rounded-xl overflow-hidden cursor-pointer">
                <Image src={img} alt={`Laxmi Interior Turnkey Design ${i + 1}`} fill className="object-cover" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* --- Section 3: Style Inspiration --- */}
      <section className="mt-24 bg-[#111] rounded-xl p-8 border border-[#333]">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FFD700] to-white bg-clip-text text-transparent">
            Style Inspiration by Laxmi Interior
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Discover signature styles curated by Laxmi Interior — from Scandinavian minimalism and
            urban industrial looks to Indian contemporary and nature-inspired designs. Each concept is
            thoughtfully planned to suit real homes, real families, and real lifestyles.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {['/design/style1.png', '/design/style2.png', '/design/style3.png', '/design/style4.png'].map(
            (img, i) => (
              <Link href="/contactus" key={i}>
                <div className="relative h-64 rounded-xl overflow-hidden cursor-pointer">
                  <Image src={img} alt={`Laxmi Interior Style Inspiration ${i + 1}`} fill className="object-cover" />
                </div>
              </Link>
            )
          )}
        </div>
      </section>

      {/* Animation Styling */}
      <style jsx>{`
        .fade-up {
          will-change: transform, opacity;
        }
        .animate-show {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </main>
  );
}
