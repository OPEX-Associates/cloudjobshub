import React from "react";

const JobStats = ({ job }) => {
  // In a real application, this data would come from an API
  // For demo purposes, we're generating random metrics
  const generateStats = () => {
    const posted = new Date(job.posted);
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - posted);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    // Metrics scale with days the job has been posted
    const views = Math.floor(diffDays * 35 + Math.random() * 100);
    const applications = Math.floor(views * (0.1 + Math.random() * 0.1));
    const interviewRate = Math.floor(10 + Math.random() * 20);
    
    return {
      views,
      applications,
      interviewRate
    };
  };
  
  const stats = generateStats();
  
  return (
    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
      <h3 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">Job Activity</h3>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-xl font-bold text-gray-800 dark:text-white">{stats.views}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Views</div>
        </div>
        
        <div className="text-center">
          <div className="text-xl font-bold text-gray-800 dark:text-white">{stats.applications}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Applications</div>
        </div>
        
        <div className="text-center">
          <div className="text-xl font-bold text-gray-800 dark:text-white">{stats.interviewRate}%</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Interview Rate</div>
        </div>
      </div>
      
      <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center text-sm">
          <div className="text-gray-500 dark:text-gray-400">Competition</div>
          <div className="font-medium text-gray-700 dark:text-gray-300">
            {stats.applications < 10 ? 'Low' : stats.applications < 25 ? 'Moderate' : 'High'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobStats; 