'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiExternalLink, FiAward, FiCode, FiCalendar } from 'react-icons/fi';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  achievements: string[];
  date: string;
  index: number;
}

const ProjectCard = ({ title, description, technologies, achievements, date, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const [startMonth, startYear, endMonth, endYear] = dateString.match(/([A-Za-z]+)\s+(\d{4})\s*-\s*([A-Za-z]+)\s+(\d{4})/)?.slice(1) || [];
    return `${startMonth.slice(0, 3)} ${startYear} - ${endMonth.slice(0, 3)} ${endYear}`;
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, delay: index * 0.1 }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.2 }
    },
    exit: { 
      opacity: 0, 
      y: 20,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="group relative h-[300px] bg-gradient-to-br from-purple-900/10 via-black/30 to-pink-900/10 rounded-xl hover:from-purple-900/20 hover:via-black/40 hover:to-pink-900/20 transition-all duration-500 border border-purple-500/10 backdrop-blur-sm overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Content */}
      <div className="p-6 h-full flex flex-col">
        {/* Header Section */}
        <div className="flex justify-between items-start gap-4 mb-4">
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            {title}
          </h3>
          <div className="flex items-center gap-1.5 px-3 py-1 bg-purple-500/10 rounded-full text-xs text-purple-300">
            <FiCalendar className="w-3.5 h-3.5" />
            <span>{formatDate(date)}</span>
          </div>
        </div>

        {/* Description Section */}
        <p className="text-sm text-gray-400 mb-4 line-clamp-2">
          {description}
        </p>

        {/* Technologies Preview */}
        <div className="flex items-center gap-3 mb-4">
          <FiCode className="text-purple-400 flex-shrink-0" />
          <div className="flex flex-wrap gap-1.5">
            {technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 bg-purple-500/10 rounded-full text-xs text-purple-300"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 3 && (
              <span className="px-2 py-0.5 bg-purple-500/10 rounded-full text-xs text-purple-300">
                +{technologies.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Achievement Preview */}
        <div className="mt-auto">
          <div className="flex items-start gap-2 text-xs text-gray-400">
            <FiAward className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
            <p className="line-clamp-2">{achievements[0]}</p>
          </div>
        </div>
      </div>

      {/* Hover Overlay */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 bg-gradient-to-b from-black/95 to-purple-900/95 p-6 flex flex-col backdrop-blur-sm"
          >
            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
              {/* Achievements Section */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-purple-300 mb-3 flex items-center gap-2">
                  <FiAward className="w-4 h-4" />
                  Key Achievements
                </h4>
                <ul className="space-y-2.5">
                  {achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-2 bg-purple-500/5 p-2.5 rounded-lg hover:bg-purple-500/10 transition-colors text-sm text-gray-400"
                    >
                      <span className="text-purple-400 mt-1">•</span>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Technologies Full List */}
              <div>
                <h4 className="text-sm font-medium text-purple-300 mb-2.5 flex items-center gap-2">
                  <FiCode className="w-4 h-4" />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="px-2.5 py-1 bg-purple-500/10 rounded-full text-xs text-purple-300 hover:bg-purple-500/20 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Button */}
            <motion.button
              className="mt-4 w-full px-4 py-2.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 text-purple-300 rounded-lg text-sm transition-all flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>View Project Details</span>
              <FiExternalLink className="group-hover:translate-x-0.5 transition-transform" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectCard; 