import React from "react";
import { Link } from "gatsby";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-800 pt-12 pb-8 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" clipRule="evenodd" />
              </svg>
              <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">CloudJobsHub</span>
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Find the best remote Cloud and DevOps jobs from USA, Canada, and Europe.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">For Job Seekers</h3>
            <ul className="space-y-2">
              <li><Link to="/jobs" className="text-gray-600 dark:text-gray-300 hover:text-primary">Browse Jobs</Link></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">Create Alert</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">Career Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">For Employers</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">Post a Job</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">Pricing Plans</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">Employer Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Subscribe</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Get the latest Cloud & DevOps jobs delivered to your inbox weekly.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                className="btn-primary rounded-l-none"
              >
                Go
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between">
          <p className="text-gray-600 dark:text-gray-300">
            &copy; {currentYear} CloudJobsHub. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">Privacy Policy</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">Terms of Service</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 