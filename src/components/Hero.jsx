import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, ChevronRight, ArrowDown } from 'lucide-react';
import { siteConfig } from '../data/config';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    const eventDate = new Date(siteConfig.eventDate).getTime();
    const calculateTimeLeft = () => {
      const now = Date.now();
      const diff = eventDate - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [isClient]);

  const opacity = Math.max(0, 1 - scrollY / 600);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-32 pt-40 overflow-hidden">

      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(137, 118, 251, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(137, 118, 251, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(137, 118, 251, 0.12) 0%, transparent 70%)'
        }}
      />

      {/* Corner accents */}
      <div className="absolute top-24 left-8 w-16 h-16 border-l-2 border-t-2 border-[#8976FB]/30 pointer-events-none" />
      <div className="absolute bottom-24 right-8 w-16 h-16 border-r-2 border-b-2 border-[#8976FB]/30 pointer-events-none" />

      {/* Part of Infinity badge */}
      <div className="relative z-10 mb-8" style={{ opacity }}>
        <span className="px-3 py-1 border border-[#8976FB]/40 text-[#8976FB] text-xs font-mono tracking-widest">
          PART OF INFINITY 2026
        </span>
      </div>

      {/* Main headline */}
      <div className="relative z-10 max-w-6xl mx-auto text-center" style={{ opacity }}>
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none mb-4">
          <span className="block text-[#8976FB]" style={{
            textShadow: '0 0 80px rgba(137, 118, 251, 0.35)'
          }}>
            CodeWave
          </span>
          <span className="block text-[#E6E1F0] text-4xl md:text-6xl font-bold mt-2 tracking-tight">
            {siteConfig.tagline}
          </span>
        </h1>

        <p className="text-[#E6E1F0]/50 text-base md:text-lg font-mono mt-4 mb-10 tracking-wider">
          {siteConfig.subTagline}
        </p>

        {/* Info chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 text-sm">
          <div className="flex items-center gap-2 px-5 py-2.5 border border-[#E6E1F0]/15 bg-[#E6E1F0]/3 hover:border-[#8976FB]/50 transition-all duration-300 font-mono text-[#E6E1F0]/70">
            <Calendar className="w-4 h-4 text-[#8976FB]" />
            {siteConfig.date}
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 border border-[#E6E1F0]/15 bg-[#E6E1F0]/3 hover:border-[#8976FB]/50 transition-all duration-300 font-mono text-[#E6E1F0]/70">
            <MapPin className="w-4 h-4 text-[#8976FB]" />
            {siteConfig.location}
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 border border-[#8976FB] bg-[#8976FB]/10 font-mono font-bold text-[#8976FB]">
            {siteConfig.admission}
          </div>
        </div>

        {/* Countdown */}
        <div className="mb-12">
          <p className="text-xs font-mono text-[#E6E1F0]/40 mb-5 tracking-widest uppercase">Hackathon Begins In</p>
          <div className="flex justify-center gap-3 md:gap-5">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Mins', value: timeLeft.minutes },
              { label: 'Secs', value: timeLeft.seconds },
            ].map(({ label, value }, i) => (
              <div key={label} className="flex flex-col items-center">
                <div className="relative w-18 h-18 md:w-22 md:h-22 min-w-[64px] min-h-[64px] md:min-w-[80px] md:min-h-[80px] border border-[#8976FB]/30 bg-[#8976FB]/5 flex items-center justify-center">
                  {/* Corner dots */}
                  <div className="absolute top-1 left-1 w-1 h-1 bg-[#8976FB]/60" />
                  <div className="absolute top-1 right-1 w-1 h-1 bg-[#8976FB]/60" />
                  <div className="absolute bottom-1 left-1 w-1 h-1 bg-[#8976FB]/60" />
                  <div className="absolute bottom-1 right-1 w-1 h-1 bg-[#8976FB]/60" />
                  <span className="text-2xl md:text-4xl font-black text-[#8976FB] font-mono tabular-nums">
                    {String(value).padStart(2, '0')}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#E6E1F0]/40 mt-2 tracking-widest uppercase">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={siteConfig.registrationLink}
            className="group inline-flex items-center gap-3 px-10 py-4 bg-[#8976FB] text-white font-bold text-base hover:bg-[#8976FB]/90 hover:scale-105 hover:shadow-xl hover:shadow-[#8976FB]/30 transition-all duration-300 active:scale-95"
          >
            Register Now
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-4 border border-[#E6E1F0]/20 text-[#E6E1F0]/70 font-mono text-sm hover:border-[#8976FB]/50 hover:text-[#E6E1F0] transition-all duration-300"
          >
            Learn More
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #0a0510, transparent)' }}
      />
    </section>
  );
};

export default Hero;
