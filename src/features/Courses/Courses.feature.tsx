import { HeadingPrimay, Slider } from "@/components";
import { ICourses } from "@/interfaces";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {};
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
const Courses = (props: Props) => {
  return (
    <section className="p-page py-12 flex flex-col gap-10">
      <HeadingPrimay title="دوره ها" className="font-IranYekan text-3xl" />
      <Slider items={courses} slidesPerView={3} spaceBetween={100} />
    </section>
  );
};

export { Courses };
