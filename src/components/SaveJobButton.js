import React, { useState, useEffect } from "react";

const SaveJobButton = ({ job }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [showToast, setShowToast] = useState(false);
  
  // Check if job is already saved
  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem('savedJobs') || '[]');
    const alreadySaved = savedJobs.some(savedJob => savedJob.id === job.id);
    setIsSaved(alreadySaved);
  }, [job.id]);
  
  const toggleSave = () => {
    const savedJobs = JSON.parse(localStorage.getItem('savedJobs') || '[]');
    
    if (isSaved) {
      // Remove job from saved list
      const updatedSavedJobs = savedJobs.filter(savedJob => savedJob.id !== job.id);
      localStorage.setItem('savedJobs', JSON.stringify(updatedSavedJobs));
      setIsSaved(false);
      
      // Show toast
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } else {
      // Add job to saved list
      const jobToSave = {
        id: job.id,
        title: job.title,
        company: job.company,
        location: job.location,
        salary: job.salary,
        url: job.url,
        savedAt: new Date().toISOString()
      };
      
      localStorage.setItem('savedJobs', JSON.stringify([...savedJobs, jobToSave]));
      setIsSaved(true);
      
      // Show toast
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };
  
  return (
    <div className="relative">
      <button
        onClick={toggleSave}
        className={`group flex items-center justify-center px-4 py-2 border rounded-md transition-colors ${
          isSaved 
            ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-primary-dark dark:text-blue-300' 
            : 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600'
        }`}
        aria-label={isSaved ? "Unsave this job" : "Save this job"}
      >
        <svg 
          className={`w-5 h-5 mr-2 ${isSaved ? 'text-primary' : 'text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-400'}`} 
          fill={isSaved ? "currentColor" : "none"} 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={isSaved ? 0 : 2} 
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" 
          />
        </svg>
        {isSaved ? 'Saved' : 'Save Job'}
      </button>
      
      {/* Toast notification */}
      {showToast && (
        <div className="absolute top-12 right-0 z-10 w-64 text-sm bg-gray-800 text-white p-3 rounded-md shadow-lg">
          {isSaved ? 'Job saved to your bookmarks!' : 'Job removed from your bookmarks'}
        </div>
      )}
    </div>
  );
};

export default SaveJobButton; 