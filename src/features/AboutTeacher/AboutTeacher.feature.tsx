import { AboutTeacherTexts } from "@/components";
import React from "react";

type Props = {};

export const AboutTeacher = (props: Props) => {
  return (
    <section id="educator"
    className="w-full grid grid-cols-2 gap-20 bg-primary p-page py-7 lg:grid-cols-1 md:gap-10">
      <AboutTeacherTexts />
      <img src="/images/certificate.png" className="w-full h-full" alt="" />
    </section>
  );
};
