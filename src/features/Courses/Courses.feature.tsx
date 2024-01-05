import { HeadingPrimay, Slider } from "@/components";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {};

const Courses = (props: Props) => {
  return (
    <section className="p-page py-12 flex flex-col gap-10">
      <HeadingPrimay title="دوره ها" className="font-IranYekan text-3xl" />
      <Slider />
    </section>
  );
};

export { Courses };
