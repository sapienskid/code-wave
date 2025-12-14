import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Sparkles, ChevronRight } from 'lucide-react';
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
      const difference = eventDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [isClient]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32 pt-40">


      {/* Main hero content */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div 
          className="mb-8 transition-opacity duration-700"
          style={{
            opacity: Math.max(0, 1 - scrollY / 800)
          }}
        >
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-none mb-6">
            <span className="block text-[#8976FB]">
              {siteConfig.name}
            </span>
            <span className="block mt-2 text-3xl md:text-6xl">{siteConfig.tagline}</span>
          </h1>
          
          <div className="flex items-center justify-center gap-3 text-lg md:text-xl font-mono mb-8 opacity-80">
            <Sparkles className="w-5 h-5 text-[#8976FB]" />
            <span>{siteConfig.subTagline}</span>
            <Sparkles className="w-5 h-5 text-[#8976FB]" />
          </div>
        </div>

        {/* Key info pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm">
          <div className="flex items-center gap-2 px-6 py-3 border-2 border-[#E6E1F0]/20 backdrop-blur-sm hover:border-[#8976FB]/50 transition-all duration-300">
            <Calendar className="w-4 h-4 text-[#8976FB]" />
            <span>{siteConfig.date}</span>
          </div>
          <div className="flex items-center gap-2 px-6 py-3 border-2 border-[#E6E1F0]/20 backdrop-blur-sm hover:border-[#8976FB]/50 transition-all duration-300">
            <MapPin className="w-4 h-4 text-[#8976FB]" />
            <span>{siteConfig.location}</span>
          </div>
          {/* CRITICAL: Cost Tag */}
          <div className="flex items-center gap-2 px-6 py-3 border-2 border-[#8976FB] bg-[#8976FB]/10 backdrop-blur-sm transition-all duration-300">
            <span className="font-bold text-[#8976FB]">Admission: {siteConfig.admission}</span>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="mb-12">
          <p className="text-sm font-mono opacity-60 mb-4">EVENT STARTS IN</p>
          <div className="flex justify-center gap-4 md:gap-8">
            {['DAYS', 'HOURS', 'MINUTES', 'SECONDS'].map((unit, index) => {
              const value = Object.values(timeLeft)[index];
              return (
                <div key={unit} className="flex flex-col items-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-[#8976FB]/30 bg-[#8976FB]/10 flex items-center justify-center mb-2">
                    <span className="text-2xl md:text-3xl font-bold text-[#8976FB]">{String(value).padStart(2, '0')}</span>
                  </div>
                  <span className="text-xs font-mono opacity-60">{unit}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Primary CTA */}
        <a href={siteConfig.registrationLink} className="inline-block group relative px-12 py-5 bg-[#8976FB] text-lg font-semibold hover:scale-105 hover:shadow-lg hover:shadow-[#8976FB]/50 transition-all duration-300">
          <span className="relative z-10 flex items-center gap-2 text-white">
            Register Now
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
