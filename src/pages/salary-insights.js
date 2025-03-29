import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SalaryEstimator from "../components/SalaryEstimator";

const SalaryInsightsPage = ({ data }) => {
  const allJobs = data.allJobsJson.nodes;
  
  return (
    <Layout 
      title="Cloud & DevOps Salary Insights | CloudJobsHub"
      description="Explore salary trends and insights for remote cloud and DevOps jobs"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">
            Cloud & DevOps Salary Insights
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl">
            Discover average salaries and compensation trends for remote cloud and DevOps positions.
            This data is compiled from our job listings to help you understand the market rates for different roles.
          </p>
        </div>
        
        {/* Salary Estimator */}
        <div className="mb-8">
          <SalaryEstimator allJobs={allJobs} />
        </div>
        
        {/* Additional salary context */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
              Factors Affecting Salary
            </h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Experience Level:</strong> Senior roles typically earn 20-40% more than junior positions.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Location:</strong> Even for remote jobs, compensation may be adjusted based on your location.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Specialized Skills:</strong> Expertise in Kubernetes, Terraform, or cloud security can increase compensation by 10-15%.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Company Size:</strong> Enterprise organizations often offer higher base salaries, while startups may offer more equity.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Industry:</strong> Finance and healthcare typically offer higher compensation than education or non-profits.</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
              Negotiation Tips
            </h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Research:</strong> Use this salary data as a baseline for negotiations.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Total Package:</strong> Consider benefits, remote work flexibility, and professional development opportunities.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Highlight Specialization:</strong> Emphasize unique skills that align with market demands.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Be Specific:</strong> When discussing compensation, provide specific numbers based on your research.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Consider Equity:</strong> For startups, equity can be a significant part of your compensation.</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-primary/10 rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <div className="mr-4 text-primary">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Disclaimer</h3>
              <p className="text-gray-700 dark:text-gray-300">
                The salary information provided is based on job postings and may not reflect all market conditions. 
                Individual compensation packages may vary based on specific skills, experience, company policies, and geographical factors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query SalaryInsightsQuery {
    allJobsJson {
      nodes {
        id
        title
        salary
      }
    }
  }
`;

export default SalaryInsightsPage; 