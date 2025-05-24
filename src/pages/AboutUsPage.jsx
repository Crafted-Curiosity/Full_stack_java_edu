import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutUsInfo from "../components/aboutuscomponents/AboutUsInfo"; // Import the AboutUsInfo component

import { useEffect } from "react";
const AboutUsPage = () => {
    useEffect(() => {
        document.title = "Crafted Curiosity- Edu | About Us";
    }, []);
  
    

  return (
    <>
      <Header />
      <AboutUsInfo />
      <Footer />
    </>
  );
};

export default AboutUsPage;