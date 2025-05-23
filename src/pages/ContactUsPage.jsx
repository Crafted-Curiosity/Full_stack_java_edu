import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";
const ContactUsPage = () => {
    useEffect(() => {
        document.title = "Crafted Curiosity- Edu | Contact Us";
    }, []);
  
    

  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default ContactUsPage;