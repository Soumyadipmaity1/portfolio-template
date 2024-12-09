'use client';
import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import SectionLayout from './SectionLayout';
import type { Certification } from './types';

const CertificationsSection = () => {
  const certifications: Certification[] = [
    {
      title: "Deep Learning Specialization",
      issuer: "Coursera - by Andrew Ng",
      date: "Apr 2024"
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google - verified on Coursera",
      date: "Jul 2024"
    },
    {
      title: "Machine Learning Specialization",
      issuer: "by Andrew Ng",
      date: "Apr 2023"
    }
  ];

  return (
    <SectionLayout delay={0.2}>
      <h2 className="text-2xl font-bold text-purple-400 flex items-center gap-2">
        <FiAward className="text-3xl" />
        Certifications
      </h2>

      <div className="grid gap-4 bg-white/5 mt-5 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all group"
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-200 group-hover:text-purple-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1">{cert.issuer}</p>
              </div>
              <span className="text-purple-400 text-sm bg-purple-500/10 px-3 py-1 rounded-full">
                {cert.date}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  );
};

export { CertificationsSection };
export default CertificationsSection; 