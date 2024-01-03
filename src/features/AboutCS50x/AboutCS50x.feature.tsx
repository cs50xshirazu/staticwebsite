import { HeadingPrimay } from "@/components";
import React from "react";

type Props = {};

export const AboutCS50x = (props: Props) => {
  return (
    <section className="w-full flex flex-col gap-6 mt-14 p-page">
      <HeadingPrimay className="font-GEO703" title="CS50x SHIRAZU" />
      <p className="text-justify p-5 text-quinary text-2xl font-semibold font-IranYekan">
        CS50 دوره آموزش مبانی علوم کامپیوتر و آشنایی با منطق و الفبای برنامه
        نویسی است که نخستین بار در دانشگاه های هاروارد و ییل ارائه شد. دوره ی سی
        اس فیفتی یک دوره ی Open-License است که به تمام دنیا این اجازه را میدهد
        تا به صورت رایگان و با اسم CS50x همراه با پسوند اسم مکان برگزاری، محتوای
        دوره را با زبان و فرهنگ خودشان هماهنگ کنند و برگزار کنند.{" "}
      </p>
    </section>
  );
};
