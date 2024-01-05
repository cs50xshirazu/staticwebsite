"use client";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BoxPrimary } from "../";

import "swiper/css";
import "swiper/css/navigation";

interface ICourses {
  name: string;
  link?: string;
  imageSrc: string;
}
const courses: ICourses[] = [
  {
    name: "دوره مبانی علوم کامپیوتر هاروارد (CS50x)",
    link: "/a",
    imageSrc: "/images/teamImg.png",
  },
  {
    name: "دوره مبانی علوم کامپیوتر هاروارد (CS50x)",
    link: "/",
    imageSrc: "/images/teamImg.png",
  },
  {
    name: "دوره مبانی علوم کامپیوتر هاروارد (CS50x)",
    link: "/",
    imageSrc: "/images/teamImg.png",
  },
  {
    name: "دوره مبانی علوم کامپیوتر هاروارد (CS50x)",
    link: "/",
    imageSrc: "/images/teamImg.png",
  },
  {
    name: "دوره مبانی علوم کامپیوتر هاروارد (CS50x)",
    link: "/",
    imageSrc: "/images/teamImg.png",
  },
];
const Slider = () => {
  return (
    <div className="w-full overflow-hidden">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={100}
        className="mySwiper !px-10">
        {courses.map((course) => (
          <SwiperSlide className="!flex justify-center items-center !px-10">
            <BoxPrimary {...course} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export { Slider };
