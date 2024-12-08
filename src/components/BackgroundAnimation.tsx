'use client';
import { motion } from 'framer-motion';

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden bg-black">
      {/* Primary gradient */}
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-blue-500/20 blur-3xl"
      />
      
      {/* Animated orbs */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0.1,
              x: Math.random() * 100,
              y: Math.random() * 100,
              scale: 1
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 2,
            }}
            // className="absolute w-72 h-72 rounded-full"
            style={{
              background: `radial-gradient(circle at center, rgba(147, 51, 234, 0.3) 0%, rgba(147, 51, 234, 0) 70%)`,
              left: `${i * 20}%`,
              top: `${i * 15}%`,
              filter: 'blur(40px)',
            }}
          />
        ))}
      </div>

      {/* Cyberpunk grid */}
      <div 
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(147, 51, 234, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'top',
        }}
      />
    </div>
  );
};

export default BackgroundAnimation; 