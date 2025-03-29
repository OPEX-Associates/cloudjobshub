import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import JobCard from "../../components/JobCard";
import AdvancedFilterBar from "../../components/AdvancedFilterBar";

const JobsPage = ({ data, location }) => {
  const allJobs = data.allJobsJson.nodes;
  
  // Extract all unique tags from jobs
  const allTags = [...new Set(allJobs.flatMap(job => job.tags))].sort();
  
  // Set up filter state
  const [filters, setFilters] = useState({
    locations: [],
    tags: [],
    experience: [],
    jobTypes: [],
    salary: null
  });
  
  // Set up search state
  const [searchTerm, setSearchTerm] = useState("");
  
  // Parse query parameters on page load
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tagParam = params.get("tag");
    
    if (tagParam) {
      setFilters(prev => ({
        ...prev,
        tags: [tagParam]
      }));
    }
  }, [location.search]);
  
  // Filter jobs based on selected filters and search term
  const filteredJobs = allJobs.filter(job => {
    // Filter by location
    if (filters.locations.length > 0) {
      const jobLocation = job.location.toLowerCase();
      const matchesLocation = filters.locations.some(loc => 
        jobLocation.includes(loc.toLowerCase())
      );
      if (!matchesLocation) return false;
    }
    
    // Filter by tags
    if (filters.tags.length > 0) {
      const matchesTags = job.tags.some(tag => 
        filters.tags.includes(tag)
      );
      if (!matchesTags) return false;
    }
    
    // Filter by experience (for demo purposes only)
    if (filters.experience?.length > 0) {
      // In a real app, job data would include experience level
      // Here we're just demonstrating the filter UI
      if (filters.experience.includes("Senior") && !job.title.includes("Senior")) {
        return false;
      }
      if (filters.experience.includes("Lead") && !job.title.includes("Lead")) {
        return false;
      }
    }
    
    // Filter by job type (for demo purposes only)
    if (filters.jobTypes?.length > 0) {
      // In a real app, job data would include job type
      // Here we're just demonstrating the filter UI
      const isFullTime = true; // Assume all jobs are full-time for demo
      if (filters.jobTypes.includes("Contract") && isFullTime) {
        // Skip if looking for contract but job is full-time
        return false;
      }
    }
    
    // Filter by salary
    if (filters.salary) {
      // In a real app, you would parse the salary range properly
      // This is just a simple example
      const salaryText = job.salary.toLowerCase();
      const minSalaryMatch = salaryText.match(/\$(\d+)/);
      if (minSalaryMatch) {
        const minSalary = parseInt(minSalaryMatch[1]) * 1000;
        if (minSalary < filters.salary.min || minSalary > filters.salary.max) {
          return false;
        }
      }
    }
    
    // Filter by search term
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      return (
        job.title.toLowerCase().includes(search) ||
        job.company.toLowerCase().includes(search) ||
        job.description.toLowerCase().includes(search) ||
        job.tags.some(tag => tag.toLowerCase().includes(search))
      );
    }
    
    return true;
  });
  
  return (
    <Layout 
      title="Remote Cloud & DevOps Jobs | CloudJobsHub"
      description="Browse the best remote Cloud and DevOps job opportunities from top companies"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Remote Cloud & DevOps Jobs
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            {filteredJobs.length} jobs available
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-2xl">
            <input
              type="text"
              placeholder="Search jobs by title, company, or skill..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <svg 
              className="absolute left-4 top-3.5 w-5 h-5 text-gray-400 dark:text-gray-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <AdvancedFilterBar 
              filters={filters} 
              setFilters={setFilters}
              allTags={allTags}
            />
          </div>
          
          {/* Job Listings */}
          <div className="lg:col-span-3">
            {filteredJobs.length > 0 ? (
              filteredJobs.map(job => (
                <JobCard key={job.id} job={job} />
              ))
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  No jobs found
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Try adjusting your filters or search criteria.
                </p>
                <button
                  onClick={() => {
                    setFilters({
                      locations: [],
                      tags: [],
                      experience: [],
                      jobTypes: [],
                      salary: null
                    });
                    setSearchTerm("");
                  }}
                  className="mt-4 btn-primary"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query JobsPageQuery {
    allJobsJson {
      nodes {
        id
        title
        company
        location
        salary
        tags
        url
        posted
        description
      }
    }
  }
`;

export default JobsPage; 