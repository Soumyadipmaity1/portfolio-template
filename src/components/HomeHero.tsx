'use client';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import WelcomeButton from './WelcomeButton';
import SocialLinks from './SocialLinks';

const HomeHero = () => {
  return (
    <motion.div 
      style={{
        minHeight: "100vh",
        display: "flex", 
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        zIndex: 10,
        padding: "0 1rem"
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ textAlign: 'center' }}
      >
        <motion.div 
          style={{ fontSize: '0.875rem', fontFamily: 'monospace', color: '#A78BFA', marginBottom: '1rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Hello, I&apos;m
        </motion.div>
        <motion.h1 
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            backgroundImage: 'linear-gradient(to right, #A855F7, #EC4899, #F43F5E)',
            marginBottom: '1rem'
          }}
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
        style={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
          marginTop: '2rem'
        }}
      >
        <WelcomeButton href="/about" />
        <SocialLinks />
      </motion.div>
      <motion.div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '6rem',
          background: 'linear-gradient(to top, rgba(168, 85, 247, 0.05), transparent)',
          pointerEvents: 'none'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />
    </motion.div>
  );
};

export default HomeHero; 