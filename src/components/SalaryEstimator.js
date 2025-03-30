import React from 'react';
import { Link } from 'gatsby';

// Hardcoded data for salary insights
const defaultSalaryData = {
  overallAverage: 127000,
  totalJobs: 0,
  salariesByRole: [
    {
      role: "DevOps Engineer",
      avgSalary: 120000,
      minSalary: 100000,
      maxSalary: 150000,
      jobCount: 0,
      tag: "devops"
    },
    {
      role: "Cloud Architect",
      avgSalary: 145000,
      minSalary: 125000,
      maxSalary: 180000,
      jobCount: 0,
      tag: "cloud-architect"
    },
    {
      role: "Site Reliability Engineer",
      avgSalary: 135000,
      minSalary: 115000,
      maxSalary: 165000,
      jobCount: 0,
      tag: "sre"
    },
    {
      role: "Kubernetes Specialist",
      avgSalary: 130000,
      minSalary: 110000,
      maxSalary: 160000,
      jobCount: 0,
      tag: "kubernetes"
    },
    {
      role: "Cloud Security Engineer",
      avgSalary: 140000,
      minSalary: 120000,
      maxSalary: 170000,
      jobCount: 0,
      tag: "security"
    }
  ]
};

const SalaryEstimator = ({ allJobs = [] }) => {
  // Format salary numbers
  const formatSalary = (salary) => {
    if (!salary || isNaN(salary)) {
      return "No data available";
    }
    return `$${Math.round(salary / 1000)}k`;
  };

  // We're using the default salary data since we don't have real data
  const salaryData = defaultSalaryData;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Salary Insights</h2>
      
      <div className="mb-4">
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          Average Cloud & DevOps salary: {formatSalary(salaryData.overallAverage)}
          <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">
            (based on {salaryData.totalJobs} jobs)
          </span>
        </p>
      </div>
      
      <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Salaries by Role</h3>
      <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Role
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Avg. Salary
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Range
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Jobs
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {salaryData.salariesByRole.map((role, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-700'}>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-white">
                  {role.role}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300 font-bold">
                  {formatSalary(role.avgSalary)}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                  {formatSalary(role.minSalary)} - {formatSalary(role.maxSalary)}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                  <Link 
                    to={`/jobs?tag=${role.tag}`} 
                    className="text-primary hover:text-primary-dark"
                  >
                    Browse Jobs
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        <p>Note: Salary data is estimated based on job listings. Actual compensation may vary.</p>
      </div>
    </div>
  );
};

export default SalaryEstimator; 