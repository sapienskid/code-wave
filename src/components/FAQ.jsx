import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { siteConfig } from '../data/config';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold mb-4">
            Frequently Asked <span className="text-[#8976FB]">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {siteConfig.faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-2 border-[#E6E1F0]/20 overflow-hidden transition-all duration-300 hover:border-[#8976FB]/50"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between bg-[#E6E1F0]/5 hover:bg-[#E6E1F0]/10 transition-colors text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#8976FB]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#8976FB]" />
                )}
              </button>
              <div 
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
                }`}
              >
                <p className="opacity-80">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
