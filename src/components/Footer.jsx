import React from 'react';
import Link from 'next/link';
import { siteConfig } from '../data/config';

const Footer = () => {
  return (
    <footer id="footer" className="relative border-t border-[#E6E1F0]/10 py-16 px-6 bg-[#0a0510]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black mb-3">
              <span className="text-[#8976FB]">Infinity</span> CodeWave
            </h3>
            <p className="text-xs font-mono text-[#E6E1F0]/40 mb-1">Part of <span className="text-[#8976FB]">Infinity 2026</span></p>
            <p className="text-xs text-[#E6E1F0]/30 mb-1">Organized by {siteConfig.organizer.shortName}</p>
            <p className="text-xs text-[#E6E1F0]/30">Supported by Dept. of Mathematics, KU</p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-mono text-[#8976FB] tracking-widest mb-4 opacity-70">LINKS</p>
            <div className="flex flex-col gap-2">
              {[
                { label: 'Register', href: siteConfig.registrationLink, external: true },
                { label: 'Sponsorship Brochure', href: siteConfig.sponsorshipBrochure, external: false },
                { label: 'Terms & Conditions', href: '/terms-and-conditions', external: false },
                { label: `Email Us`, href: `mailto:${siteConfig.organizer.email}`, external: false },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="text-sm text-[#E6E1F0]/50 hover:text-[#8976FB] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-mono text-[#8976FB] tracking-widest mb-4 opacity-70">CONNECT</p>
            <div className="flex gap-3 mb-4">
              {siteConfig.socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 border border-[#E6E1F0]/15 flex items-center justify-center hover:border-[#8976FB] hover:bg-[#8976FB]/10 transition-all duration-300 group"
                  >
                    <Icon className="w-4 h-4 text-[#E6E1F0]/40 group-hover:text-[#8976FB] transition-colors" />
                  </a>
                );
              })}
            </div>
            <p className="text-xs text-[#E6E1F0]/30">{siteConfig.organizer.email}</p>
          </div>
        </div>

        <div className="border-t border-[#E6E1F0]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-[#E6E1F0]/25 font-mono">
          <p>© 2026 {siteConfig.organizer.name}</p>
          <p>AN INFINITY EVENT BY {siteConfig.organizer.shortName}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
