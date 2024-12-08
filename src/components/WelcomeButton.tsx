'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import Link from 'next/link';

interface WelcomeButtonProps {
  href: string;
  text?: string;
}

export default function WelcomeButton({ 
  href, 
  text = "Enter My World" 
}: WelcomeButtonProps) {
  return (
    <Link href={href}>
      <motion.div
        className="group relative overflow-hidden rounded-full p-[2px]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Animated border gradient */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 via-pink-500 to-purple-500"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <button className="relative rounded-full px-8 py-4 bg-black dark:bg-gray-900 
                         group-hover:bg-black/80 transition-colors duration-500">
          {/* Glass overlay */}
          <div className="absolute inset-0 rounded-full backdrop-blur-xl opacity-50" />

          {/* Content wrapper */}
          <div className="relative flex items-center justify-center gap-3">
            {/* Text with gradient */}
            <span className="text-lg font-medium bg-gradient-to-r from-white via-purple-200 to-white
                           bg-clip-text text-transparent transform group-hover:scale-105
                           transition-transform duration-500">
              {text}
            </span>

            {/* Icon group */}
            <div className="flex items-center gap-1">
              <motion.div
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <ArrowRight className="w-5 h-5 text-white" />
              </motion.div>
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Sparkles className="w-4 h-4 text-purple-300" />
              </motion.div>
            </div>
          </div>

          {/* Floating particles */}
          <AnimatePresence>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  opacity: 0,
                  scale: 0,
                  x: "50%",
                  y: "50%"
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: ["50%", `${Math.random() * 100}%`],
                  y: ["50%", `${Math.random() * 100}%`],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  repeatDelay: 1,
                }}
                className="absolute w-1 h-1"
              >
                <Star className="w-full h-full text-purple-300/60" strokeWidth={3} />
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Shine effect */}
          <div className="absolute inset-0 overflow-hidden rounded-full">
            <motion.div
              className="w-20 h-full bg-white/20 blur-xl absolute -rotate-12"
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />
          </div>
        </button>
      </motion.div>
    </Link>
  );
} 