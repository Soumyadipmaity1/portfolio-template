'use client';
import { ReactNode } from 'react';
import MotionWrapper from './MotionWrapper';

interface SectionLayoutProps {
  children: ReactNode;
  delay?: number;
}

const SectionLayout = ({ children, delay = 0 }: SectionLayoutProps) => {
  return (
    <MotionWrapper
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-white/5 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all"
    >
      {children}
    </MotionWrapper>
  );
};

export default SectionLayout; 