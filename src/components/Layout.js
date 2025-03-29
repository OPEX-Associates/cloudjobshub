import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SEO from "./SEO";
import "../styles/global.css";

const Layout = ({ children, title, description, image, jobData }) => {
  return (
    <>
      <SEO 
        title={title} 
        description={description} 
        image={image}
        jobData={jobData} 
      />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-gray-50 dark:bg-gray-900">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout; 