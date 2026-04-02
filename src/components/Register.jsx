import React from 'react';
import { ChevronRight, Calendar, MapPin } from 'lucide-react';
import { siteConfig } from '../data/config';

const Register = () => {
  return (
    <section id="register" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative border border-[#8976FB]/30 p-12 md:p-20 text-center overflow-hidden">

          {/* Background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 50% 50%, rgba(137, 118, 251, 0.08) 0%, transparent 70%)'
            }}
          />

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-[#8976FB]" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-[#8976FB]" />

          <div className="relative z-10">
            <p className="text-xs font-mono text-[#8976FB] tracking-widest mb-6 opacity-80">LIMITED TO 120 PARTICIPANTS</p>

            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-none">
              READY TO<br />
              <span className="text-[#8976FB]">BUILD THE FUTURE?</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm font-mono text-[#E6E1F0]/50">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#8976FB]" />
                {siteConfig.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#8976FB]" />
                {siteConfig.location}
              </span>
              <span>•</span>
              <span className="text-[#8976FB] font-bold">{siteConfig.admission}</span>
            </div>

            <a
              href={siteConfig.registrationLink}
              className="group inline-flex items-center gap-3 px-14 py-5 bg-[#8976FB] text-white text-lg font-black hover:bg-[#8976FB]/90 hover:scale-105 hover:shadow-2xl hover:shadow-[#8976FB]/30 transition-all duration-300 active:scale-95"
            >
              REGISTER NOW
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="mt-6 text-xs text-[#E6E1F0]/30 font-mono">
              Applications close when seats fill • Accepted by April 16
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
