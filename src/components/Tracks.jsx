import React from 'react';
import { siteConfig } from '../data/config';

const Tracks = () => {
  return (
    <section id="tracks" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold mb-4">
            Event <span className="text-[#8976FB]">Tracks</span>
          </h2>
          <p className="text-xl opacity-60 font-mono">Choose your challenge</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.tracks.map((track, index) => {
            const Icon = track.icon;
            return (
              <div key={index} className="group relative p-8 border-2 border-[#E6E1F0]/20 hover:border-[#8976FB] hover:bg-[#8976FB]/5 transition-all duration-500 overflow-hidden flex flex-col">
                <div className="absolute inset-0 bg-[#8976FB]/0 group-hover:bg-[#8976FB]/5 transition-all duration-500" />
                <div className="absolute top-4 right-4 text-5xl font-bold text-[#8976FB]/10 group-hover:text-[#8976FB]/20 transition-all duration-300">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="relative z-10 flex-grow">
                  <Icon className="w-12 h-12 mb-6 text-[#8976FB] group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold mb-4">{track.title}</h3>
                  <p className="text-sm opacity-80 leading-relaxed mb-4">{track.description}</p>
                  <div className="text-xs opacity-60 italic border-l-2 border-[#8976FB] pl-3">
                    Examples: {track.examples}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tracks;
