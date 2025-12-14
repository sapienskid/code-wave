import React from 'react';
import { siteConfig } from '../data/config';

const About = () => {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Main content - spans 7 columns */}
          <div className="lg:col-span-7 border border-[#E6E1F0]/20 p-8 md:p-12">
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              About <span className="text-[#8976FB]">{siteConfig.name.split(' ')[1]}</span>
            </h2>
            <div className="w-20 h-1 bg-[#8976FB] mb-8" />
            <p className="text-lg leading-relaxed opacity-80 mb-6">
              Join 120+ innovative minds for {siteConfig.duration} of intense creation. Part of <strong>Infinity</strong>, the annual flagship event by Kathmandu University Mathematics Students' Club (KUMSC), {siteConfig.name} bridges the gap between theoretical mathematics and real-world software applications.
            </p>
            <p className="text-lg leading-relaxed opacity-80 mb-6">
              We bring together students, developers, and math enthusiasts to solve complex problems using computational thinking.
            </p>
            
            {/* Target Audience */}
            <div className="mt-6 pt-6 border-t border-[#E6E1F0]/20">
              <h3 className="text-sm font-mono text-[#8976FB] mb-4 opacity-80">WHO ATTENDS?</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm opacity-70">
                {siteConfig.targetAudience.map((audience, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-[#8976FB]">•</span>
                    {audience}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Stats - spans 5 columns */}
          <div className="lg:col-span-5 grid grid-rows-3 gap-6">
            {siteConfig.stats.map((stat, index) => (
              <div key={index} className="flex items-center justify-center flex-col p-8 border border-[#E6E1F0]/20 hover:border-[#8976FB] hover:bg-[#8976FB]/5 transition-all duration-300 group">
                <span className="text-4xl font-bold text-[#8976FB] mb-2">{stat.value}</span>
                <span className="text-base opacity-80">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
