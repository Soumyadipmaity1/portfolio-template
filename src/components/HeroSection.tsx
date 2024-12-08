'use client';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative flex flex-col items-center justify-center min-h-screen"
    >
      {/* Glowing circle behind the content */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"
      />

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center relative z-10"
      >
        <motion.div
          className="mb-4 text-sm font-mono text-purple-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Welcome to my portfolio
        </motion.div>
        
        <motion.h1 
          className="text-5xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 pb-2"
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
        className="mt-12 flex gap-6 relative z-10"
      >
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: '#7C3AED' }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition shadow-lg shadow-purple-500/20"
        >
          View Projects
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(147, 51, 234, 0.1)' }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 border border-purple-500 text-purple-500 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 transition shadow-lg shadow-purple-500/10"
        >
          Contact Me
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection; 