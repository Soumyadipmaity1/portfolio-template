'use client';
import { FiStar, FiAward, FiTarget } from 'react-icons/fi';
import { motion } from 'framer-motion';
import type { Activity } from './types';

// Define motion components with proper typing
const MotionSection = motion.section;
const MotionArticle = motion.article;

const ExtraCurricularSection = () => {
  const activities: Activity[] = [
    {
      icon: <FiAward />,
      title: "Basketball Team Captain",
      organization: "KIIT",
      date: "Nov 2023",
      highlight: "Leadership & Sports"
    },
    {
      icon: <FiAward />,
      title: "2nd Place",
      organization: "Ravenshaw Inter-University Tournament",
      highlight: "Sports Achievement"
    },
    {
      icon: <FiTarget />,
      title: "Top 30 Finalist",
      organization: "Smart India Hackathon",
      highlight: "Technical Achievement"
    },
    {
      icon: <FiStar />,
      title: "Technical Blogger",
      organization: "AI and ML topics",
      highlight: "Content Creation"
    },
    {
      icon: <FiAward />,
      title: "Games Captain",
      organization: "School",
      date: "2018-2020",
      highlight: "Leadership"
    }
  ];

  return (
    <MotionSection className="space-y-8">
      <h2 className="text-2xl font-bold text-purple-400 flex items-center gap-2">
        <FiStar className="text-3xl" />
        Extra-Curricular Activities
      </h2>

      <div className="grid gap-6">
        {activities.map((activity, index) => (
          <MotionArticle
            key={activity.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="text-2xl text-purple-400 mt-1">
                {activity.icon}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-gray-200 group-hover:text-purple-400 transition-colors">
                    {activity.title}
                  </h3>
                  {activity.date && (
                    <span className="text-purple-400 text-sm bg-purple-500/10 px-3 py-1 rounded-full">
                      {activity.date}
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm mt-1">{activity.organization}</p>
                <span className="inline-block mt-2 text-xs text-purple-300 bg-purple-500/10 px-2 py-1 rounded-full">
                  {activity.highlight}
                </span>
              </div>
            </div>
          </MotionArticle>
        ))}
      </div>
    </MotionSection>
  );
};

export default ExtraCurricularSection; 