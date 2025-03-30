import React, { useState } from "react";

const JobApplicationForm = ({ job }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    coverLetter: '',
    resume: null,
    agreeToTerms: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else if (type === 'file') {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // For demo purposes, simulate a submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // In a real application, you would send the form data to an API
      console.log('Application submitted:', formData);
    }, 1500);
  };
  
  if (submitStatus === 'success') {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
        <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Application Submitted!</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Thank you for applying to the {job.title} position at {job.company}.
          We'll review your application and get back to you soon.
        </p>
        <div className="mt-4">
          <a 
            href={job.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-dark font-medium"
          >
            Visit the company website →
          </a>
        </div>
      </div>
    );
  }
  
  return (
    <div>
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Apply for this position</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-primary focus:border-primary"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-primary focus:border-primary"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-primary focus:border-primary"
          />
        </div>
        
        <div>
          <label htmlFor="resume" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Resume (PDF)</label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-primary focus:border-primary"
          />
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">PDF, DOC, or DOCX up to 2MB</p>
        </div>
        
        <div>
          <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Cover Letter</label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            rows="5"
            value={formData.coverLetter}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-primary focus:border-primary"
            placeholder="Briefly explain why you're a good fit for this role..."
          ></textarea>
        </div>
        
        <div className="flex items-start">
          <input
            type="checkbox"
            id="agreeToTerms"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            required
            className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
          />
          <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
            I agree to the <a href="#" className="text-primary hover:text-primary-dark">Terms and Conditions</a> and <a href="#" className="text-primary hover:text-primary-dark">Privacy Policy</a>
          </label>
        </div>
        
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-md transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobApplicationForm; 