'use client';
import { motion } from 'framer-motion';

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  index: number;
}

const CertificateCard = ({ title, issuer, date, index }: CertificateCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      // className="flex items-center gap-4 bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-all duration-300"
    >
      <div       className="flex items-center gap-4 bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-all duration-300"
      >
        <h3 className="font-medium text-purple-300">{title}</h3>
        <p className="text-sm text-gray-400">{issuer}</p>
      </div>
      <div className="text-sm text-purple-400">{date}</div>
    </motion.div>
  );
};

export default CertificateCard; 