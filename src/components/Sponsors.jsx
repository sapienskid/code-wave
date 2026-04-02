import React from 'react';
import { Download, Plus, ExternalLink } from 'lucide-react';
import { siteConfig } from '../data/config';

const tierConfig = {
  title: {
    label: 'TITLE SPONSOR',
    borderColor: '#a855f7',
    textColor: 'text-purple-400',
    cols: 'grid-cols-1 max-w-2xl mx-auto',
    aspectRatio: 'aspect-[3/1]',
    logoHeight: 'max-h-32',
    iconSize: 'w-12 h-12',
    textSize: 'text-base'
  },
  platinum: {
    label: 'PLATINUM SPONSORS',
    borderColor: '#8976FB',
    textColor: 'text-[#8976FB]',
    cols: 'grid-cols-1 md:grid-cols-3',
    aspectRatio: 'aspect-video',
    logoHeight: 'max-h-16',
    iconSize: 'w-8 h-8',
    textSize: 'text-sm'
  },
  gold: {
    label: 'GOLD SPONSORS',
    borderColor: '#eab308',
    textColor: 'text-yellow-500',
    cols: 'grid-cols-2 md:grid-cols-3',
    aspectRatio: 'aspect-video',
    logoHeight: 'max-h-12',
    iconSize: 'w-8 h-8',
    textSize: 'text-xs'
  },
  silver: {
    label: 'SILVER SPONSORS',
    borderColor: '#9ca3af',
    textColor: 'text-gray-400',
    cols: 'grid-cols-2 md:grid-cols-4',
    aspectRatio: 'aspect-video',
    logoHeight: 'max-h-10',
    iconSize: 'w-6 h-6',
    textSize: 'text-xs'
  },
  bronze: {
    label: 'BRONZE / IN-KIND',
    borderColor: '#f97316',
    textColor: 'text-orange-500',
    cols: 'grid-cols-2 md:grid-cols-4',
    aspectRatio: 'aspect-video',
    logoHeight: 'max-h-10',
    iconSize: 'w-6 h-6',
    textSize: 'text-xs'
  }
};


const Sponsors = () => {
  const sponsorsByTier = {
    title: siteConfig.sponsors.filter(s => s.tier === 'title'),
    platinum: siteConfig.sponsors.filter(s => s.tier === 'platinum'),
    gold: siteConfig.sponsors.filter(s => s.tier === 'gold'),
    silver: siteConfig.sponsors.filter(s => s.tier === 'silver'),
    bronze: siteConfig.sponsors.filter(s => s.tier === 'bronze'),
  };

  const renderSponsorSlot = (sponsor, index, config) => {
    const Wrapper = sponsor.website ? 'a' : 'div';
    const wrapperProps = sponsor.website ? {
      href: sponsor.website, target: '_blank', rel: 'noopener noreferrer'
    } : {};

    return (
      <Wrapper
        key={index}
        {...wrapperProps}
        className={`${config.aspectRatio} border transition-all duration-300 flex items-center justify-center group cursor-pointer`}
        style={{ borderColor: config.borderColor + '25' }}
        onMouseEnter={e => e.currentTarget.style.borderColor = config.borderColor + '80'}
        onMouseLeave={e => e.currentTarget.style.borderColor = config.borderColor + '25'}
      >
        {sponsor.logo ? (
          <img src={sponsor.logo} alt={sponsor.name} className={`${config.logoHeight} w-auto`}  />
        ) : (
          <div className="flex flex-col items-center gap-2 opacity-30 group-hover:opacity-60 transition-opacity">
            <Plus className={`${config.iconSize}`} style={{ color: config.borderColor }} />
            <span className={`${config.textSize} font-mono text-[#E6E1F0]/60`}>{sponsor.name}</span>
          </div>
        )}
      </Wrapper>
    );
  };

  return (
    <section id="sponsors" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-mono text-[#8976FB] tracking-widest mb-3 opacity-80">PARTNERS & SPONSORS</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E6E1F0]/10 pb-12">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight">
              Backed by<br />
              <span className="text-[#8976FB]">Industry Leaders</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={siteConfig.sponsorshipBrochure}
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#8976FB] text-white font-bold text-sm hover:bg-[#8976FB]/80 transition-all"
              >
                <Download className="w-4 h-4" />
                Sponsorship Brochure
              </a>
              <a
                href={`mailto:${siteConfig.organizer.email}?subject=Infinity CodeWave 2026 Sponsorship`}
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#8976FB] text-[#8976FB] font-bold text-sm hover:bg-[#8976FB] hover:text-white transition-all"
              >
                Become a Sponsor
              </a>
            </div>
          </div>
        </div>

        {/* Tech Partners */}
        <TechPartners />

        {/* Sponsor tiers */}
        {Object.entries(sponsorsByTier).map(([tierKey, sponsors]) => {
          if (sponsors.length === 0) return null;
          const config = tierConfig[tierKey];
          return (
            <div key={tierKey} className="mb-10">
              <div className="text-center mb-5">
                <h3 className={`text-xs font-mono ${config.textColor} opacity-80 tracking-widest`}>{config.label}</h3>

              </div>
              <div className={`grid ${config.cols} gap-4`}>
                {sponsors.map((sponsor, i) => renderSponsorSlot(sponsor, i, config))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Sponsors;
