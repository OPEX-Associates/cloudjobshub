import React, { useState } from "react";

const ShareJobButtons = ({ job, url }) => {
  const [showCopyMessage, setShowCopyMessage] = useState(false);
  
  const jobTitle = encodeURIComponent(`${job.title} at ${job.company}`);
  const jobUrl = encodeURIComponent(url);
  
  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${jobTitle}&url=${jobUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${jobUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${jobUrl}`,
    email: `mailto:?subject=${jobTitle}&body=Check out this job: ${jobUrl}`
  };
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(url).then(() => {
      setShowCopyMessage(true);
      setTimeout(() => setShowCopyMessage(false), 2000);
    });
  };
  
  return (
    <div className="flex flex-col">
      <div className="mb-2">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Share this job</h3>
      </div>
      <div className="flex space-x-3">
        {/* Twitter */}
        <a 
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors"
          aria-label="Share on Twitter"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184A4.92 4.92 0 0016.327 2a4.924 4.924 0 00-4.923 4.923c0 .386.043.76.126 1.122A13.979 13.979 0 011.64 3.16a4.833 4.833 0 00-.67 2.473c0 1.706.87 3.213 2.18 4.09a4.976 4.976 0 01-2.228-.61v.061c0 2.385 1.693 4.374 3.946 4.83a4.964 4.964 0 01-2.223.085 4.927 4.927 0 004.6 3.42 9.875 9.875 0 01-6.104 2.105c-.397 0-.788-.023-1.172-.067a13.932 13.932 0 007.548 2.208c9.054 0 14-7.496 14-13.986 0-.213-.005-.427-.014-.64A10.016 10.016 0 0024 4.59l-.047-.02z" />
          </svg>
        </a>
        
        {/* LinkedIn */}
        <a 
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors"
          aria-label="Share on LinkedIn"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
        
        {/* Facebook */}
        <a 
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          aria-label="Share on Facebook"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
        
        {/* Email */}
        <a 
          href={shareLinks.email}
          className="p-2 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition-colors"
          aria-label="Share via Email"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </a>
        
        {/* Copy Link */}
        <button 
          onClick={copyToClipboard}
          className="p-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors relative"
          aria-label="Copy Link"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
            <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
          </svg>
          
          {/* Copy success message */}
          {showCopyMessage && (
            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
              Link copied!
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default ShareJobButtons; 