import React from 'react';

const ProfileCard = () => {
  return (
    <div className="flex items-center gap-6">
      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 
                    flex items-center justify-center text-4xl font-bold text-white
                    shadow-lg shadow-purple-500/20">
        R
      </div>
      <div>
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
                     from-purple-400 to-pink-400 mb-2">
          Ritika Banerjee
        </h2>
        <p className="text-gray-400">AI/ML Enthusiast & Computer Science Student</p>
      </div>
    </div>
  );
};

export default ProfileCard; 