import React from 'react';
import { siteConfig } from '../data/config';

const About = () => {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <p className="text-xs font-mono text-[#8976FB] tracking-widest mb-12 opacity-80">ABOUT THE EVENT</p>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Main content */}
          <div className="lg:col-span-7 border border-[#E6E1F0]/10 p-8 md:p-12 relative overflow-hidden">
            {/* Subtle top accent */}
            <div className="absolute top-0 left-0 w-24 h-[2px] bg-[#8976FB]" />

            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
              What Is<br />
              <span className="text-[#8976FB]">CodeWave?</span>
            </h2>

            <p className="text-[#E6E1F0]/70 leading-relaxed mb-5 text-base">
              Join <strong className="text-[#E6E1F0]">120+ builders</strong> for {siteConfig.duration} of creation. Part of <strong className="text-[#8976FB]">Infinity</strong> — the annual flagship event by Kathmandu University Mathematics Students' Club (KUMSC) — CodeWave bridges theoretical mathematics and real-world software applications.
            </p>
            <p className="text-[#E6E1F0]/70 leading-relaxed mb-8 text-base">
              We bring together students, developers, and math enthusiasts to solve complex problems through computational thinking, with mentors from industry guiding every team.
            </p>

            {/* Who attends */}
            <div className="border-t border-[#E6E1F0]/10 pt-6">
              <p className="text-xs font-mono text-[#8976FB] tracking-widest mb-4 opacity-70">WHO ATTENDS</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {siteConfig.targetAudience.map((audience, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-[#E6E1F0]/60">
                    <span className="text-[#8976FB] mt-0.5 font-bold">→</span>
                    {audience}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stats */}
          <div className="lg:col-span-5 grid grid-rows-3 gap-5">
            {siteConfig.stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-8 border border-[#E6E1F0]/10 hover:border-[#8976FB]/50 hover:bg-[#8976FB]/5 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8976FB]/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <span className="text-5xl font-black text-[#8976FB] mb-2 tabular-nums">{stat.value}</span>
                <span className="text-sm font-mono text-[#E6E1F0]/50 tracking-widest uppercase">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
