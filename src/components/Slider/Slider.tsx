"use client";
import React from "react";
import { Navigation } from "swiper/modules";
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
};
const Slider = ({ items, slidesPerView, spaceBetween }: Props) => {
  return (
    <div className="w-full overflow-hidden">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        className="mySwiper !px-10">
        {items.map((item) => (
          <SwiperSlide className="!flex justify-center items-center !px-10">
            <BoxPrimary {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export { Slider };
