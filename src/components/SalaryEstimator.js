import React, { useMemo } from 'react';

const SalaryEstimator = ({ allJobs }) => {
  // Process jobs to get salary data
  const salaryData = useMemo(() => {
    const jobsWithParsedSalary = allJobs.map(job => {
      let minSalary = 0;
      let maxSalary = 0;
      let currency = '$';
      
      // Very simplistic parsing - in a real app you'd want more robust parsing
      const salaryText = job.salary.toLowerCase();
      if (salaryText.includes('$')) {
        currency = '$';
      } else if (salaryText.includes('€')) {
        currency = '€';
      } else if (salaryText.includes('cad')) {
        currency = 'CAD';
      }
      
      const matches = salaryText.match(/(\d+)[k\s]*-\s*(\d+)k/i);
      if (matches && matches.length >= 3) {
        minSalary = parseInt(matches[1], 10) * 1000;
        maxSalary = parseInt(matches[2], 10) * 1000;
      }
      
      return {
        ...job,
        parsedSalary: {
          min: minSalary,
          max: maxSalary,
          avg: (minSalary + maxSalary) / 2,
          currency
        }
      };
    }).filter(job => job.parsedSalary.min > 0 && job.parsedSalary.max > 0);
    
    // Get unique roles (job titles) - simplistic grouping
    const roles = [...new Set(jobsWithParsedSalary.map(job => {
      // Simplify job titles for grouping
      if (job.title.includes('AWS')) return 'AWS Engineer';
      if (job.title.includes('Azure')) return 'Azure Engineer';
      if (job.title.includes('GCP')) return 'GCP Engineer';
      if (job.title.includes('DevOps')) return 'DevOps Engineer';
      if (job.title.includes('SRE')) return 'SRE';
      if (job.title.includes('Security')) return 'Security Engineer';
      if (job.title.includes('Architect')) return 'Cloud Architect';
      return 'Cloud Engineer';
    }))];
    
    // Calculate average salaries by role
    const salariesByRole = roles.map(role => {
      const jobsInRole = jobsWithParsedSalary.filter(job => {
        if (role === 'AWS Engineer' && job.title.includes('AWS')) return true;
        if (role === 'Azure Engineer' && job.title.includes('Azure')) return true;
        if (role === 'GCP Engineer' && job.title.includes('GCP')) return true;
        if (role === 'DevOps Engineer' && job.title.includes('DevOps')) return true;
        if (role === 'SRE' && job.title.includes('SRE')) return true;
        if (role === 'Security Engineer' && job.title.includes('Security')) return true;
        if (role === 'Cloud Architect' && job.title.includes('Architect')) return true;
        if (role === 'Cloud Engineer' && !job.title.includes('AWS') && 
            !job.title.includes('Azure') && !job.title.includes('GCP') && 
            !job.title.includes('DevOps') && !job.title.includes('SRE') && 
            !job.title.includes('Security') && !job.title.includes('Architect')) return true;
        return false;
      });
      
      if (jobsInRole.length === 0) return null;
      
      const avgSalary = jobsInRole.reduce((sum, job) => sum + job.parsedSalary.avg, 0) / jobsInRole.length;
      const minSalary = Math.min(...jobsInRole.map(job => job.parsedSalary.min));
      const maxSalary = Math.max(...jobsInRole.map(job => job.parsedSalary.max));
      
      // Most common currency
      const currencies = jobsInRole.map(job => job.parsedSalary.currency);
      const currencyCount = currencies.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
      }, {});
      const currency = Object.keys(currencyCount).reduce((a, b) => 
        currencyCount[a] > currencyCount[b] ? a : b, '$');
      
      return {
        role,
        avgSalary,
        minSalary,
        maxSalary,
        jobCount: jobsInRole.length,
        currency
      };
    }).filter(Boolean);
    
    return {
      salariesByRole,
      overallAverage: jobsWithParsedSalary.reduce((sum, job) => sum + job.parsedSalary.avg, 0) / jobsWithParsedSalary.length,
      totalJobs: jobsWithParsedSalary.length
    };
  }, [allJobs]);
  
  // Format salary numbers
  const formatSalary = (amount, currency = '$') => {
    return `${currency}${(amount / 1000).toFixed(0)}k`;
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Salary Insights</h2>
      
      <div className="mb-4">
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          Average Cloud & DevOps salary: <span className="font-bold">{formatSalary(salaryData.overallAverage)}</span>
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
                  {formatSalary(role.avgSalary, role.currency)}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                  {formatSalary(role.minSalary, role.currency)} - {formatSalary(role.maxSalary, role.currency)}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                  {role.jobCount}
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