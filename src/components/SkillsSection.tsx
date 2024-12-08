'use client';
import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiDatabase, FiTool, FiCloud, FiMonitor } from 'react-icons/fi';
import type { SkillCategory } from './types';

const SkillsSection: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      icon: <FiCode />,
      title: "Programming Languages",
      skills: [
        { name: "Python", level: "Advanced" },
        { name: "C++", level: "Intermediate" }
      ]
    },
    {
      icon: <FiCpu />,
      title: "Machine Learning & Deep Learning",
      skills: ["Scikit-learn", "TensorFlow", "Keras", "PyTorch", "CNNs", "Transfer Learning", "NLP"]
    },
    {
      icon: <FiDatabase />,
      title: "Data Science & Visualization",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "OpenCV"]
    },
    {
      icon: <FiTool />,
      title: "Tools & Frameworks",
      skills: ["Git", "Jupyter", "Google Colab", "Streamlit"]
    },
    {
      icon: <FiCloud />,
      title: "Cloud Platforms",
      skills: [{ name: "AWS", level: "Basic" }]
    },
    {
      icon: <FiMonitor />,
      title: "Operating Systems",
      skills: ["Windows", "Linux"]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <h2 className="text-2xl font-bold text-purple-400 flex items-center gap-2">
        <FiCode className="text-3xl" />
        Technical Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4 text-purple-400">
              <span className="text-xl">{category.icon}</span>
              <h3 className="font-semibold">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {Array.isArray(category.skills) ? (
                category.skills.map((skill) => (
                  <span
                    key={typeof skill === 'string' ? skill : skill.name}
                    className="px-3 py-1 bg-purple-500/10 rounded-full text-sm text-purple-300"
                  >
                    {typeof skill === 'string' ? skill : `${skill.name} (${skill.level})`}
                  </span>
                ))
              ) : null}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsSection; 