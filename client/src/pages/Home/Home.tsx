import React from "react";
import NavBar from "../../common/NavBar/NavBar";
import Carrousel from "./Carrousel";
import RedirectPanelMenu from "./RedirectPanelMenu";
import Footer from "../../common/Footer/Footer";

const Home = () => {
  return (
    <div className="">
      <NavBar />
      <Carrousel />
      <RedirectPanelMenu />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
