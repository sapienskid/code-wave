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
              About <span className="text-[#d946ef]">{siteConfig.name.split(' ')[1]}</span>
            </h2>
            <div className="w-20 h-1 bg-[#d946ef] mb-8" />
            <p className="text-lg leading-relaxed opacity-80 mb-6">
              Join 100+ innovative minds for 24 hours of creation. Hosted by KUMSC, {siteConfig.name} bridges the gap between theoretical mathematics and real-world software applications.
            </p>
            <p className="text-lg leading-relaxed opacity-80">
              We bring together students, developers, and math enthusiasts to solve complex problems using computational thinking.
            </p>
          </div>
          
          {/* Stats - spans 5 columns */}
          <div className="lg:col-span-5 grid grid-rows-3 gap-6">
            {siteConfig.stats.map((stat, index) => (
              <div key={index} className="flex items-center justify-center flex-col p-8 border border-[#E6E1F0]/20 hover:border-[#d946ef] hover:bg-[#d946ef]/5 transition-all duration-300 group">
                <span className="text-4xl font-bold text-[#d946ef] mb-2">{stat.value}</span>
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
