'use client';
import { FiAward } from 'react-icons/fi';
import CertificateCard from './CertificateCard';

const certificates = [
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI & Stanford",
    date: "Aug 2023",
    link: "https://coursera.org/share/3657f6a7f2e7741e31adc5b77a46f56a"
  },
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "Sep 2023",
    link: "https://coursera.org/share/e1a457c64412b8e51cf3800bbe183208"
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Google - verified on Coursera",
    date: "Jul 2024",
    link: "https://coursera.org/share/bb476f5c70196cebe77ef2e87d61a872"
  },
];

const CertificationsSection = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-2xl font-semibold text-purple-300">
        <FiAward className="text-3xl" />
        <h2>Certifications</h2>
      </div>
      
      <div className="space-y-4">
        {certificates.map((cert, index) => (
          <CertificateCard
            key={index}
            title={cert.title}
            issuer={cert.issuer}
            date={cert.date}
            link={cert.link}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default CertificationsSection; 