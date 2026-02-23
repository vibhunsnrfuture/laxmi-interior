'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const backgroundImages = [
  '/home/landing1.png',
  '/home/falseceling.png',
  '/home/livingroom.png',
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry: '',
    message: '',
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const businessPhoneNumber = '+919059120550';

    const message = `Hello Yogita Interior,

I am interested in your interior design services. Here are my details:

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Inquiry Type: ${form.inquiry}

Message:
${form.message}

Kindly get back to me with more details. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${businessPhoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="bg-black w-full min-h-screen overflow-hidden z-0">
      {/* Background Image Slider */}
      <div className="absolute inset-0 transition-opacity duration-1000">
        {backgroundImages.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`Slide ${i}`}
            fill
            priority={i === currentIndex}
            className={`object-cover absolute transition-opacity duration-1000 ${
              currentIndex === i ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Content & Form */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start px-6 md:px-16 pt-36 md:pt-40 pb-16 gap-10">
        {/* Left Text */}
        <div className="max-w-4xl md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-[#FFD700] to-white text-transparent bg-clip-text mb-6 leading-snug animate-pulse">
            Creating elegant interiors that reflect your personality and elevate your lifestyle.
          </h1>
          <p className="text-white/90 max-w-2xl text-left mb-8">
            At Yogita Interior, we design beautiful and functional spaces crafted around your taste, comfort, and daily living needs. From residential to commercial projects, we transform your ideas into reality with precision and creativity.
          </p>

          <Link href="/contactus">
            <button className="bg-gradient-to-r from-[#FFD700] to-[#d4af37] text-black font-semibold px-6 py-3 rounded-full transition hover:scale-105">
              BOOK FREE CONSULTATION
            </button>
          </Link>
        </div>

        {/* WhatsApp Form */}
        <div className="w-full md:w-[350px] md:ml-[-20px]">
          <form
            onSubmit={handleSubmit}
            className="bg-black/70 backdrop-blur-lg p-6 rounded-xl shadow-xl w-full text-sm space-y-4 border border-[#FFD700]"
          >
            <h2 className="text-xl font-semibold text-white mb-2">Get in Touch</h2>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full bg-transparent border border-[#FFD700] text-white px-4 py-2 rounded outline-none focus:ring-1 focus:ring-[#FFD700]"
              required
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full bg-transparent border border-[#FFD700] text-white px-4 py-2 rounded outline-none focus:ring-1 focus:ring-[#FFD700]"
              required
            />

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Mobile Number"
              className="w-full bg-transparent border border-[#FFD700] text-white px-4 py-2 rounded outline-none focus:ring-1 focus:ring-[#FFD700]"
              required
            />

            <select
              name="inquiry"
              value={form.inquiry}
              onChange={handleChange}
              className="w-full bg-transparent border border-[#FFD700] text-white px-4 py-2 rounded outline-none focus:ring-1 focus:ring-[#FFD700]"
              required
            >
              <option value="">Looking For</option>
              <option value="Design" className="text-black bg-white">
                Design
              </option>
              <option value="Design & Build" className="text-black bg-white">
                Design & Build
              </option>
            </select>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows={3}
              className="w-full bg-transparent border border-[#FFD700] text-white px-4 py-2 rounded outline-none focus:ring-1 focus:ring-[#FFD700]"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#FFD700] to-[#d4af37] text-black py-2 px-4 rounded font-semibold transition hover:scale-105"
            >
              Submit via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
