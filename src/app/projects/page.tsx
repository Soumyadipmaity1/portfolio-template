'use client';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import ProjectCard from '@/components/ProjectCard';
import { projectsData } from '@/components/projectsData';
import BackgroundAnimation from '@/components/BackgroundAnimation';

export default function Projects() {
  return (
    <>
      <BackgroundAnimation />
      <Navigation isOpen={true} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        // className="min-h-screen pt-24 sm:pt-32 px-6 pb-12"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            // className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 mb-4">
              My Projects
            </h1>
            <p className="text-gray-400 text-lg">
              Specializing in AI, Medical Imaging, and Deep Learning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                achievements={project.achievements}
                date={project.date}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}

