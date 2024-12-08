import React from 'react';
import { FiMail, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi';

const contactInfo = [
  { icon: <FiMail />, text: 'ritikabanerjee444@gmail.com', link: 'mailto:ritikabanerjee444@gmail.com' },
  { icon: <FiPhone />, text: '+91-9674043143', link: 'tel:+919674043143' },
  { icon: <FiGithub />, text: 'github.com/ritika-banerjee', link: 'https://github.com/ritika-banerjee' },
  { icon: <FiLinkedin />, text: 'linkedin.com/in/ritika-banerjee', link: 'https://www.linkedin.com/in/ritika-banerjee/' },
];

const ContactGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {contactInfo.map((info, index) => (
        <a
          key={index}
          href={info.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 
                   transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10"
        >
          <span className="text-purple-400 text-xl group-hover:text-purple-300 transition-colors">
            {info.icon}
          </span>
          <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
            {info.text}
          </span>
        </a>
      ))}
    </div>
  );
};

export default ContactGrid; 