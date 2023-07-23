import React from "react";
import NavBar from "../../common/NavBar/NavBar";
import Carrousel from "./Carrousel";
import RedirectPanelMenu from "./RedirectPanelMenu";

const Home = () => {
  return (
    <div className="">
      <NavBar />
      <Carrousel />
      <RedirectPanelMenu />
    </div>
  );
};

export default Home;
