'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const SocialLinks = () => {
  const links = [
    {
      href: "https://github.com/ritika-banerjee",
      icon: <FaGithub className="w-6 h-6" />,
      label: "GitHub"
    },
    {
      href: "https://www.linkedin.com/in/ritika-banerjee/",
      icon: <FaLinkedin className="w-6 h-6" />,
      label: "LinkedIn"
    },
    {
      href: "mailto:ritikabanerjee444@gmail.com",
      icon: <FaEnvelope className="w-6 h-6" />,
      label: "Email"
    }
  ];

  return (
    <div className="flex gap-4">
      {links.map((link, index) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ 
              type: "spring",
              stiffness: 400,
              damping: 10,
              delay: 0.4 + index * 0.1 
            }}
            style={{ display: 'inline-block' }}
          >
            {link.icon}
          </motion.div>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks; 