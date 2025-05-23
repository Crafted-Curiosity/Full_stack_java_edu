import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigator from "../components/homepagecomponents/Navigator";
import Welcomer from "../components/homepagecomponents/Welcomer";
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
      <Welcomer />
      <Navigator />
      <Footer />
    </>
  );
};

export default HomePage;