import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SiteUnderConstruction from "../components/SiteUnderConStruction";

import { useEffect } from "react";
const ProjectPage = () => {
    useEffect(() => {
        document.title = "Crafted Curiosity- Edu | Projects";
    }, []);
  
    

  return (
    <>
      <Header />
      <SiteUnderConstruction />
      <Footer />
    </>
  );
};

export default ProjectPage;