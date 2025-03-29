import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    // Check for dark mode preference
    if (
      localStorage.theme === 'dark' || 
      (!('theme' in localStorage) && 
       window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);
  
  const toggleDarkMode = () => {
    if (darkMode) {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    } else {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  };
  
  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" clipRule="evenodd" />
              </svg>
              <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">CloudJobsHub</span>
            </Link>
            <nav className="hidden md:flex ml-10">
              <Link to="/" className="mr-5 text-gray-600 dark:text-gray-300 hover:text-primary">Home</Link>
              <Link to="/jobs" className="mr-5 text-gray-600 dark:text-gray-300 hover:text-primary">Browse Jobs</Link>
              <Link to="/salary-insights" className="mr-5 text-gray-600 dark:text-gray-300 hover:text-primary">Salary Insights</Link>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">Post a Job</a>
            </nav>
          </div>
          
          <div className="flex items-center">
            {/* Dark mode toggle */}
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
            
            <button className="ml-4 btn-primary hidden md:block">Subscribe</button>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="ml-4 md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <nav className="mt-4 md:hidden">
            <Link to="/" className="block py-2 text-gray-600 dark:text-gray-300">Home</Link>
            <Link to="/jobs" className="block py-2 text-gray-600 dark:text-gray-300">Browse Jobs</Link>
            <Link to="/salary-insights" className="block py-2 text-gray-600 dark:text-gray-300">Salary Insights</Link>
            <a href="#" className="block py-2 text-gray-600 dark:text-gray-300">Post a Job</a>
            <button className="mt-2 btn-primary w-full">Subscribe</button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header; 