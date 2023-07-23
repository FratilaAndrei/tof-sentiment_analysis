import React from "react";
import JonasV from "../../utils/Jonas Vingegaard.jpg";
import TadejP from "../../utils/Tadej.png";
import CarlosR from "../../utils/CarlosR.png";
import AdamY from "../../utils/AdamY.png";
import JaiH from "../../utils/JaiH.png";

const RiderDataPanel = () => {
  const riderData = [
    {
      image: JonasV,
      name: "Jonas Vingegaard",
      description:
        "Danish cyclist who competes for Team Jumbo–Visma, a UCI WorldTeam licensed team",
      birthDate: "December 10, 1996",
      weight: "60 KG",
      height: "1.75 m",
    },
    {
      image: TadejP,
      name: "Tadej Pogacar",
      description: "Slovenian cyclist, member of UAE Team Emirates",
      birthDate: "September 21, 1998",
      weight: "66 KG",
      height: "1.76 m",
    },
    {
      image: CarlosR,
      name: "Carlos Rodriguz Cano",
      description:
        "Spanish professional cyclist who competes for the Ineos Grenadiers team",
      birthDate: "February 2, 2001",
      weight: "67 KG",
      height: "1.83 m",
    },
    {
      image: AdamY,
      name: " Adam Yates",
      description:
        "British road and track cyclist and the twin brother of Simon Yates who rides for the Orica-GreenEDGE team",
      birthDate: "August 7, 1992",
      weight: "58 KG",
      height: "1.73 m",
    },
    {
      image: JaiH,
      name: "Jai Hindley",
      description:
        "Australian professional cyclist who rides for UCI WorldTeam Bora–Hansgrohe. He has been successful in the Giro d'Italia",
      birthDate: "May 5, 1996",
      weight: "60 KG",
      height: "1.75 m",
    },
  ];

  const getRaiderDataPanel = () => {
    return riderData.map((rider, index) => (
      <div className="flex h-[450px] w-1/3 justify-center " key={index}>
        <div className="bg-gradient-to-br from-orange-500 to-yellow-500 flex rounded-lg w-[95%] h-[95%]">
          <div className="w-1/3 h-auto px-2 flex py-20 ">
            <img
              src={rider.image}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-2/3 px-4 flex flex-col justify-center ">
            <div className="pb-4 text-2xl pt-4 text-center text-white h-1/4 flex items-center ">
              {rider.name}
            </div>
            <div className="text-white flex flex-col text-xl h-3/4 gap-2 ">
              <div>{rider.description}</div>
              <div>{rider.birthDate}</div>
              <div>{rider.weight}</div>
              <div>{rider.height}</div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="mt-20 flex justify-center flex-wrap w-full  ">
      {getRaiderDataPanel()}
    </div>
  );
};

export default RiderDataPanel;
