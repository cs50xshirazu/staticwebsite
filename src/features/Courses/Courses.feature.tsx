import { HeadingPrimay, Slider } from "@/components";
import { ICourses } from "@/interfaces";
import React from "react";

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
    <section id="courses" className="p-page py-12 flex flex-col gap-10">
      <HeadingPrimay title="دوره ها" className="font-IranYekan text-3xl" />
      <Slider
        isTeam={false}
        items={courses}
        slidesPerView={1}
        slidesPerViewon700={2}
        slidesPerViewon1200={3}
        spaceBetween={100}
      />
    </section>
  );
};

export { Courses };
