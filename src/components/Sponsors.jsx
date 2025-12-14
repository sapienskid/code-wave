import React from 'react';
import { Download, Plus } from 'lucide-react';
import { siteConfig } from '../data/config';

const tierConfig = {
  title: {
    label: 'TITLE SPONSOR',
    sublabel: 'NPR 200,000+ • Limited to 1',
    borderColor: 'border-purple-500/40 hover:border-purple-500',
    bgHover: 'hover:bg-purple-500/5',
    textColor: 'text-purple-500',
    cols: 'grid-cols-1 max-w-2xl mx-auto',
    aspectRatio: 'aspect-[3/1]',
    logoHeight: 'max-h-32',
    iconSize: 'w-12 h-12',
    textSize: 'text-base'
  },
  diamond: {
    label: 'DIAMOND SPONSORS',
    sublabel: 'NPR 100,000–150,000 • Limited to 3',
    borderColor: 'border-cyan-400/40 hover:border-cyan-400',
    bgHover: 'hover:bg-cyan-400/5',
    textColor: 'text-cyan-400',
    cols: 'grid-cols-1 md:grid-cols-3',
    aspectRatio: 'aspect-video',
    logoHeight: 'max-h-16',
    iconSize: 'w-8 h-8',
    textSize: 'text-sm'
  },
  gold: {
    label: 'GOLD SPONSORS',
    sublabel: 'NPR 50,000–75,000',
    borderColor: 'border-yellow-500/30 hover:border-yellow-500',
    bgHover: 'hover:bg-yellow-500/5',
    textColor: 'text-yellow-500',
    cols: 'grid-cols-2 md:grid-cols-3',
    aspectRatio: 'aspect-video',
    logoHeight: 'max-h-12',
    iconSize: 'w-8 h-8',
    textSize: 'text-xs'
  },
  silver: {
    label: 'SILVER SPONSORS',
    sublabel: 'NPR 20,000–40,000',
    borderColor: 'border-gray-400/30 hover:border-gray-400',
    bgHover: 'hover:bg-gray-400/5',
    textColor: 'text-gray-400',
    cols: 'grid-cols-2 md:grid-cols-4',
    aspectRatio: 'aspect-video',
    logoHeight: 'max-h-10',
    iconSize: 'w-6 h-6',
    textSize: 'text-xs'
  },
  bronze: {
    label: 'BRONZE / IN-KIND',
    sublabel: 'NPR 10,000+ or equivalent',
    borderColor: 'border-orange-500/30 hover:border-orange-500',
    bgHover: 'hover:bg-orange-500/5',
    textColor: 'text-orange-500',
    cols: 'grid-cols-2 md:grid-cols-4',
    aspectRatio: 'aspect-video',
    logoHeight: 'max-h-10',
    iconSize: 'w-6 h-6',
    textSize: 'text-xs'
  }
};

const Sponsors = () => {
  // Group sponsors by tier
  const sponsorsByTier = {
    title: siteConfig.sponsors.filter(s => s.tier === 'title'),
    diamond: siteConfig.sponsors.filter(s => s.tier === 'diamond'),
    gold: siteConfig.sponsors.filter(s => s.tier === 'gold'),
    silver: siteConfig.sponsors.filter(s => s.tier === 'silver'),
    bronze: siteConfig.sponsors.filter(s => s.tier === 'bronze'),
  };

  const renderSponsorSlot = (sponsor, index, config) => {
    const Wrapper = sponsor.website ? 'a' : 'div';
    const wrapperProps = sponsor.website ? {
      href: sponsor.website,
      target: '_blank',
      rel: 'noopener noreferrer'
    } : {};

    return (
      <Wrapper
        key={index}
        {...wrapperProps}
        className={`${config.aspectRatio} border-2 ${config.borderColor} ${config.bgHover} transition-all duration-300 flex items-center justify-center group cursor-pointer`}
      >
        {sponsor.logo ? (
          <img src={sponsor.logo} alt={sponsor.name} className={`${config.logoHeight} w-auto`} />
        ) : (
          <div className="flex flex-col items-center gap-2 opacity-40 group-hover:opacity-80 transition-opacity">
            <Plus className={`${config.iconSize} ${config.textColor}`} />
            <span className={`${config.textSize} font-mono`}>{sponsor.name}</span>
          </div>
        )}
      </Wrapper>
    );
  };

  return (
    <section id="sponsors" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 border-2 border-[#E6E1F0]/20 p-12">
          <h2 className="text-5xl font-bold mb-4">
            Backed by <span className="text-[#8976FB]">Industry Leaders</span>
          </h2>
          <p className="text-lg opacity-60">Join us in shaping the future</p>
        </div>

        {/* Render each tier */}
        {Object.entries(sponsorsByTier).map(([tierKey, sponsors]) => {
          if (sponsors.length === 0) return null;
          const config = tierConfig[tierKey];
          
          return (
            <div key={tierKey} className="mb-12">
              <div className="text-center mb-6">
                <h3 className={`text-sm font-mono ${config.textColor} opacity-80`}>{config.label}</h3>
                <p className="text-xs opacity-50 mt-1">{config.sublabel}</p>
              </div>
              <div className={`grid ${config.cols} gap-6`}>
                {sponsors.map((sponsor, i) => renderSponsorSlot(sponsor, i, config))}
              </div>
            </div>
          );
        })}

        {/* Become a Sponsor CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm opacity-60 mb-4">Interested in sponsoring Infinity CodeWave 2026?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={siteConfig.sponsorshipBrochure}
              download
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#8976FB] text-white font-semibold hover:bg-[#8976FB]/80 transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Download Sponsorship Brochure
            </a>
            <a 
              href={`mailto:${siteConfig.organizer.email}?subject=Infinity CodeWave 2026 Sponsorship Inquiry`}
              className="inline-block px-8 py-3 border-2 border-[#8976FB] text-[#8976FB] font-semibold hover:bg-[#8976FB] hover:text-white transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
