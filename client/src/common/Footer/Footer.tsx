import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import the specific Swiper CSS
import { Autoplay } from "swiper/modules";
import logoImg from "../../utils/image-removebg-preview.png";
import Continental from "../../utils/continentalLogo.png";
import nttData from "../../utils/nttlogo.png";
import orangeLogo from "../../utils/orangelog.png";
import vittelLogo from "../../utils/vittellogo.png";
import zwiftLogo from "../../utils/zwiftLogo.png";
import stravaLogo from "../../utils/stravaLogo.png";
import bostikLogo from "../../utils/bostikLogo.png";
import shimanoLogo from "../../utils/shimanoLogo.png";

const Footer = () => {
  return (
    <div className="h-[165px] bg-gradient-to-br from-orange-500 to-yellow-500 flex mt-20">
      <div className=" h-full flex w-1/5 items-center">
        <div className="w-full h-full flex items-center ">
          <img
            src={logoImg}
            alt="leTourDeFrance"
            className="h-full rounded-r-full bg-gradient-to-br from-orange-500 to-yellow-500 w-48 shadow-xl"
          />
        </div>
      </div>

      <div className="w-4/5 ">
        {/* 2nd div top side (sponsors swiper)*/}

        {/* aspect-ratio - property of images/videos */}
        {/* TODO: Make the swiper and put all of these into an object array */}

        <div className="h-1/2 text-white flex justify-between items-center w-full">
          <img
            src={Continental}
            alt="Continental logo"
            className="aspect-[3/2] object-contain max-h-[80px] w-16 xl:w-32"
          />
          <img
            src={nttData}
            alt="NTT Data logo"
            className="aspect-[3/2] object-contain max-h-[80px] w-16 xl:w-32"
          />
          <img
            src={shimanoLogo}
            alt="Shimano logo"
            className="aspect-[3/2] object-contain max-h-[80px] w-16 xl:w-32"
          />
          <img
            src={vittelLogo}
            alt="Vittel logo"
            className="aspect-[3/2] object-contain max-h-[80px] w-16 xl:w-32"
          />
          <img
            src={bostikLogo}
            alt="Bostik logo"
            className="aspect-[3/2] object-contain max-h-[80px] w-16 xl:w-32"
          />
          <img
            src={orangeLogo}
            alt="Orange logo"
            className="aspect-[3/2] object-contain max-h-[80px] w-16 xl:w-32"
          />
          <img
            src={stravaLogo}
            alt="Strava logo"
            className="aspect-[3/2] object-contain max-h-[80px] w-16 xl:w-32"
          />
          <img
            src={zwiftLogo}
            alt="Zwift logo"
            className="aspect-[3/2] object-contain max-h-[80px] w-16 xl:w-32"
          />
        </div>

        {/* 2nd div bottom side (Terms and conditions, credits) */}
        <div className="h-1/2 text-white flex justify-between items-center border-solid border-t-2 border-color-white">
          <div className="flex w-2/3 justify-start font-medium">
            <div className="text-white text-xl pr-4">Terms & Conditions</div>
            <div className="text-white text-xl px-4">Contacts</div>
            <div className="text-white text-xl px-4">Privacy Policy</div>
          </div>
          <div className="text-white text-xl mr-2 font-medium">© A & D</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
