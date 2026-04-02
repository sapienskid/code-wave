import React from 'react';
import { siteConfig } from '../data/config';

const trackAccents = [
  { color: '#8976FB', glow: 'rgba(137, 118, 251, 0.15)' },  // AI - purple
  { color: '#06b6d4', glow: 'rgba(6, 182, 212, 0.15)' },    // Secure - cyan
  { color: '#22c55e', glow: 'rgba(34, 197, 94, 0.15)' },    // Good - green
  { color: '#f59e0b', glow: 'rgba(245, 158, 11, 0.15)' },   // Wildcard - amber
];

const Tracks = () => {
  return (
    <section id="tracks" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-xs font-mono text-[#8976FB] tracking-widest mb-3 opacity-80">CHALLENGE TRACKS</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight">
              Choose Your<br />
              <span className="text-[#8976FB]">Battle Ground</span>
            </h2>
            <p className="text-[#E6E1F0]/50 text-sm md:text-base md:max-w-xs font-mono leading-relaxed">
              4 tracks. 24 hours. One winner per track.
            </p>
          </div>
        </div>

        {/* Track grid — 2x2 + full width wildcard */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {siteConfig.tracks.map((track, index) => {
            const Icon = track.icon;
            const accent = trackAccents[index] || trackAccents[0];
            const isLast = index === siteConfig.tracks.length - 1;

            return (
              <div
                key={index}
                className={`group relative border border-[#E6E1F0]/10 p-8 md:p-10 overflow-hidden transition-all duration-500 hover:border-opacity-60 flex flex-col ${
                  isLast && siteConfig.tracks.length % 2 !== 0 ? 'md:col-span-2' : ''
                }`}
                style={{
                  '--accent': accent.color,
                  '--glow': accent.glow,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = accent.color + '60';
                  e.currentTarget.style.background = accent.glow;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '';
                  e.currentTarget.style.background = '';
                }}
              >
                {/* Track number watermark */}
                <div
                  className="absolute top-4 right-6 text-7xl font-black opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none select-none"
                  style={{ color: accent.color }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Accent line top */}
                <div
                  className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: accent.color }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 flex items-center justify-center mb-6 border border-opacity-20"
                  style={{ borderColor: accent.color + '40', background: accent.glow }}
                >
                  <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" style={{ color: accent.color }} />
                </div>

                {/* Content */}
                <div className="relative z-10 flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-[#E6E1F0]">{track.title}</h3>
                  <p className="text-[#E6E1F0]/65 text-sm leading-relaxed mb-5">{track.description}</p>
                  <div
                    className="text-xs font-mono opacity-50 group-hover:opacity-80 transition-opacity border-l-2 pl-3"
                    style={{ borderColor: accent.color }}
                  >
                    {track.examples}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs font-mono text-[#E6E1F0]/30 mt-8 tracking-wide">
          TEAMS OF UP TO 4 • SOLO ENTRIES WELCOME • MENTORS AVAILABLE ALL 24 HOURS
        </p>
      </div>
    </section>
  );
};

export default Tracks;
