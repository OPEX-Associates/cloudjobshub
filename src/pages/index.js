import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import JobCard from "../components/JobCard";

const HomePage = ({ data }) => {
  const jobs = data.allJobsJson.nodes;
  const featuredJobs = jobs.slice(0, 3);
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Find Your Dream Remote <span className="text-primary">Cloud & DevOps</span> Job
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover top remote opportunities from the best companies in the USA, Canada, and Europe.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/jobs" 
              className="btn-primary text-center text-lg px-8 py-3"
            >
              Browse Jobs
            </Link>
            <button className="btn bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 text-center text-lg px-8 py-3">
              Post a Job
            </button>
          </div>
        </div>
      </section>
      
      {/* Featured Jobs Section */}
      <section className="py-12 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Featured Jobs
            </h2>
            <Link 
              to="/jobs"
              className="text-primary hover:text-primary-dark font-medium"
            >
              View all jobs →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredJobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-8">
            Popular Categories
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["AWS", "Azure", "GCP", "Kubernetes", "DevOps", "SRE", "Cloud Security", "Terraform"].map((category, index) => (
              <Link 
                key={index}
                to={`/jobs?tag=${category}`}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-md text-center border-2 border-transparent hover:border-primary transition-all"
              >
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{category}</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{Math.floor(Math.random() * 20) + 1} jobs</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Never Miss a Remote Cloud Job Opportunity
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get the latest Cloud & DevOps job listings delivered to your inbox weekly.
          </p>
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-l-md focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-800 hover:bg-blue-900 text-white font-medium px-6 py-3 rounded-r-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query HomePageQuery {
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

export default HomePage; 