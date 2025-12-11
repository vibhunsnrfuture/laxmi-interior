'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#ccd5ae] text-[#333] py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1: Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3 text-[#bc6c25]">Laxmi Interior</h2>
          <p className="text-sm">
            Designing elegant, functional spaces that reflect your lifestyle and bring lasting comfort to your home and all interior works, granite, tiles & marbles works.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/design">Design</Link></li>
            <li><Link href="/interior">Interior</Link></li>
            <li><Link href="/aboutus">About Us</Link></li>
            <li><Link href="/contactus">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm">Email: laxmiinterior297@gmail.com</p>
          <p className="text-sm">Phone: +919059120550, +917981351814</p>
          <p className="text-sm mt-2">9-1-57/p laxmiguda, Hyderabad, India</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#e9edc9] mt-10 pt-4 text-center text-sm text-[#444]">
        © {new Date().getFullYear()} Laxmi Interior. All rights reserved.
      </div>
    </footer>
  );
}
