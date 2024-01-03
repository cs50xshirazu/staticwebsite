import {
  HeadingPrimay,
  HeadingSecondary,
  Video,
  ShirazUAbout,
  CourseFeatures,
} from "@/components";
import React from "react";

type Props = {};

export const AboutCS50x = (props: Props) => {
  return (
    <section className="w-full flex flex-col gap-6 mt-14 p-page">
      <HeadingPrimay className="font-GEO703 text-4.5xl" title="CS50x SHIRAZU" />
      <p className="text-justify p-5 text-quinary text-2xl font-semibold">
        CS50 دوره آموزش مبانی علوم کامپیوتر و آشنایی با منطق و الفبای برنامه
        نویسی است که نخستین بار در دانشگاه های هاروارد و ییل ارائه شد. دوره ی سی
        اس فیفتی یک دوره ی Open-License است که به تمام دنیا این اجازه را میدهد
        تا به صورت رایگان و با اسم CS50x همراه با پسوند اسم مکان برگزاری، محتوای
        دوره را با زبان و فرهنگ خودشان هماهنگ کنند و برگزار کنند.
      </p>
      <HeadingSecondary />
      <div className="w-full grid grid-cols-2 gap-10">
        <Video />
        <ShirazUAbout />
      </div>
      <CourseFeatures />
      <HeadingPrimay
        className="font-IranYekan text-4xl"
        title="ویژگی های دوره ی ما"
      />
      <p className="text-justify p-5 text-quinary text-2xl font-semibold">
        در پایان دوره های ما میتوانید گواهی معتبر پایان دوره برای دوره ی ثبت
        نامی خود را از دانشگاه هاروارد و گواهی حضور در دوره را از دانشگاه شیراز
        دریافت کنید. گواهی پایان دوره تحت دامنه دانشگاه هاروارد و گواهی حضور تحت
        دامنه دانشگاه شیراز صادر می گردد.
      </p>
    </section>
  );
};
