import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { siteConfig } from '../data/config';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="relative py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <p className="text-xs font-mono text-[#8976FB] tracking-widest mb-3 opacity-80">QUESTIONS</p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight">
            Got Questions?<br />
            <span className="text-[#8976FB]">We've Got Answers.</span>
          </h2>
        </div>

        <div className="space-y-0 border-t border-[#E6E1F0]/10">
          {siteConfig.faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-[#E6E1F0]/10 group"
            >
              <button
                className="w-full py-5 flex items-center justify-between gap-4 text-left hover:text-[#8976FB] transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`text-base font-semibold transition-colors duration-200 ${openIndex === index ? 'text-[#8976FB]' : 'text-[#E6E1F0]'}`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-6 h-6 border flex items-center justify-center transition-all duration-300 ${
                  openIndex === index ? 'border-[#8976FB] bg-[#8976FB]' : 'border-[#E6E1F0]/20 group-hover:border-[#8976FB]/50'
                }`}>
                  {openIndex === index
                    ? <Minus className="w-3 h-3 text-white" />
                    : <Plus className="w-3 h-3 text-[#E6E1F0]/50" />
                  }
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-48 pb-5' : 'max-h-0'
              }`}>
                <p className="text-[#E6E1F0]/60 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 border border-[#E6E1F0]/10 bg-[#8976FB]/5">
          <p className="text-sm text-[#E6E1F0]/60">
            Still have questions?{' '}
            <a href={`mailto:${siteConfig.organizer.email}`} className="text-[#8976FB] hover:underline font-medium">
              Email us at {siteConfig.organizer.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
