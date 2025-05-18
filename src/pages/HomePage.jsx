import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EachDayTemplate from "../template/EachDayTemplate";

const HomePage = () => {
    /*useEffect(() => {
        document.title = "Home Page";
    }, []);
    */

  return (
    <>
      <Header />
      <EachDayTemplate />
      <Footer />
    </>
  );
};

export default HomePage;