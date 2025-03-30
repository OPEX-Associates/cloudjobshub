import React from "react";

const CompanyInfo = ({ company }) => {
  // This would typically come from a database
  // For demo purposes, we're creating placeholder data
  const companyDetails = {
    name: company,
    logo: "/company-placeholder.png",
    description: `${company} is a leading technology company that specializes in cloud infrastructure, DevOps solutions, and digital transformation. With a global presence and a commitment to innovation, ${company} helps businesses optimize their operations, improve scalability, and enhance security through cutting-edge technology solutions.`,
    founded: "2010",
    headquarters: "San Francisco, CA",
    employees: "500-1000",
    industry: "Technology",
    website: "https://example.com",
    benefits: [
      "Competitive salary",
      "Remote work flexibility",
      "Health insurance",
      "Professional development budget",
      "Home office stipend"
    ]
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
        <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center text-gray-500 dark:text-gray-400 mr-4 mb-4 md:mb-0">
          {/* Company logo would go here */}
          <span className="text-2xl font-bold">{companyDetails.name.charAt(0)}</span>
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{companyDetails.name}</h2>
          <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
            <span>{companyDetails.industry}</span>
            <span>•</span>
            <span>{companyDetails.headquarters}</span>
            <span>•</span>
            <span>{companyDetails.employees} employees</span>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">About {companyDetails.name}</h3>
        <p className="text-gray-700 dark:text-gray-300">
          {companyDetails.description}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Company Details</h3>
          <ul className="space-y-2">
            <li className="flex">
              <span className="font-medium text-gray-700 dark:text-gray-300 w-32">Founded:</span>
              <span className="text-gray-600 dark:text-gray-400">{companyDetails.founded}</span>
            </li>
            <li className="flex">
              <span className="font-medium text-gray-700 dark:text-gray-300 w-32">Headquarters:</span>
              <span className="text-gray-600 dark:text-gray-400">{companyDetails.headquarters}</span>
            </li>
            <li className="flex">
              <span className="font-medium text-gray-700 dark:text-gray-300 w-32">Size:</span>
              <span className="text-gray-600 dark:text-gray-400">{companyDetails.employees}</span>
            </li>
            <li className="flex">
              <span className="font-medium text-gray-700 dark:text-gray-300 w-32">Industry:</span>
              <span className="text-gray-600 dark:text-gray-400">{companyDetails.industry}</span>
            </li>
            <li className="flex">
              <span className="font-medium text-gray-700 dark:text-gray-300 w-32">Website:</span>
              <a href={companyDetails.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
                {companyDetails.website.replace('https://', '')}
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Benefits & Perks</h3>
          <ul className="space-y-2">
            {companyDetails.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-400">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <a 
          href={companyDetails.website}
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:text-primary-dark font-medium"
        >
          Visit company website →
        </a>
      </div>
    </div>
  );
};

export default CompanyInfo; 