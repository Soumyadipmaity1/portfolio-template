'use client';
import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface MotionWrapperProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
}

const MotionWrapper = ({ children }: MotionWrapperProps) => {
  return (
    <motion.div >
      {children}
    </motion.div>
  );
};

export default MotionWrapper; 