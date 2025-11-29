import React from 'react';
import { ChevronRight } from 'lucide-react';
import { siteConfig } from '../data/config';

const Register = () => {
  return (
    <section id="register" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="border-2 border-[#E6E1F0]/20 p-12 md:p-16 text-center">
          <h2 className="text-6xl font-bold mb-6">
            READY TO BUILD<br />
            <span className="text-[#d946ef]">THE FUTURE?</span>
          </h2>
          <p className="text-xl opacity-80 mb-4">Registration opens soon. Secure your spot and be part of Nepal's premier hackathon experience.</p>
          <p className="text-sm font-mono opacity-60 mb-12">Limited to 120 participants • Admission: {siteConfig.admission}</p>
          
          <a 
            href={siteConfig.registrationLink}
            className="inline-block group relative px-16 py-6 bg-[#d946ef] text-xl font-bold hover:scale-105 hover:shadow-2xl hover:shadow-[#d946ef]/50 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-3">
              REGISTER NOW
              <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Register;
