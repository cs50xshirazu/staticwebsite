"use client";
import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BoxPrimary } from "../";
import { ICourses } from "@/interfaces";

import "swiper/css";
import "swiper/css/navigation";
import { ITeam } from "@/interfaces/ITeam";

type Props = {
  slidesPerView: number;
  spaceBetween: number;
  items: ICourses[] | ITeam[];
  slidesPerViewon700: number;
  slidesPerViewon1200: number;
  isTeam: boolean;
};
const Slider = ({
  items,
  slidesPerView,
  spaceBetween,
  slidesPerViewon700,
  slidesPerViewon1200,
  isTeam,
}: Props) => {
  return (
    <div className="w-full overflow-hidden">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        className="mySwiper !px-10"
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        loop={true}
        breakpoints={{
          1200: {
            slidesPerView: slidesPerViewon1200,
          },
          700: {
            slidesPerView: slidesPerViewon700,
          },
        }}>
        {items.map((item, i) => (
          <SwiperSlide
            key={item.name + i}
            className="!flex justify-center items-center !px-10">
            <BoxPrimary {...item} isTeam={isTeam} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export { Slider };
