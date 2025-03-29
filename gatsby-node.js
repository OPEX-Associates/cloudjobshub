const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  
  // Query all jobs
  const result = await graphql(`
    query {
      allJobsJson {
        nodes {
          id
        }
      }
    }
  `);
  
  // Create pages for each job
  result.data.allJobsJson.nodes.forEach(job => {
    createPage({
      path: `/jobs/${job.id}`,
      component: path.resolve("./src/templates/job-detail.js"),
      context: {
        id: job.id,
      },
    });
  });
}; 