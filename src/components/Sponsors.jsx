import React from 'react';
import { siteConfig } from '../data/config';

const Sponsors = () => {
  // Group sponsors by tier
  const sponsorsByTier = {
    Platinum: siteConfig.sponsors.filter(s => s.tier === 'Platinum'),
    Gold: siteConfig.sponsors.filter(s => s.tier === 'Gold'),
    Silver: siteConfig.sponsors.filter(s => s.tier === 'Silver'),
    Bronze: siteConfig.sponsors.filter(s => s.tier === 'Bronze'),
  };

  return (
    <section id="sponsors" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 border-2 border-[#E6E1F0]/20 p-12">
          <h2 className="text-5xl font-bold mb-4">
            Backed by <span className="text-[#d946ef]">Industry Leaders</span>
          </h2>
          <p className="text-lg opacity-60">Join us in shaping the future</p>
        </div>

        {/* Platinum Sponsors */}
        {sponsorsByTier.Platinum.length > 0 && (
          <div className="mb-12">
            <h3 className="text-center text-sm font-mono text-[#d946ef] mb-6 opacity-80">PLATINUM SPONSORS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sponsorsByTier.Platinum.map((sponsor, i) => (
                <div
                  key={i}
                  className="aspect-video border-2 border-[#d946ef]/40 hover:border-[#d946ef] hover:bg-[#d946ef]/5 transition-all duration-300 flex items-center justify-center group"
                >
                  <span className="text-sm font-mono opacity-40 group-hover:opacity-100 transition-opacity">{sponsor.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gold Sponsors */}
        {sponsorsByTier.Gold.length > 0 && (
          <div className="mb-12">
            <h3 className="text-center text-sm font-mono text-yellow-500 mb-6 opacity-80">GOLD SPONSORS</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {sponsorsByTier.Gold.map((sponsor, i) => (
                <div
                  key={i}
                  className="aspect-video border-2 border-yellow-500/30 hover:border-yellow-500 hover:bg-yellow-500/5 transition-all duration-300 flex items-center justify-center group"
                >
                  <span className="text-xs font-mono opacity-40 group-hover:opacity-100 transition-opacity">{sponsor.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Silver & Bronze Sponsors */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[...sponsorsByTier.Silver, ...sponsorsByTier.Bronze].map((sponsor, i) => (
            <div
              key={i}
              className="aspect-video border-2 border-[#E6E1F0]/20 hover:border-[#d946ef] hover:bg-[#d946ef]/5 transition-all duration-300 flex items-center justify-center group"
            >
              <span className="text-xs font-mono opacity-40 group-hover:opacity-100 transition-opacity">{sponsor.name}</span>
            </div>
          ))}
        </div>

        {/* Become a Sponsor CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm opacity-60 mb-4">Interested in sponsoring CodeWave 3.0?</p>
          <a 
            href={`mailto:${siteConfig.organizer.email}?subject=CodeWave 3.0 Sponsorship Inquiry`}
            className="inline-block px-8 py-3 border-2 border-[#d946ef] text-[#d946ef] font-semibold hover:bg-[#d946ef] hover:text-white transition-all duration-300"
          >
            Become a Sponsor
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
