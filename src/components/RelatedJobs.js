import React from "react";
import { Link } from "gatsby";

const RelatedJobs = ({ currentJob, allJobs }) => {
  // Filter out the current job and find ones with similar tags
  const relatedJobs = allJobs
    .filter(job => job.id !== currentJob.id)
    .map(job => {
      // Calculate similarity score based on matching tags
      const matchingTags = job.tags.filter(tag => 
        currentJob.tags.includes(tag)
      );
      return {
        ...job,
        similarity: matchingTags.length
      };
    })
    .filter(job => job.similarity > 0) // Only keep jobs with at least one matching tag
    .sort((a, b) => b.similarity - a.similarity) // Sort by similarity (highest first)
    .slice(0, 3); // Take top 3 related jobs
  
  if (relatedJobs.length === 0) {
    return null;
  }
  
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Similar Jobs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {relatedJobs.map(job => (
          <div key={job.id} className="card">
            <div className="p-4">
              <Link 
                to={`/jobs/${job.id}`}
                className="block hover:text-primary transition-colors"
              >
                <h3 className="font-bold text-gray-800 dark:text-white mb-1">{job.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{job.company}</p>
                <p className="text-gray-700 dark:text-gray-300 font-medium text-sm mb-2">{job.salary}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {job.tags.filter(tag => currentJob.tags.includes(tag)).map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-blue-50 dark:bg-blue-900/30 text-primary-dark dark:text-blue-300 px-2 py-0.5 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link to="/jobs" className="btn-primary inline-block">
          Browse All Jobs
        </Link>
      </div>
    </div>
  );
};

export default RelatedJobs; 