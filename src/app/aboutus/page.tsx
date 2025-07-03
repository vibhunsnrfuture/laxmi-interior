'use client';

import Image from 'next/image';
import React from 'react';
import { Star, Users, GraduationCap, LifeBuoy } from 'lucide-react';

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-black text-white py-10 px-6 space-y-24">
      {/* About Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-20 px-6">
        <div className="flex-1 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#FFD700] to-white bg-clip-text text-transparent animate-pulse">
            About Flourish Design
          </h1>
          <p className="mb-6 text-lg leading-relaxed text-gray-300">
            At Flourish Designs, we believe that a house becomes a home when it reflects your lifestyle, your dreams, and your personality.
            <br /><br />
            Operating in Mumbai, Thane, and Navi Mumbai, we are a full-service interior design firm dedicated to turning ordinary spaces into warm, elegant, and aesthetic environments you will love to live in.
          </p>
        </div>

        <div className="flex-1 max-w-md w-full animate-fade-in-up">
          <div className="rounded-xl overflow-hidden border-4 border-yellow-400 shadow-lg">
            <Image
              src="/tumbnailaboutus.png"
              alt="Interior Showcase"
              width={500}
              height={300}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto text-left px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#FFD700] to-white bg-clip-text text-transparent animate-pulse">Why Choose Flourish Design</h2>
        <p className="text-gray-300 mb-10 max-w-3xl text-left animate-fade-in-up">
          Interior design is not just about beautifying spaces — it is about creating environments that elevate your lifestyle and make every moment meaningful.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#111111] rounded-xl p-6 md:p-10 border border-gray-700 shadow-xl animate-fade-in-up">
          <div className="flex gap-4">
            <Star className="text-[#FFD700]" size={32} />
            <div>
              <h3 className="text-xl font-semibold mb-1">Bespoke Creations</h3>
              <p className="text-gray-400 text-sm">
                Every project is unique. We design interiors tailored to your taste, space, and story.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <GraduationCap className="text-[#FFD700]" size={32} />
            <div>
              <h3 className="text-xl font-semibold mb-1">Expert Designers</h3>
              <p className="text-gray-400 text-sm">
                Our team includes experienced interior architects and designers who bring global expertise with local context.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Users className="text-[#FFD700]" size={32} />
            <div>
              <h3 className="text-xl font-semibold mb-1">Client-Centric Approach</h3>
              <p className="text-gray-400 text-sm">
                From consultation to handover, we keep your vision and comfort at the heart of our process.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <LifeBuoy className="text-[#FFD700]" size={32} />
            <div>
              <h3 className="text-xl font-semibold mb-1">Aftercare Support</h3>
              <p className="text-gray-400 text-sm">
                Even after completion, we are here to ensure everything continues to reflect perfection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="max-w-7xl mx-auto text-left px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#FFD700] to-white bg-clip-text text-transparent animate-pulse">Our Journey</h2>
        <p className="text-gray-300 mb-10 max-w-3xl text-left animate-fade-in-up">
          What began as a passion project has grown into a sought-after interior design studio, known for its commitment to quality and creative storytelling through space.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left animate-fade-in-up">
          <div className="bg-[#111111] border border-gray-700 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">100+ Projects Completed</h3>
            <p className="text-gray-400 text-sm">
              From cozy apartments to commercial showrooms — we have turned spaces into masterpieces.
            </p>
          </div>
          <div className="bg-[#111111] border border-gray-700 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">5+ Years in Interior Innovation</h3>
            <p className="text-gray-400 text-sm">
              Delivering consistent design excellence with evolving techniques and technologies.
            </p>
          </div>
          <div className="bg-[#111111] border border-gray-700 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Client Satisfaction</h3>
            <p className="text-gray-400 text-sm">
              A majority of our projects come from referrals — a true testament to the trust our clients place in us.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
