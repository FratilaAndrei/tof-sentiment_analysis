import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import the specific Swiper CSS
import JonasV from "../../utils/Jonas Vingegaard.jpg";
import TBenot from "../../utils/T Benot Rider.jpg";
import wKelderman from "../../utils/wKelderman.jpg";
import seppKuss from "../../utils/seppKuss.jpg";
import cLaporte from "../../utils/cLaporte.jpg";
import wVanAert from "../../utils/woutVanAert.jpg";
import { Autoplay } from "swiper/modules";

const Carrousel = () => {
  // @ts-ignore
  const breakpoints = {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.25,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    425: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  };

  const jumboVismaRiders = [
    { riderImg: JonasV, name: "Jonas Vingegaard" },
    { riderImg: TBenot, name: "Tiesj Benoot" },
    { riderImg: wKelderman, name: "Wilko Kelderman" },
    { riderImg: seppKuss, name: "Sepp Kuss" },
    { riderImg: cLaporte, name: "Christopher Laporte" },
    { riderImg: wVanAert, name: "Wout Van Aert" },
  ];

  const getJumboVismaRidersSlider = () => {
    return jumboVismaRiders.map((rider, index) => (
      <SwiperSlide
        key={index}
        className="h-full m-auto bg-gradient-to-br from-orange-600 to-yellow-500   object-cover rounded-3xl"
      >
        <img src={rider.riderImg} alt="" className="h-[300px] m-auto" />
        <div className="text-center pt-2 text-2xl text-white">{rider.name}</div>
      </SwiperSlide>
    ));
  };

  return (
    <div className="mt-20 mx-20 h-[450px] flex items-center ">
      <Swiper
        className="h-[350px]"
        // @ts-ignore
        breakpoints={breakpoints}
        slidesPerView={3} // Now it should work
        spaceBetween={40}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {getJumboVismaRidersSlider()}
      </Swiper>
    </div>
  );
};

export default Carrousel;
