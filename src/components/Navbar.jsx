import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/config';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0510]/90 backdrop-blur-md border-b border-[#E6E1F0]/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tighter">
          <span className="text-[#8976FB]">Infinity</span> CodeWave
        </div>

        {/* Register Button */}
        <a
          href={siteConfig.registrationLink}
          className="px-6 py-2 bg-[#8976FB] text-white text-sm font-bold rounded-sm hover:bg-[#8976FB]/90 transition-all hover:scale-105"
        >
          Register Interest
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
