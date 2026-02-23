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
            About Yogita Interior
          </h1>
          <p className="mb-6 text-lg leading-relaxed text-gray-300">
            At Yogita Interior, we believe a home should reflect who you are — your lifestyle, your story,
            and your aspirations.
            <br />
            <br />
            Based in Mumbai, Thane, and Navi Mumbai, Yogita Interior is a full-service interior design firm
            dedicated to transforming ordinary spaces into warm, elegant, and thoughtfully designed
            environments you’ll love coming back to every day.
          </p>
        </div>

        <div className="flex-1 max-w-md w-full animate-fade-in-up">
          <div className="rounded-xl overflow-hidden border-4 border-yellow-400 shadow-lg">
            <Image
              src="/tumbnailaboutus.png"
              alt="Yogita Interior project showcase"
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
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#FFD700] to-white bg-clip-text text-transparent animate-pulse">
          Why Choose Yogita Interior
        </h2>
        <p className="text-gray-300 mb-10 max-w-3xl text-left animate-fade-in-up">
          For us, interior design is more than décor — it’s about creating spaces that support your
          lifestyle, enhance your comfort, and make every moment feel special.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#111111] rounded-xl p-6 md:p-10 border border-gray-700 shadow-xl animate-fade-in-up">
          <div className="flex gap-4">
            <Star className="text-[#FFD700]" size={32} />
            <div>
              <h3 className="text-xl font-semibold mb-1">Bespoke Creations</h3>
              <p className="text-gray-400 text-sm">
                Every Yogita Interior project is uniquely designed to suit your taste, space, and way of living —
                no generic templates, only personalised concepts.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <GraduationCap className="text-[#FFD700]" size={32} />
            <div>
              <h3 className="text-xl font-semibold mb-1">Experienced Design Team</h3>
              <p className="text-gray-400 text-sm">
                Our team of interior designers and consultants bring years of experience, blending modern trends
                with practical, locally-relevant solutions.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Users className="text-[#FFD700]" size={32} />
            <div>
              <h3 className="text-xl font-semibold mb-1">Client-First Approach</h3>
              <p className="text-gray-400 text-sm">
                From the first meeting to final handover, your comfort, preferences, and feedback stay at the
                heart of our process at Yogita Interior.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <LifeBuoy className="text-[#FFD700]" size={32} />
            <div>
              <h3 className="text-xl font-semibold mb-1">Reliable After-Sales Support</h3>
              <p className="text-gray-400 text-sm">
                Even after project completion, the Yogita Interior team is available for support, touch-ups,
                and guidance — because long-term relationships matter to us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="max-w-7xl mx-auto text-left px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#FFD700] to-white bg-clip-text text-transparent animate-pulse">
          Our Journey
        </h2>
        <p className="text-gray-300 mb-10 max-w-3xl text-left animate-fade-in-up">
          What started as a passion for thoughtful spaces has grown into Yogita Interior — a trusted name
          in residential and commercial interior design, known for detail-oriented execution and
          timeless aesthetics.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left animate-fade-in-up">
          <div className="bg-[#111111] border border-gray-700 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">100+ Projects Completed</h3>
            <p className="text-gray-400 text-sm">
              From compact apartments to spacious villas and offices, we’ve delivered spaces that combine
              beauty with everyday practicality.
            </p>
          </div>
          <div className="bg-[#111111] border border-gray-700 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">5+ Years of Design Excellence</h3>
            <p className="text-gray-400 text-sm">
              With each year, Yogita Interior continues to refine its craft, embracing new materials,
              technologies, and styles to better serve our clients.
            </p>
          </div>
          <div className="bg-[#111111] border border-gray-700 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Trusted by Our Clients</h3>
            <p className="text-gray-400 text-sm">
              A large part of our work comes through referrals — a reflection of the trust, satisfaction,
              and long-term relationships we build with every project.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
