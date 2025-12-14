import React from 'react';
import { siteConfig } from '../data/config';

const Footer = () => {
  return (
    <footer id="footer" className="relative border-t-2 border-[#E6E1F0]/20 py-16 px-6 bg-[#0a0510]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-6 mb-12">
          {/* Left - 6 columns */}
          <div className="md:col-span-6 border-2 border-[#E6E1F0]/20 p-8">
            <h3 className="text-3xl font-bold mb-4 text-[#8976FB]">
              {siteConfig.name}
            </h3>
            <p className="text-sm opacity-60 mb-2">Part of <span className="text-[#8976FB] font-semibold">{siteConfig.eventName}</span> — KUMSC's Annual Event</p>
            <p className="text-sm opacity-60 mb-2">Organized by {siteConfig.organizer.name}</p>
            <p className="text-sm opacity-60">Supported by {siteConfig.organizer.supportedBy}</p>
            
            {/* MLH Link */}
            <a 
              href={siteConfig.mlhCodeOfConduct}
              target="_blank" 
              rel="noreferrer"
              className="inline-block mt-4 text-sm font-bold text-[#8976FB] hover:underline"
            >
              MLH Code of Conduct
            </a>
          </div>

          {/* Right - 6 columns */}
          <div className="md:col-span-6 border-2 border-[#E6E1F0]/20 p-8">
            <h4 className="font-semibold mb-4 text-[#8976FB]">CONNECT WITH US</h4>
            <div className="flex gap-4 mb-6">
              {siteConfig.socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 border-2 border-[#E6E1F0]/20 flex items-center justify-center hover:border-[#8976FB] transition-all duration-300 group"
                  >
                    <Icon className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:text-[#8976FB] transition-all" />
                  </a>
                );
              })}
            </div>
            <p className="text-sm opacity-60">
              Questions? Reach out at <a href={`mailto:${siteConfig.organizer.email}`} className="text-[#8976FB] hover:underline">{siteConfig.organizer.email}</a>
            </p>
          </div>
        </div>

        <div className="pt-8 border-t-2 border-[#E6E1F0]/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-60">
          <p>© 2026 {siteConfig.organizer.name}.</p>
          <p className="font-mono">AN {siteConfig.eventName.toUpperCase()} EVENT BY {siteConfig.organizer.shortName}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
