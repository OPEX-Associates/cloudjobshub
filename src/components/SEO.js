import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ title, description, image, jobData }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
  );

  const metaTitle = title || site.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.description;
  const metaImage = image ? `${site.siteMetadata.siteUrl}${image}` : null;
  
  // Structured data for job listing
  const jobSchema = jobData ? {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    "title": jobData.title,
    "description": jobData.description,
    "datePosted": jobData.posted,
    "employmentType": "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": jobData.company,
      "sameAs": site.siteMetadata.siteUrl
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": jobData.location.includes("USA") ? "US" : 
                          jobData.location.includes("Europe") ? "EU" : 
                          jobData.location.includes("Canada") ? "CA" : ""
      }
    },
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": jobData.location.replace("Remote (", "").replace(")", "")
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": jobData.salary.includes("$") ? "USD" : 
                  jobData.salary.includes("€") ? "EUR" : 
                  jobData.salary.includes("CAD") ? "CAD" : "USD",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": parseInt(jobData.salary.replace(/[^0-9]/g, '')),
        "maxValue": parseInt(jobData.salary.split("-")[1].replace(/[^0-9]/g, '')),
        "unitText": "YEAR"
      }
    }
  } : null;

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={site.siteMetadata.siteUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      {metaImage && <meta property="og:image" content={metaImage} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {metaImage && <meta name="twitter:image" content={metaImage} />}
      
      {/* Structured data */}
      {jobSchema && (
        <script type="application/ld+json">
          {JSON.stringify(jobSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO; 