'use client';
import React from 'react'
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiAward } from 'react-icons/fi';
import { PiGraduationCap } from 'react-icons/pi';
import dynamic from 'next/dynamic';

// Dynamic imports with loading states
const ExtraCurricularSection = dynamic(() => import('./ExtraCurricularSection'), {
  loading: () => <div className="animate-pulse bg-white/5 h-40 rounded-xl" />
});

const SkillsSection = dynamic(() => import('./SkillsSection'), {
  loading: () => <div className="animate-pulse bg-white/5 h-40 rounded-xl" />
});

const CertificationsSection = dynamic(() => import('./CertificationsSection'), {
  loading: () => <div className="animate-pulse bg-white/5 h-40 rounded-xl" />
});

const AboutSection = () => {
  const contactInfo = [
    { icon: <FiMail />, text: 'ritikabanerjee444@gmail.com', link: 'mailto:ritikabanerjee444@gmail.com' },
    { icon: <FiPhone />, text: '+91-9674043143', link: 'tel:+919674043143' },
    { icon: <FiGithub />, text: 'github.com/ritika-banerjee', link: 'https://github.com/ritika-banerjee' },
    { icon: <FiLinkedin />, text: 'linkedin.com/in/ritika-banerjee', link: 'https://www.linkedin.com/in/ritika-banerjee/' },
  ];

  return (
    <section id="about" className="py-20 px-4">
      
      <div 
        className="flex items-center gap-6 animate-fadeIn"
      >
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-4xl font-bold text-white">
          R
        </div>
        <div>
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Ritika Banerjee
          </h2>
          <p className="text-gray-400 mt-1">AI/ML Enthusiast & Computer Science Student</p>
        </div>
      </div>

      {/* Contact Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {contactInfo.map((info, index) => (
          <a
            key={index}
            href={info.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
          >
            <span className="text-purple-400 text-xl group-hover:text-purple-300 transition-colors">
              {info.icon}
            </span>
            <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
              {info.text}
            </span>
          </a>
        ))}
      </div>

      {/* Education Section */}
      <div
        className="space-y-4"
      >
        <div className="flex items-center gap-2 text-xl font-semibold text-purple-300">
          <PiGraduationCap className="text-2xl" />
          <h3>Education</h3>
        </div>
        <div className="bg-white/5 rounded-xl p-6 space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-semibold text-gray-200">
                Bachelor of Technology in Computer Science Engineering
              </h4>
              <p className="text-gray-400 mt-1">
                Kalinga Institute of Industrial Technology, Bhubaneswar
              </p>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-purple-500/10 rounded-full">
              <FiAward className="text-purple-400" />
              <span className="text-purple-300 text-sm">CGPA: 8.8/10.0</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span className="px-3 py-1 bg-purple-500/10 rounded-full text-purple-300">
              2022 - 2026 (Expected)
            </span>
          </div>
        </div>
      </div>

      {/* Skills and Other Sections */}
      <div className="space-y-16">
        <SkillsSection />
        <CertificationsSection />
        <ExtraCurricularSection />
      </div>
    </section>
  );
};

export default AboutSection;
