import React from "react";
import englandFlag from "../../../utils/england.jpg";
import danemarcaFlag from "../../../utils/danemarcaFlag.jpg";
import ukFlag from "../../../utils/ukFlag.jpg";
import esFlag from "../../../utils/esFlag.jpg";
import usFlag from "../../../utils/usFlag.jpg";
import austriaFlag from "../../../utils/Austria.png";
import franceFlag from "../../../utils/franceFlag.png";
import jonasPic from "../../../utils/jVingegaardProfilePic.png";
import tPogacarPic from "../../../utils/tPogacarProfilePic.png";
import aYatesPic from "../../../utils/AYates.png";
import sYatesPic from "../../../utils/sYatesPng.png";
import cRodriguez from "../../../utils/carlosRodriguez-removebg-preview.png";
import pbilbaoLopez from "../../../utils/bBilbaoLopez.png";
import jHindleyProfile from "../../../utils/jHindleyProfile.png";
import felixGall from "../../../utils/felixGall.png";
import dGaudu from "../../../utils/dGaudu.png";
import gMartin from "../../../utils/gMartin.png";

const RankingField = () => {
  const rankingRiderData = [
    {
      number: "#1",
      flag: danemarcaFlag,
      abbreviation: "J. VINGEGAARD",
      picture: jonasPic,
      team: "JUMBO-VISMA",
      time: "82h 05' 42''",
      gap: "-",
      stage: "B : 29''",
    },
    {
      number: "#11",
      flag: englandFlag,
      abbreviation: "T. POGAČAR",
      picture: tPogacarPic,
      team: "UAE TEAM EMIRATES",
      time: "82h 13' 11''",
      gap: "+ 00h 07' 29''",
      stage: "B : 51''",
    },
    {
      number: "#19",
      flag: ukFlag,
      abbreviation: "A. YATES",
      picture: aYatesPic,
      team: "UAE TEAM EMIRATES",
      time: "82h 16' 38''",
      gap: "+ 00h 10' 56''",
      stage: "B : 10''",
    },
    {
      number: "#161",
      flag: ukFlag,
      abbreviation: "S. YATES",
      picture: sYatesPic,

      team: "TEAM JAYCO ALULA",
      time: "82h 18' 05''",
      gap: "+ 00h 12' 23''",
      stage: "B : 19''",
    },
    {
      number: "#27",
      flag: esFlag,
      abbreviation: "C. RODRIGUEZ CANO",
      picture: cRodriguez,

      team: "INEOS GRENADIERS",
      time: "82h 18' 59''",
      gap: "+ 00h 13' 17''",
      stage: "B : 12''",
    },
    {
      number: "#65",
      flag: esFlag,
      abbreviation: "P. BILBAO LOPEZ",
      picture: pbilbaoLopez,
      team: "BAHRAIN VICTORIOUS",
      time: "82h 19' 09''",
      gap: "+ 00h 13' 27''",
      stage: "B : 14''",
    },
    {
      number: "#71",
      flag: usFlag,
      abbreviation: "J. HINDLEY",
      picture: jHindleyProfile,
      team: "BORA - HANSGROHE",
      time: "82h 20' 26''",
      gap: "+ 00h 14' 44''",
      stage: "B : 18''",
    },
    {
      number: "#95",
      flag: austriaFlag,
      abbreviation: "F. GALL",
      picture: felixGall,
      team: "AG2R CITROEN TEAM",
      time: "82h 21' 51''",
      gap: "+ 00h 16' 09''",
      stage: "B : 33''",
    },
    {
      number: "#31",
      flag: austriaFlag,
      abbreviation: "D. GAUDU",
      picture: dGaudu,
      team: "GROUPAMA - FDJ",
      time: "82h 28' 50''",
      gap: "+ 00h 23' 08''",
      stage: "-",
    },
    {
      number: "#121",
      flag: franceFlag,
      abbreviation: "G. MARTIN",
      team: "COFIDIS",
      picture: gMartin,
      time: "82h 32' 12''",
      gap: "+ 00h 26' 30''",
      stage: "-",
    },
  ];

  const getMyRankingFieldData = () => {
    return rankingRiderData.map((rider, index) => (
      <div
        key={index}
        className="flex gap-4 h-32 2xl:h-40  bg-gradient-to-br from-yellow-300 to-red-600  m-auto w-[90%] items-center rounded-lg justify-evenly px-4 "
      >
        <div className="  2xl:text-2xl ml-4 text-center w-[5%]">
          <div className="w-16 py-3 bg-red-500 rounded-full">{index + 1}</div>
        </div>
        <div className="flex h-full w-[45%] justify-start">
          {rider.picture ? (
            <div className="h-full w-32 2xl:w-56 ">
              <img
                src={rider.picture}
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
          ) : (
            ""
          )}
          <div className="flex items-center gap-2 2xl:text-2xl">
            <div className="">
              <div>{rider.number}</div>
              <div className="h-5 w-5 2xl:h-8 2xl:w-8">
                <img src={rider.flag} className="w-full h-full" alt="" />
              </div>
            </div>
            <div className="2xl:text-2xl">{rider.abbreviation}</div>
          </div>
        </div>
        <div className="w-[50%] flex justify-between 2xl:text-2xl">
          <div>{rider.time}</div>
          <div>{rider.gap}</div>
          <div>{rider.stage}</div>
        </div>
      </div>
    ));
  };

  return (
    <div className="flex flex-col gap-4 2xl:gap-8">
      {getMyRankingFieldData()}
    </div>
  );
};

export default RankingField;
