'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import ProfileCard from './ProfileCard';
import ContactGrid from './ContactGrid';
import EducationSection from './EducationSection';

const ExtraCurricularSection = dynamic(() => import('../ExtraCurricularSection'), {
  loading: () => <div className="animate-pulse bg-white/5 h-40 rounded-xl" />
});

const SkillsSection = dynamic(() => import('../SkillsSection'), {
  loading: () => <div className="animate-pulse bg-white/5 h-40 rounded-xl" />
});

const CertificationsSection = dynamic(() => import('../CertificationsSection'), {
  loading: () => <div className="animate-pulse bg-white/5 h-40 rounded-xl" />
});

const AboutSection = () => {
  return (
    <section id="about" className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Profile and Contact Section */}
        <div className="space-y-8">
          <ProfileCard />
          <ContactGrid />
        </div>

        {/* Education Section */}
        <EducationSection />
        
        {/* Dynamic Sections */}
        <div className="space-y-16">
          <SkillsSection />
          <CertificationsSection />
          <ExtraCurricularSection />
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 