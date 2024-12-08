'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import Link from 'next/link';

interface WelcomeButtonProps {
  href: string;
  text?: string;
}

export default function WelcomeButton({ href, text = "Enter My World" }: WelcomeButtonProps) {
  return (
    <Link href={href}>
      <div className="group relative overflow-hidden rounded-full p-[2px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{ height: '100%' }}
        >
          {/* Animated border gradient */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 via-pink-500 to-purple-500">
            <motion.div
              style={{ 
                width: '100%', 
                height: '100%',
                background: 'linear-gradient(to right, rgb(124, 58, 237), rgb(219, 39, 119), rgb(124, 58, 237))'
              }}
              animate={{ 
                rotate: [0, 360],
                background: [
                  'linear-gradient(to right, rgb(124, 58, 237), rgb(219, 39, 119), rgb(124, 58, 237))',
                  'linear-gradient(to right, rgb(219, 39, 119), rgb(124, 58, 237), rgb(219, 39, 119))'
                ]
              }}
              transition={{
                rotate: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                },
                background: {
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
            />
          </div>

          <button className="relative rounded-full px-10 py-5 bg-black/90 dark:bg-gray-900/90 
                         group-hover:bg-black/70 dark:group-hover:bg-gray-900/70 transition-all duration-500">
            {/* Glass overlay with enhanced blur */}
            <div className="absolute inset-0 rounded-full backdrop-blur-2xl opacity-50 
                          bg-gradient-to-b from-white/10 to-white/5 dark:from-white/5 dark:to-white/0" />

            {/* Content wrapper */}
            <div className="relative flex items-center justify-center gap-4">
              {/* Text with enhanced gradient */}
              <div className="text-lg font-medium bg-gradient-to-r from-white via-purple-200 to-white
                           bg-clip-text text-transparent transform transition-all duration-500">
                <motion.div
                  style={{ 
                    backgroundSize: '200% auto',
                    width: '100%',
                    height: '100%'
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  {text}
                </motion.div>
              </div>

              {/* Icon group with enhanced animations */}
              <div className="flex items-center gap-2">
                <div className="text-white/90">
                  <motion.div
                    animate={{ 
                      x: [0, 5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    style={{ display: 'inline-block' }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </div>
                <div className="text-purple-300/90">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.3, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    style={{ display: 'inline-block' }}
                  >
                    <Sparkles className="w-4 h-4" />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Enhanced floating particles */}
            <AnimatePresence>
              {[...Array(8)].map((_, i) => (
                <div key={i} className="absolute w-1 h-1">
                  <motion.div
                    initial={{ 
                      opacity: 0,
                      scale: 0,
                      x: "50%",
                      y: "50%"
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                      x: ["50%", `${Math.random() * 150 - 25}%`],
                      y: ["50%", `${Math.random() * 150 - 25}%`]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: i * 0.15,
                      repeatDelay: Math.random() * 2
                    }}
                    style={{ width: '100%', height: '100%' }}
                  >
                    <Star className="w-full h-full text-purple-300/40" strokeWidth={3} />
                  </motion.div>
                </div>
              ))}
            </AnimatePresence>

            {/* Enhanced shine effect */}
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <div className="w-32 h-full blur-2xl absolute -rotate-12 bg-gradient-to-r from-white/0 via-white/40 to-white/0">
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut"
                  }}
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>
          </button>
        </motion.div>
      </div>
    </Link>
  );
} 