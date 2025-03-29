import React from "react";
import { Link } from "gatsby";

const JobCard = ({ job }) => {
  const postedDate = new Date(job.posted);
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate - postedDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return (
    <div className="card mb-4">
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white hover:text-primary">
              <Link to={`/jobs/${job.id}`}>
                {job.title}
              </Link>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2">{job.company} • {job.location}</p>
          </div>
          <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm px-3 py-1 rounded-full">
            {diffDays <= 1 ? 'Today' : diffDays <= 2 ? 'Yesterday' : `${diffDays} days ago`}
          </span>
        </div>
        
        <div className="mt-2">
          <p className="text-gray-700 dark:text-gray-300 font-medium">{job.salary}</p>
          <p className="text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">{job.description}</p>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {job.tags.map((tag, index) => (
            <span 
              key={index} 
              className="bg-blue-50 dark:bg-blue-900/30 text-primary-dark dark:text-blue-300 px-2 py-1 text-xs rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700 flex justify-between">
          <Link 
            to={`/jobs/${job.id}`}
            className="text-primary hover:text-primary-dark font-medium"
          >
            View Details
          </Link>
          <a 
            href={job.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobCard; 