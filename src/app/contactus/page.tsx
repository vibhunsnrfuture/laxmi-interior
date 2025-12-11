'use client';

import React, { useState, useEffect } from 'react';

export default function ContactUsPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiry: '',
    message: '',
  });

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-up');
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
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const businessPhoneNumber = '+919059120550';

    const fullMessage = `Hello Laxmi Interior,

I'm interested in your interior design services. Here are my details:

Name: ${form.firstName} ${form.lastName}
Phone: ${form.phone}
Email: ${form.email}
Inquiry Type: ${form.inquiry}

Message:
${form.message}

Looking forward to your response. Thank you!`;

    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappURL = `https://wa.me/${businessPhoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-8">
      <section className="max-w-6xl mx-auto text-left mb-14 fade-up opacity-0 translate-y-6 transition-all duration-700">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#FFD700] to-white bg-clip-text text-transparent animate-pulse">
          Contact Laxmi Interior
        </h1>
        <p className="text-gray-300 max-w-2xl">
          We’d love to connect with you. Whether you are planning your dream home, upgrading an existing
          space, or exploring custom interior solutions — Laxmi Interior is here to guide you at every step.
        </p>
        <p className="text-gray-400 mt-4 max-w-3xl">
          Fill out the form below or reach out directly. Our team will respond with honest suggestions and
          clear guidance — no pressure, just genuine support to help you make the right decision for your home.
        </p>
      </section>

      <form onSubmit={handleSubmit}>
        <section className="max-w-6xl mx-auto bg-[#111111] border border-[#2f2f2f] rounded-2xl p-12 md:p-16 space-y-8 fade-up opacity-0 translate-y-6 transition-all duration-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormField
              label="First Name"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
            />
            <FormField
              label="Last Name"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />
            <FormField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              label="Phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
            />
            <div>
              <label className="block mb-1 text-base">Inquiry Type</label>
              <select
                name="inquiry"
                value={form.inquiry}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-lg bg-black border border-gray-600 text-white focus:ring-1 focus:ring-[#FFD700] transition"
                required
              >
                <option value="">Select Inquiry Type</option>
                <option>Design</option>
                <option>Design & Build</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block mb-1 text-base">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Tell us about your home, requirements, or ideas..."
              className="w-full px-5 py-3 rounded-lg bg-black border border-gray-600 text-white resize-none focus:ring-1 focus:ring-[#FFD700] transition"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4">
            <label className="flex items-center gap-2 text-gray-400 text-base">
              <input type="checkbox" required className="accent-[#FFD700] scale-110" />
              I agree with{' '}
              <a href="#" className="text-white underline">
                Terms of Use
              </a>{' '}
              and{' '}
              <a href="#" className="text-white underline">
                Privacy Policy
              </a>
            </label>

            <button
              type="submit"
              className="bg-[#FFD700] hover:bg-white text-black text-base font-semibold px-8 py-3 rounded-lg transition shadow hover:shadow-yellow-500/50"
            >
              Send via WhatsApp
            </button>
          </div>
        </section>
      </form>

      {/* Minimal animation style */}
      <style jsx>{`
        .fade-up {
          will-change: transform, opacity;
        }
      `}</style>
    </main>
  );
}

type FormFieldProps = {
  label: string;
  name: string;
  value: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function FormField({ label, name, value, onChange, type = 'text' }: FormFieldProps) {
  return (
    <div>
      <label className="block mb-1 text-base">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={`Enter ${label}`}
        className="w-full px-5 py-3 rounded-lg bg-black border border-gray-600 text-white focus:ring-1 focus:ring-[#FFD700] transition"
        required
      />
    </div>
  );
}
