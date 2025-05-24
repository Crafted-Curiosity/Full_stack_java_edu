import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/aboutuscomponents/ContactForm";
import { useEffect } from "react";


const ContactUsPage = () => {
    useEffect(() => {
        document.title = "Crafted Curiosity- Edu | Contact Us";
    }, []);
  
    

  return (
    <>
      <Header />
      <ContactForm />
      <Footer />
    </>
  );
};

export default ContactUsPage;