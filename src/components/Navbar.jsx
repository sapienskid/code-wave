import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/config';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Tracks', href: '#tracks' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'FAQ', href: '#faq' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0a0510]/95 backdrop-blur-md border-b border-[#8976FB]/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold tracking-tight">
          <span className="text-[#8976FB]">Infinity</span>
          <span className="text-[#E6E1F0]"> CodeWave</span>
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[#E6E1F0]/60 hover:text-[#E6E1F0] transition-colors font-mono tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Register button */}
        <div className="flex items-center gap-3">
          <a
            href={siteConfig.registrationLink}
            className="px-5 py-2 bg-[#8976FB] text-white text-sm font-bold hover:bg-[#8976FB]/80 transition-all hover:scale-105 active:scale-95"
          >
            Register
          </a>
          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-[#E6E1F0]/60 hover:text-[#E6E1F0]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0510]/98 border-t border-[#8976FB]/20 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[#E6E1F0]/70 hover:text-[#8976FB] transition-colors font-mono"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
