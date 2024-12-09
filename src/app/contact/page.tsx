'use client';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import ContactGrid from '@/components/ContactGrid';
import BackgroundAnimation from '@/components/BackgroundAnimation';

export default function Contact() {
  return (
    <>
      <BackgroundAnimation />
      <Navigation isOpen={true} />
      <div className="min-h-screen pt-14 sm:pt-32 px-6 sm:pb-12 pb-28">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            // className="text-center mb-16"
          >
            <h1 className="text-4xl text-center sm:text-start md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 mb-4">
              Get in Touch
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl pb-10 text-center sm:text-left">
              Feel free to reach out to me through any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </motion.div>

          <ContactGrid />

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            // className="mt-16 text-center"
          >
            <p className="text-gray-400 mt-10">
              Currently based in{' '}
              <span className="text-purple-400">Bhubaneswar, India</span>
            </p>
            <p className="text-yellow-400 mt-2 font-bold text-lg">
              Available for AI/ML projects and collaborations
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}

