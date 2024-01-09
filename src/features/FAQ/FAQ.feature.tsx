import { CustomAccordion, HeadingPrimay } from "@/components";
import React from "react";

type Props = {};

const Faq = (props: Props) => {
  return (
    <section className="w-full p-page flex flex-col gap-10 mt-10">
      <HeadingPrimay title="سوالات متداول" />
      <CustomAccordion />
    </section>
  );
};

export { Faq };
