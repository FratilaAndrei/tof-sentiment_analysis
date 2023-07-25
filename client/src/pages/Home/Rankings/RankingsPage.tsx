import React from "react";
import NavBar from "../../../common/NavBar/NavBar";
import RankingField from "./RankingField";

const RankingsPage = () => {
  return (
    <div className="flex flex-col gap-20 2xl:gap-40">
      <NavBar />
      <div>
        <div className="flex pb-4 2xl:text-4xl">
          <div className="w-[20%] text-center">Position</div>
          <div className="w-[45%] flex justify-evenly">
            <div>flag number name</div>
            <div>time</div>
          </div>
          <div className="w-[35%] flex justify-center ">
            <div className="w-1/2">gap</div>
            <div className="w-[1/2">stage</div>
          </div>
        </div>
        <RankingField />
      </div>
    </div>
  );
};

export default RankingsPage;
