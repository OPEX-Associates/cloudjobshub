import React, { useState } from "react";

const AdvancedFilterBar = ({ filters, setFilters, allTags }) => {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const locations = ["USA", "Europe", "Canada"];
  
  // Experience levels for filtering
  const experienceLevels = ["Entry-Level", "Mid-Level", "Senior", "Lead"];
  
  // Job types
  const jobTypes = ["Full-time", "Contract", "Freelance"];
  
  // Salary ranges
  const salaryRanges = [
    { label: "Under $80k", min: 0, max: 80000 },
    { label: "$80k - $100k", min: 80000, max: 100000 },
    { label: "$100k - $130k", min: 100000, max: 130000 },
    { label: "$130k - $150k", min: 130000, max: 150000 },
    { label: "$150k+", min: 150000, max: Infinity }
  ];
  
  const handleLocationChange = (location) => {
    if (filters.locations.includes(location)) {
      setFilters({
        ...filters,
        locations: filters.locations.filter(loc => loc !== location)
      });
    } else {
      setFilters({
        ...filters,
        locations: [...filters.locations, location]
      });
    }
  };
  
  const handleTagChange = (tag) => {
    if (filters.tags.includes(tag)) {
      setFilters({
        ...filters,
        tags: filters.tags.filter(t => t !== tag)
      });
    } else {
      setFilters({
        ...filters,
        tags: [...filters.tags, tag]
      });
    }
  };
  
  const handleExperienceChange = (level) => {
    if (filters.experience?.includes(level)) {
      setFilters({
        ...filters,
        experience: filters.experience.filter(l => l !== level)
      });
    } else {
      setFilters({
        ...filters,
        experience: [...(filters.experience || []), level]
      });
    }
  };
  
  const handleJobTypeChange = (type) => {
    if (filters.jobTypes?.includes(type)) {
      setFilters({
        ...filters,
        jobTypes: filters.jobTypes.filter(t => t !== type)
      });
    } else {
      setFilters({
        ...filters,
        jobTypes: [...(filters.jobTypes || []), type]
      });
    }
  };
  
  const handleSalaryChange = (min, max) => {
    setFilters({
      ...filters,
      salary: { min, max }
    });
  };
  
  const clearFilters = () => {
    setFilters({
      locations: [],
      tags: [],
      experience: [],
      jobTypes: [],
      salary: null
    });
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
      {/* Basic filters */}
      <div className="p-4">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Location</h3>
          <div className="flex flex-wrap gap-2">
            {locations.map(location => (
              <button
                key={location}
                onClick={() => handleLocationChange(location)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors 
                  ${filters.locations?.includes(location) 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
              >
                {location}
              </button>
            ))}
          </div>
        </div>
        
        <div className="mb-4">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Top Skills</h3>
          <div className="flex flex-wrap gap-2">
            {allTags.slice(0, 6).map(tag => (
              <button
                key={tag}
                onClick={() => handleTagChange(tag)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors 
                  ${filters.tags?.includes(tag) 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        
        {/* Toggle for advanced filters */}
        <button
          onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
          className="flex items-center text-primary hover:text-primary-dark font-medium"
        >
          {isAdvancedOpen ? 'Hide' : 'Show'} advanced filters
          <svg 
            className={`w-5 h-5 ml-1 transform transition-transform ${isAdvancedOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      
      {/* Advanced filters */}
      {isAdvancedOpen && (
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          {/* Experience level */}
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Experience Level</h3>
            <div className="flex flex-wrap gap-2">
              {experienceLevels.map(level => (
                <button
                  key={level}
                  onClick={() => handleExperienceChange(level)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors 
                    ${filters.experience?.includes(level) 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
          
          {/* Job type */}
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Job Type</h3>
            <div className="flex flex-wrap gap-2">
              {jobTypes.map(type => (
                <button
                  key={type}
                  onClick={() => handleJobTypeChange(type)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors 
                    ${filters.jobTypes?.includes(type) 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          
          {/* Salary range */}
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Salary Range</h3>
            <div className="flex flex-wrap gap-2">
              {salaryRanges.map((range, index) => (
                <button
                  key={index}
                  onClick={() => handleSalaryChange(range.min, range.max)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors 
                    ${filters.salary?.min === range.min && filters.salary?.max === range.max
                      ? 'bg-primary text-white' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* All skills */}
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">All Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {allTags.map(tag => (
                <div key={tag} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`tag-${tag}`}
                    checked={filters.tags?.includes(tag) || false}
                    onChange={() => handleTagChange(tag)}
                    className="mr-2 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label htmlFor={`tag-${tag}`} className="text-gray-700 dark:text-gray-300">{tag}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Filter actions */}
      {(filters.locations?.length > 0 || 
        filters.tags?.length > 0 || 
        filters.experience?.length > 0 || 
        filters.jobTypes?.length > 0 || 
        filters.salary) && (
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <button
            onClick={clearFilters}
            className="text-primary hover:text-primary-dark font-medium"
          >
            Clear all filters
          </button>
          <div className="text-gray-600 dark:text-gray-400 text-sm">
            Filters applied: {[
              filters.locations?.length > 0 ? `${filters.locations.length} locations` : '',
              filters.tags?.length > 0 ? `${filters.tags.length} skills` : '',
              filters.experience?.length > 0 ? `${filters.experience.length} experience levels` : '',
              filters.jobTypes?.length > 0 ? `${filters.jobTypes.length} job types` : '',
              filters.salary ? '1 salary range' : ''
            ].filter(Boolean).join(', ')}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedFilterBar; 