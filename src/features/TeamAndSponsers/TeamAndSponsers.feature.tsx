import { HeadingPrimay, HeadingSecondary, Slider } from "@/components";
import { ITeam } from "@/interfaces";
import React from "react";

type Props = {};
const teamMembers: ITeam[] = [
  {
    name: "آقای طباطبایی",
    title: "برنامه نویس تیم",
    imageSrc: "/images/teamImg.png",
  },
  {
    name: "آقای طباطبایی",
    title: "برنامه نویس تیم",
    imageSrc: "/images/teamImg.png",
  },
  {
    name: "آقای طباطبایی",
    title: "برنامه نویس تیم",
    imageSrc: "/images/teamImg.png",
  },
  {
    name: "آقای طباطبایی",
    title: "برنامه نویس تیم",
    imageSrc: "/images/teamImg.png",
  },
  {
    name: "آقای طباطبایی",
    title: "برنامه نویس تیم",
    imageSrc: "/images/teamImg.png",
  },
  {
    name: "آقای طباطبایی",
    title: "برنامه نویس تیم",
    imageSrc: "/images/teamImg.png",
  },
  {
    name: "آقای طباطبایی",
    title: "برنامه نویس تیم",
    imageSrc: "/images/teamImg.png",
  },
  {
    name: "آقای طباطبایی",
    title: "برنامه نویس تیم",
    imageSrc: "/images/teamImg.png",
  },
];
const TeamAndSponsers = (props: Props) => {
  return (
    <section className="w-full p-page mt-12 flex flex-col gap-20 ">
      <HeadingPrimay title="همکاران و اسپانسرها" />
      <Slider slidesPerView={4} spaceBetween={50} items={teamMembers} />
      <HeadingSecondary />
    </section>
  );
};

export { TeamAndSponsers };
