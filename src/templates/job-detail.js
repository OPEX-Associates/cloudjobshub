import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import ShareJobButtons from "../components/ShareJobButtons";
import RelatedJobs from "../components/RelatedJobs";

const JobDetail = ({ data, location }) => {
  const job = data.jobsJson;
  const allJobs = data.allJobsJson.nodes;
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  
  // Format posted date
  const postedDate = new Date(job.posted);
  const formattedDate = postedDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return (
    <Layout 
      title={`${job.title} at ${job.company} | CloudJobsHub`}
      description={`Apply for this ${job.title} position at ${job.company}. ${job.salary}. Remote position for ${job.location}.`}
      jobData={job}
    >
      <div className="bg-gray-50 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-primary">Home</Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                    <Link to="/jobs" className="ml-1 text-gray-600 dark:text-gray-400 hover:text-primary md:ml-2">Jobs</Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                    <span className="ml-1 text-gray-500 dark:text-gray-300 md:ml-2 font-medium">{job.title}</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          
          {/* Job header */}
          <div className="bg-white dark:bg-gray-800 rounded-t-lg shadow-sm p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">{job.title}</h1>
                <div className="flex items-center mb-4">
                  <span className="text-lg text-gray-700 dark:text-gray-300 font-medium">{job.company}</span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-gray-600 dark:text-gray-400">{job.location}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-blue-50 dark:bg-blue-900/30 text-primary-dark dark:text-blue-300 px-3 py-1 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 md:mt-0 md:text-right">
                <div className="text-xl font-bold text-gray-800 dark:text-white mb-2">{job.salary}</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Posted on {formattedDate}</div>
              </div>
            </div>
          </div>
          
          {/* Main content */}
          <div className="bg-white dark:bg-gray-800 shadow-sm p-6 mb-6">
            {/* Job description */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Job Description</h2>
              <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                <p className="mb-4">{job.description}</p>
                <p>We are looking for a talented {job.title} to join our team. This is a remote position ideal for someone with experience in {job.tags.join(", ")}.</p>
                
                <h3 className="text-lg font-semibold mt-6 mb-3">Responsibilities:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Design, implement, and maintain cloud infrastructure</li>
                  <li>Collaborate with development teams to deploy and scale applications</li>
                  <li>Implement security best practices and ensure compliance</li>
                  <li>Optimize performance and costs of cloud resources</li>
                  <li>Troubleshoot and resolve infrastructure issues</li>
                </ul>
                
                <h3 className="text-lg font-semibold mt-6 mb-3">Requirements:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Experience with {job.tags.slice(0, 2).join(" and ")}</li>
                  <li>Strong understanding of cloud architecture principles</li>
                  <li>Excellent problem-solving and communication skills</li>
                  <li>Experience with CI/CD pipelines and automation tools</li>
                </ul>
                
                <h3 className="text-lg font-semibold mt-6 mb-3">Benefits:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Competitive salary: {job.salary}</li>
                  <li>Flexible working hours</li>
                  <li>Health insurance</li>
                  <li>Professional development budget</li>
                  <li>Home office stipend</li>
                </ul>
              </div>
            </div>
            
            {/* Share section */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mb-6">
              <ShareJobButtons job={job} url={currentUrl} />
            </div>
            
            {/* Apply section */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">Interested in this position?</h3>
                  <p className="text-gray-600 dark:text-gray-400">Apply now to join {job.company}</p>
                </div>
                <a 
                  href={job.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary text-center py-3 px-8"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
          
          {/* Company section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">About {job.company}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {job.company} is a leading company in the technology industry. We're focused on delivering innovative solutions to our customers and creating a great work environment for our employees.
            </p>
          </div>
          
          {/* Related jobs section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <RelatedJobs currentJob={job} allJobs={allJobs} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query JobDetailQuery($id: String!) {
    jobsJson(id: { eq: $id }) {
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
    allJobsJson {
      nodes {
        id
        title
        company
        location
        salary
        tags
        url
      }
    }
  }
`;

export default JobDetail; 