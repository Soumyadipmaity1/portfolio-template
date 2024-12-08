'use client';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}
    >
      {/* Glowing circle behind the content */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          background: 'rgba(168, 85, 247, 0.1)',
          borderRadius: '9999px',
          filter: 'blur(64px)'
        }}
      />

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}
      >
        <motion.div
          style={{ marginBottom: '1rem', fontSize: '0.875rem', fontFamily: 'monospace', color: '#A855F7' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Welcome to my portfolio
        </motion.div>
        <motion.h1 
          style={{
            fontSize: "3rem",
            fontWeight: "bold", 
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            backgroundImage: "linear-gradient(to right, #A855F7, #06B6D4, #A855F7)",
            paddingBottom: "0.5rem",
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          John Doe
        </motion.h1>

        <div className="mt-4 text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-mono">
          <TypeAnimation
            sequence={[
              'AI Engineer',
              1000,
              'Full Stack Developer',
              1000,
              'UI/UX Designer',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="border-r-2 border-purple-500"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem', position: 'relative', zIndex: 10 }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: '2rem 1rem',
            backgroundColor: '#9333EA',
            color: 'white',
            borderRadius: '0.75rem',
            boxShadow: '0 10px 15px -3px rgba(147, 51, 234, 0.2)',
            transition: 'all 0.2s'
          }}
        >
          View Projects
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: '2rem 1rem',
            border: '1px solid #9333EA',
            color: '#9333EA', 
            borderRadius: '0.75rem',
            boxShadow: '0 10px 15px -3px rgba(147, 51, 234, 0.1)',
            transition: 'all 0.2s'
          }}
        >
          Contact Me
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection; 