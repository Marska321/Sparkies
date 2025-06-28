// src/components/ProgressView.js
import React from 'react';
import { Award, CheckCircle, TrendingUp, Star } from 'lucide-react';

// A component to display a single statistic
const StatCard = ({ icon, label, value, color }) => (
  <div className={`p-6 rounded-2xl shadow-lg flex items-center gap-6 ${color}`}>
    <div className="flex-shrink-0 text-white p-4 bg-black bg-opacity-20 rounded-xl">
      {icon}
    </div>
    <div>
      <div className="text-4xl font-bold text-white">{value}</div>
      <div className="text-lg text-white opacity-90">{label}</div>
    </div>
  </div>
);

// The main view for displaying user progress
export default function ProgressView({ userProgress, lessons }) {
  const completedCount = userProgress.completedLessons.length;
  const totalLessons = lessons.length;
  const progressPercentage = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100 animate-fade-in-up">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Your Progress</h1>
      <p className="text-gray-600 mb-8">Here's a look at your amazing entrepreneurial journey so far!</p>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatCard 
          icon={<CheckCircle size={32} />} 
          label="Lessons Completed" 
          value={`${completedCount} / ${totalLessons}`}
          color="bg-gradient-to-br from-green-500 to-teal-500"
        />
        <StatCard 
          icon={<Award size={32} />} 
          label="Badges Earned" 
          value={userProgress.badges}
          color="bg-gradient-to-br from-yellow-500 to-orange-500"
        />
        <StatCard 
          icon={<Star size={32} />} 
          label="Current Level" 
          value={userProgress.level}
          color="bg-gradient-to-br from-blue-500 to-indigo-500"
        />
        <StatCard 
          icon={<TrendingUp size={32} />} 
          label="Current Streak" 
          value={`${userProgress.streak} days`}
          color="bg-gradient-to-br from-pink-500 to-purple-500"
        />
      </div>

      {/* Progress Bar */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Overall Completion</h2>
        <div className="w-full bg-gray-200 rounded-full h-8">
          <div 
            className="bg-gradient-to-r from-green-400 to-blue-500 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm transition-all duration-1000"
            style={{ width: `${progressPercentage}%` }}
          >
            {progressPercentage}%
          </div>
        </div>
      </div>
    </div>
  );
}
