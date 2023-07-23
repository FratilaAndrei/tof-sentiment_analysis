import React from "react";
import "../../index.css";
import panelImage1 from "../../utils/panelMenu1.jpg.png";
import rankingPanel from "../../utils/rankinngPanel.jpg";
import panelImage3 from "../../utils/panelMenu3.jpg";
import englandFlag from "../../utils/england.jpg";
import danemarcaFlag from "../../utils/danemarcaFlag.jpg";
import ukFlag from "../../utils/ukFlag.jpg";
import esFlag from "../../utils/esFlag.jpg";
import usFlag from "../../utils/usFlag.jpg";
import australiaFlag from "../../utils/austaliaFlag.jpg";

const RedirectPanelMenu = () => {
  const panelMenu = [
    {
      backgroundImage: panelImage1,
      label: "Riders",
      link: "/riders",
    },
    {
      backgroundImage: rankingPanel,
      label: "Rankings",
      link: "/rankings",
    },
    {
      backgroundImage: panelImage3,
      label: "Locations",
      link: "/locations",
    },
  ];

  const rankingRiders = [
    {
      flag: danemarcaFlag,
      riderName: "Jonas VINGEGAARD",
      team: "Jumbo-Visma",
      timeScore: `63h 06'53"`,
    },
    {
      flag: englandFlag,
      riderName: "Tadej POGACAR",
      team: "UAE TEAMEMIRATES",
      timeScore: `+ 00h 01'48"`,
    },
    {
      flag: ukFlag,
      riderName: "Adam YATES",
      team: "UAE TEAMEMIRATES",
      timeScore: `+ 00h 08'52"`,
    },
    {
      flag: esFlag,
      riderName: "Carlos RODRIGUEZ",
      team: "INEOS GRENADIERS",
      timeScore: `+ 00h 08'57"`,
    },
    {
      flag: australiaFlag,
      riderName: "Jai HINDLEY",
      team: "BORA - HANSGROHE",
      timeScore: `+ 00h 11'15"`,
    },
    {
      flag: usFlag,
      riderName: "Sepp Kuss",
      team: "JUMBO-VISMA",
      timeScore: `+ 00h 12'56"`,
    },
    {
      flag: esFlag,
      riderName: "Pello BILBAO LOPEZ",
      team: "BAHNRAIN VICTORIOUS",
      timeScore: `+ 00h 13'06"`,
    },
  ];

  const getLastRankingBorder = (index: number) => {
    return index === rankingRiders.length - 1
      ? "border-none"
      : "border-b-4 border-orange-500";
  };

  const getRankingRiders = () => {
    return rankingRiders.map((rider, index) => (
      <div
        className={`flex items-center pl-2 text-sm gap-4 py-2 border-b-4 border-orange-500 ${getLastRankingBorder(
          index
        )}`}
        key={index}
      >
        <div className="w-[10%] h-[20px]">
          <img src={rider.flag} alt="" className="h-full w-full object-fit" />
        </div>
        <div className="text-start w-[55%]">
          <div className="font-bold text-sm">{rider.riderName}</div>
          <div className="line-clamp-1">{rider.team}</div>
        </div>
        <div className="w-[35%]">{rider.timeScore}</div>
      </div>
    ));
  };

  const getMyPanelMenuData = () => {
    return panelMenu.map((panel, index) => (
      <div
        key={index}
        className="w-1/3 bg-contain h-[300px] text-white text-2xl font-bold pt-4 text-center flex flex-col justify-between "
        style={{ backgroundImage: `url(${panel.backgroundImage})` }}
      >
        {panel.label}
        <div className="bg-gradient-to-br from-orange-500 to-yellow-500 mx-4 py-2 mb-4 opacity-90">
          <a href={panel.link}>Discover</a>
        </div>
      </div>
    ));
  };

  return (
    <div className="flex items-center">
      <div className="w-[70%] flex gap-4 mx-4">{getMyPanelMenuData()}</div>
      <div className="w-[30%] bg-gradient-to-tr from-orange-100 to-yellow-600 text-center h-fit rounded-xl mr-2">
        <div className="py-2 text-2xl text-white font-semibold font-serif">
          <i>Rankings</i>
        </div>
        {getRankingRiders()}
      </div>
    </div>
  );
};

export default RedirectPanelMenu;
