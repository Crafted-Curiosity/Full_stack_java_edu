import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigator from "../components/homepagecomponents/Navigator";
import DisplayContent from "../components/homepagecomponents/DisplayContent";
//import EachDayTemplate from "../template/EachDayTemplate";

const HomePage = () => {
    /*useEffect(() => {
        document.title = "Home Page";
    }, []);
    {<EachDayTemplate />}
    */

  return (
    <>
      <Header />
      <Navigator />
      <DisplayContent />
      <Footer />
    </>
  );
};

export default HomePage;