import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { useEffect } from "react";
const AboutUsPage = () => {
    useEffect(() => {
        document.title = "Crafted Curiosity- Edu | About Us";
    }, []);
  
    

  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default AboutUsPage;