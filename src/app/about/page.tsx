'use client';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import BackgroundAnimation from '@/components/BackgroundAnimation';

export default function About() {
  return (
    <>
      <BackgroundAnimation />
      <Navigation isOpen={true} />
      <div className="min-h-screen sm:pt-32 pt-14 px-6 sm:pb-0">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl text-center sm:text-start font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 mb-2">
              About Me
            </h1>
            <p className="text-gray-400 my-2 mb-4 text-lg">
              Passionate about AI and Machine Learning
            </p>
          </motion.div>

          <AboutSection />
        </div>
      </div>
    </>
  );
}
