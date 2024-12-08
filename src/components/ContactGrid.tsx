'use client';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';

const ContactGrid = () => {
  const contactInfo = [
    {
      icon: <FiMail className="w-8 h-8" />,
      title: 'Email',
      value: 'ritikabanerjee444@gmail.com',
      link: 'mailto:ritikabanerjee444@gmail.com',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FiPhone className="w-8 h-8" />,
      title: 'Phone',
      value: '+91-9674043143',
      link: 'tel:+919674043143',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: <FiGithub className="w-8 h-8" />,
      title: 'GitHub',
      value: 'github.com/ritika-banerjee',
      link: 'https://github.com/ritika-banerjee',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: <FiLinkedin className="w-8 h-8" />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/ritika-banerjee',
      link: 'https://www.linkedin.com/in/ritika-banerjee/',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {contactInfo.map((info, index) => (
        <a
          key={index}
          href={info.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98]"
        >
          {/* Background Gradient */}
          <div className={`absolute inset-0 opacity-0 bg-gradient-to-br ${info.color} group-hover:opacity-5 transition-opacity duration-500`} />
          
          {/* Icon */}
          <div className="mb-4">
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${info.color} p-4 text-white shadow-lg`}>
              {info.icon}
            </div>
          </div>

          {/* Content */}
          <h3 className="mb-2 text-xl font-semibold text-gray-200">
            {info.title}
          </h3>
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
            {info.value}
          </p>

          {/* Hover Indicator */}
          <div className="absolute bottom-4 right-4 text-purple-400 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <FiSend className="w-5 h-5" />
          </div>
        </a>
      ))}
    </div>
  );
};

export default ContactGrid; 