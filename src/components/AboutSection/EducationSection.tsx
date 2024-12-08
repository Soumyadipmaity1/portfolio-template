import React from 'react';
import { FiAward } from 'react-icons/fi';
import { PiGraduationCap } from 'react-icons/pi';

const EducationSection = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 text-xl font-semibold text-purple-300">
        <PiGraduationCap className="text-2xl" />
        <h3>Education</h3>
      </div>
      <div className="bg-white/5 rounded-xl p-6 space-y-6 hover:bg-white/10 
                    transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
          <div>
            <h4 className="font-semibold text-gray-200">
              Bachelor of Technology in Computer Science Engineering
            </h4>
            <p className="text-gray-400 mt-2">
              Kalinga Institute of Industrial Technology, Bhubaneswar
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full shrink-0">
            <FiAward className="text-purple-400" />
            <span className="text-purple-300 text-sm whitespace-nowrap">CGPA: 8.8/10.0</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-4 py-2 bg-purple-500/10 rounded-full text-purple-300 text-sm">
            2022 - 2026 (Expected)
          </span>
        </div>
      </div>
    </div>
  );
};

export default EducationSection; 