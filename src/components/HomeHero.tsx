'use client';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import WelcomeButton from './WelcomeButton';
import SocialLinks from './SocialLinks';

const HomeHero = () => {
  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center relative z-10 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <motion.div 
          className="text-sm font-mono text-purple-400 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Hello, I&apos;m
        </motion.div>
        <motion.h1 
          className="text-5xl sm:text-7xl font-bold bg-clip-text text-transparent 
                     bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 mb-4"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Ritika Banerjee
        </motion.h1>
        
        <div className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-mono h-20">
          <TypeAnimation
            sequence={[
              'AI/ML Engineer',
              1000,
              'Deep Learning Specialist',
              1000,
              'Computer Vision Expert',
              1000,
              'Technical Blogger',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="inline-block"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col items-center gap-6 mt-8"
      >
        <WelcomeButton href="/about" />
        <SocialLinks />
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t 
                   from-purple-500/5 to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />
    </motion.div>
  );
};

export default HomeHero; 