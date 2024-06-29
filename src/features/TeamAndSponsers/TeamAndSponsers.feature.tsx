import { HeadingPrimay, HeadingSecondary, Slider } from "@/components";
import { ITeam } from "@/interfaces";
import React from "react";

type Props = {
  renderSecondary: boolean;
};
export const teamMembers: ITeam[] = [
  {
    name: "محمدحسین طباطبائی فرد",
    title: "مدرس و بنیان گذار",
    imageSrc: "/images/tabatabaei.jpg",
  },
  {
    name: "عباس داورپناه",
    title: "مدیر تیم اجرایی",
    imageSrc: "/images/abbas.jpg",
  },
  {
    name: "علی رودکی",
    title: "مدیر تیم علمی",
    imageSrc: "/images/ali.jpeg",
  },
  {
    name: "سپهر ذکاوت",
    title: "مدیر تیم فنی",
    imageSrc: "/images/sepehr.jpg",
  },
  {
    name: "پوریا حاجتی",
    title: "توسعه دهنده وبسایت",
    imageSrc: "/images/pouria-hajati.webp",
  },
];
const TeamAndSponsers = (props: Props) => {
  return (
    <section id="team" className="w-full p-page mt-12 flex flex-col gap-20 ">
      <HeadingPrimay title="تیم ما" />
      <Slider
        isTeam={false}
        slidesPerView={1}
        slidesPerViewon700={2}
        slidesPerViewon1200={4}
        spaceBetween={50}
        items={teamMembers}
      />
        {props.renderSecondary? '' : <HeadingSecondary />  }
    </section>
  );
};

export { TeamAndSponsers };
