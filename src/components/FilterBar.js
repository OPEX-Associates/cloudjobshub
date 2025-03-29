import React from "react";

const FilterBar = ({ filters, setFilters, allTags }) => {
  const locations = ["USA", "Europe", "Canada"];
  
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
  
  const clearFilters = () => {
    setFilters({
      locations: [],
      tags: []
    });
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-6">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Location</h3>
        <div className="flex flex-wrap gap-2">
          {locations.map(location => (
            <button
              key={location}
              onClick={() => handleLocationChange(location)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium 
                ${filters.locations.includes(location) 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
            >
              {location}
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => handleTagChange(tag)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium 
                ${filters.tags.includes(tag) 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      
      {(filters.locations.length > 0 || filters.tags.length > 0) && (
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={clearFilters}
            className="text-primary hover:text-primary-dark font-medium"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterBar; 