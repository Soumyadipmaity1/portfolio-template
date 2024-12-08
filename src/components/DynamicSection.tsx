'use client';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Loading component
const LoadingPlaceholder = () => (
  <div className="animate-pulse bg-white/5 h-40 rounded-xl" />
);

// Dynamic imports with proper error boundaries
const SkillsSection = dynamic(() => import('./SkillsSection').then(mod => mod.default), {
  loading: () => <LoadingPlaceholder />,
  ssr: false
});

const CertificationsSection = dynamic(() => import('./CertificationsSection').then(mod => mod.default), {
  loading: () => <LoadingPlaceholder />,
  ssr: false
});

const ExtraCurricularSection = dynamic(() => import('./ExtraCurricularSection').then(mod => mod.default), {
  loading: () => <LoadingPlaceholder />,
  ssr: false
});

const DynamicSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="space-y-16"
    >
      <Suspense fallback={<LoadingPlaceholder />}>
        <div className="space-y-16">
          <SkillsSection />
          <CertificationsSection />
          <ExtraCurricularSection />
        </div>
      </Suspense>
    </motion.div>
  );
};

export default DynamicSection; 