import React from "react";
import NavBar from "../../../common/NavBar/NavBar";
import RankingField from "./RankingField";
import Footer from "../../../common/Footer/Footer";

const RankingsPage = () => {
  return (
    <div className="flex flex-col gap-20 2xl:gap-40">
      <NavBar />
      <RankingField />
      <Footer />
    </div>
  );
};

export default RankingsPage;
