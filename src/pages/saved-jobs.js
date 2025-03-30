import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const SavedJobsPage = () => {
  const [savedJobs, setSavedJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Get saved jobs from localStorage
    if (typeof window !== 'undefined') {
      const jobs = JSON.parse(localStorage.getItem('savedJobs') || '[]');
      // Sort by most recently saved
      jobs.sort((a, b) => new Date(b.savedAt) - new Date(a.savedAt));
      setSavedJobs(jobs);
      setIsLoading(false);
    }
  }, []);
  
  const removeJob = (jobId) => {
    const updatedJobs = savedJobs.filter(job => job.id !== jobId);
    localStorage.setItem('savedJobs', JSON.stringify(updatedJobs));
    setSavedJobs(updatedJobs);
  };
  
  const clearAllJobs = () => {
    localStorage.setItem('savedJobs', JSON.stringify([]));
    setSavedJobs([]);
  };
  
  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };
  
  return (
    <Layout 
      title="Saved Jobs | CloudJobsHub"
      description="View and manage your saved jobs on CloudJobsHub"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Saved Jobs
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            {savedJobs.length} job{savedJobs.length !== 1 ? 's' : ''} saved
          </p>
        </div>
        
        {isLoading ? (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Loading saved jobs...</p>
          </div>
        ) : savedJobs.length > 0 ? (
          <>
            <div className="mb-6 flex justify-end">
              <button
                onClick={clearAllJobs}
                className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 text-sm flex items-center"
              >
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Clear all saved jobs
              </button>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Job
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Company
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Salary
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Saved On
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {savedJobs.map((job) => (
                    <tr key={job.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          <Link to={`/jobs/${job.id}`} className="hover:text-primary">
                            {job.title}
                          </Link>
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {job.location}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 dark:text-white">{job.company}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{job.salary}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {formatDate(job.savedAt)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex space-x-3">
                          <Link to={`/jobs/${job.id}`} className="text-primary hover:text-primary-dark">
                            View
                          </Link>
                          <button
                            onClick={() => removeJob(job.id)}
                            className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                          >
                            Remove
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 text-center">
            <svg className="w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
              No saved jobs yet
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              When you find a job you're interested in, click the "Save Job" button to bookmark it for later.
            </p>
            <Link to="/jobs" className="btn-primary inline-block">
              Browse Jobs
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SavedJobsPage; 