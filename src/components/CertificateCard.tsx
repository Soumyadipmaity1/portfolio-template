'use client';
import { motion } from 'framer-motion';
import { FiExternalLink, FiAward, FiCalendar } from 'react-icons/fi';

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  link: string;
  index: number;
}

const CertificateCard = ({ title, issuer, date, link, index }: CertificateCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 
                    bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-all duration-300
                    hover:shadow-lg hover:shadow-purple-500/10">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <FiAward className="text-purple-400 flex-shrink-0" />
            <h3 className="font-medium text-purple-300">{title}</h3>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <p>{issuer}</p>
            <div className="flex items-center gap-1.5 text-purple-300/80">
              <FiCalendar className="w-3.5 h-3.5" />
              <span>{date}</span>
            </div>
          </div>
        </div>

        {/* View Certificate Button */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 
                   hover:bg-purple-500/20 rounded-full transition-all duration-300 
                   group hover:-translate-y-0.5 text-sm whitespace-nowrap"
        >
          <span className="text-purple-300">View Certificate</span>
          <FiExternalLink className="w-4 h-4 text-purple-400 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
};

export default CertificateCard; 