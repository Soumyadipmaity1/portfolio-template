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
      <div className="min-h-screen sm:pt-32 pt-24 px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 mb-4">
              About Me
            </h1>
            <p className="text-gray-400 text-lg">
              Passionate about AI and Machine Learning
            </p>
          </motion.div>

          <AboutSection />
        </div>
      </div>
    </>
  );
}
